import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

/* ─── Rate limiter (in-memory, per IP) ───────────────────────────────────── */
// Max 3 submissions per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const WINDOW_MS = 10 * 60 * 1000; // 10 min
  const MAX_HITS = 3;

  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_HITS) return true;
  entry.count++;
  return false;
}

/* ─── HTML sanitiser ─────────────────────────────────────────────────────── */
function strip(s: string): string {
  return s
    .replace(/<[^>]*>/g, "")          // strip HTML tags
    .replace(/[&<>"']/g, (c) =>       // escape remaining special chars
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] ?? c)
    )
    .trim();
}

/* ─── Route handler ──────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  // 1. Rate limiting — read IP from forwarded header (works behind Vercel/proxies)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a few minutes." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, _hp, loadedAt } = body as Record<string, string | number>;

  // 3. Honeypot — bots fill this hidden field; humans never see it
  if (_hp) {
    // Silently accept so bots don't know they were caught
    return NextResponse.json({ ok: true });
  }

  // 4. Time guard — reject submissions faster than 3 s (almost always bots)
  const elapsed = Date.now() - Number(loadedAt ?? 0);
  if (elapsed < 3000) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }

  // 5. Field presence & length limits
  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 254 || message.length > 3000) {
    return NextResponse.json({ error: "Input exceeds allowed length." }, { status: 400 });
  }

  // 6. Email format
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRe.test(email.trim())) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // 7. Send via Resend — recipient lives only server-side in env
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;

  if (!apiKey || !recipient) {
    console.error("Missing RESEND_API_KEY or CONTACT_EMAIL env vars.");
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: email.trim(),
      subject: `New message from ${strip(name)}`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;background:#f9f6f1;border-radius:8px;">
          <h2 style="margin:0 0 24px;font-size:20px;font-weight:700;color:#171717;">New contact from your portfolio</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#737373;font-size:12px;width:80px;vertical-align:top;">NAME</td>
              <td style="padding:8px 0;color:#171717;font-size:14px;">${strip(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#737373;font-size:12px;vertical-align:top;">EMAIL</td>
              <td style="padding:8px 0;font-size:14px;"><a href="mailto:${strip(email)}" style="color:#171717;">${strip(email)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#737373;font-size:12px;vertical-align:top;">MESSAGE</td>
              <td style="padding:8px 0;color:#171717;font-size:14px;line-height:1.7;white-space:pre-wrap;">${strip(message)}</td>
            </tr>
          </table>
          <p style="margin:32px 0 0;font-size:11px;color:#a8a29e;">Sent from pabloparma.com — reply directly to this email to reach the sender.</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}

// Block every other HTTP method
export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
