"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { LinkButton } from "@/ui/components/LinkButton";
import { CTAButton } from "@/src/components/CTAButton";
import { SiteFooter } from "@/src/components/SiteFooter";

/* ─── Constants ───────────────────────────────────────────────────────────── */

const LINKEDIN = "https://www.linkedin.com/in/pabloparma/";
const CV_PDF = "/Pablo_Parma-Product_Designer.pdf";

const FOLDER_TOP_PATH =
  "M0 24C0 10.7452 10.7452 0 24 0H254.615C260.947 0 267.022 2.50218 271.518 6.96142L312.965 48.0771C321.955 56.9956 334.106 62 346.769 62H840C853.255 62 864 72.7452 864 86V104H0L0 24Z";

/* ─── Scroll reveal ───────────────────────────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section header (orange +, caption, rule, display heading) ──────────── */

function SectionHeader({ caption, heading }: { caption: string; heading: string }) {
  return (
    <Reveal>
      <div className="flex items-center justify-between">
        <span
          className="select-none text-[22px] font-bold leading-none"
          style={{ color: "var(--color-accent)" }}
        >
          +
        </span>
        <span className="text-caption font-caption text-subtext-color uppercase tracking-widest tabular-nums">
          {caption}
        </span>
      </div>
      <div className="mt-2 h-px w-full bg-neutral-border" />
      <h2
        className="font-heading-2 text-default-font py-5"
        style={{ fontSize: "clamp(24px,2.8vw,38px)", lineHeight: 1.08, letterSpacing: "-0.015em", fontWeight: 700 }}
      >
        {heading}
      </h2>
    </Reveal>
  );
}

/* ─── Dark contact form — posts to the same /api/contact as the contact page ── */

const darkInputClass =
  "w-full bg-transparent border-b py-3 text-body font-body outline-none transition-colors duration-200";

function DarkField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-caption font-caption uppercase tracking-widest"
        style={{ color: "rgba(249,246,241,0.4)" }}
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            className="text-caption font-caption"
            style={{ color: "rgb(248, 113, 113)" }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function HireContactForm() {
  const loadedAtRef = useRef(Date.now());
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    else if (form.name.length > 120) e.name = "Name is too long.";

    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Enter a valid email address.";

    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.length > 3000) e.message = "Keep it under 3,000 characters.";

    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _hp: "", // honeypot — always empty from real users
          loadedAt: loadedAtRef.current,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function handleChange(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  const inputStyle: React.CSSProperties = {
    color: "rgb(249,246,241)",
    borderColor: "rgba(249,246,241,0.2)",
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span
            className="font-heading-2"
            style={{ fontSize: "clamp(22px,2.5vw,32px)", letterSpacing: "-0.02em", fontWeight: 700 }}
          >
            Message sent.
          </span>
          <p className="text-[14px]" style={{ color: "rgba(249,246,241,0.55)", lineHeight: 1.75 }}>
            Thanks for reaching out. I&apos;ll get back to you as soon as I can — usually
            within a day.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Honeypot — hidden from real users, only bots fill it */}
          <input
            type="text"
            name="_hp"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
            onChange={() => {}}
          />

          <DarkField label="Your name" error={errors.name}>
            <input
              type="text"
              className={darkInputClass}
              style={inputStyle}
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgb(249,246,241)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(249,246,241,0.2)")}
              maxLength={120}
              autoComplete="name"
            />
          </DarkField>

          <DarkField label="Your email" error={errors.email}>
            <input
              type="email"
              className={darkInputClass}
              style={inputStyle}
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgb(249,246,241)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(249,246,241,0.2)")}
              maxLength={254}
              autoComplete="email"
            />
          </DarkField>

          <DarkField label="Message" error={errors.message}>
            <textarea
              className={`${darkInputClass} resize-none`}
              style={inputStyle}
              placeholder="Tell me about your product, team and role…"
              rows={4}
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgb(249,246,241)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(249,246,241,0.2)")}
              maxLength={3000}
            />
          </DarkField>

          <AnimatePresence>
            {status === "error" && serverError && (
              <motion.p
                className="text-caption font-caption"
                style={{ color: "rgb(248, 113, 113)" }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {serverError}
              </motion.p>
            )}
          </AnimatePresence>

          <CTAButton
            variant="accent"
            type="submit"
            disabled={status === "sending"}
            className="self-start"
          >
            {status === "sending" ? "Sending…" : "Send message ↗"}
          </CTAButton>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: "12+", label: "Years in product design" },
  { value: "100+", label: "Components shipped to one design system" },
  { value: "30%", label: "Engagement lift on BridgeHaul mobile" },
  { value: "40%", label: "Onboarding friction cut on DocSnap.ai" },
];

const CAPS = [
  {
    num: "01",
    title: "UX Research & Strategy",
    desc: "Workshops, personas and journey maps that turn user insight into validated product decisions.",
  },
  {
    num: "02",
    title: "Design Systems",
    desc: "Scalable Figma libraries aligned with React, Tailwind and shadcn — built for clean dev handoff.",
  },
  {
    num: "03",
    title: "Mobile & Web Apps",
    desc: "End-to-end product design across iOS, Android and web, for apps serving millions of users.",
  },
  {
    num: "04",
    title: "AI-Powered UX",
    desc: "Prototyping with Claude and Gemini to research, validate and ship faster — 30%+ shorter validation cycles.",
  },
];

const OUTCOMES = [
  {
    num: "01/",
    company: "Sally Beauty · Concord",
    title: "End-to-end design for retail apps serving millions of users",
    result: "Architected 100+ components into the design system across iOS and Android.",
    href: "/works",
    dark: false,
  },
  {
    num: "02/",
    company: "BridgeHaul · Nimble.la",
    title: "Redesigned freight logistics mobile app",
    result: "Streamlined operator workflows and increased user engagement by 30%.",
    href: "/case-study-bh",
    dark: false,
  },
  {
    num: "03/",
    company: "DocSnap.ai · Nimble.la",
    title: "AI-powered contract-insights platform",
    result: "Redesigned onboarding, reducing user-reported friction by 40%.",
    href: "/case-study-docsnap",
    dark: true,
  },
];

const EXPERIENCE = [
  { role: "Senior Product Designer", company: "Concord — Sally Beauty", period: "2025 — Now" },
  { role: "Senior Product Designer", company: "Nimble.la", period: "2023 — 2025" },
  { role: "Senior Product Designer", company: "Google C+E Studio (via Blink)", period: "2021 — 2022" },
  { role: "Lead UI/UX Designer", company: "Yappa World Inc.", period: "2020 — 2021" },
  { role: "Product Designer", company: "Fulcrum / Redstage", period: "2019 — 2020" },
  { role: "UI/UX Designer — XR", company: "OZ Digital Consulting", period: "2018 — 2019" },
  { role: "UI/UX Designer", company: "BairesDev", period: "2017 — 2018" },
  { role: "UI/UX Designer", company: "Wrap Media", period: "2016 — 2017" },
  { role: "UI/UX Designer", company: "G2K Argentina S.A.", period: "2013 — 2016" },
];

const LOGISTICS = [
  { k: "Location", v: "Rosario, Argentina — GMT-3, full overlap with US hours" },
  { k: "Work setup", v: "Remote — 8+ years on distributed teams (US & global clients)" },
  { k: "Languages", v: "English advanced · Spanish native" },
  { k: "Design", v: "Figma, design systems, prototyping, user research" },
  { k: "Engineering fluency", v: "React, Tailwind CSS, shadcn, HTML/CSS" },
  { k: "AI workflow", v: "Claude, Gemini, Cursor — research, prototyping, shipping" },
  { k: "Availability", v: "Open to senior product design roles — full-time or contract" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

function HireMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-default-background text-default-font">
      <NavigationHeader
        className="z-50"
        title="Pablo Parma"
        navigation={
          <>
            <Link href="/works">
              <LinkButton onClick={() => {}}>Work</LinkButton>
            </Link>
            <Link href="/ai">
              <LinkButton onClick={() => {}}>AI Experiments</LinkButton>
            </Link>
            <Link href="/cv">
              <LinkButton onClick={() => {}}>CV</LinkButton>
            </Link>
          </>
        }
        logoppd={
          <>
            <Link href="/">
              <div className="flex items-center gap-2">
                <img
                  className="w-9 flex-none"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756584504/uploads/20526/c5wl89v9jqmlegnamrmo.svg"
                  alt="Pablo Parma logo"
                />
              </div>
            </Link>
            <Link href="/">
              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <span className="text-heading-3 font-heading-3 text-default-font">Pablo Parma</span>
                <span className="w-full text-caption font-caption text-subtext-color">Product Designer</span>
              </div>
            </Link>
          </>
        }
      />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-[130px] sm:pt-[150px]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-caption font-caption text-subtext-color uppercase tracking-widest">
              Open to senior product design roles
            </span>
            <span className="text-subtext-color opacity-40">·</span>
            <span className="text-caption font-caption text-subtext-color uppercase tracking-widest">
              Remote · GMT-3
            </span>
            <span
              className="text-caption font-caption rounded-full px-3 py-0.5"
              style={{ color: "rgb(22,163,74)", backgroundColor: "rgba(34,197,94,0.12)" }}
            >
              ● Available
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            className="font-heading-1 mt-6 max-w-4xl text-default-font"
            style={{ fontSize: "clamp(38px,6vw,84px)", lineHeight: 0.96, letterSpacing: "-0.04em", fontWeight: 700 }}
          >
            Senior Product Designer for teams shipping{" "}
            <span style={{ color: "var(--color-accent)" }}>AI-era</span> products.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p
            className="text-body-big font-body-big text-subtext-color mt-7 max-w-xl"
            style={{ lineHeight: 1.75 }}
          >
            12+ years designing mobile and web products — from Google C+E Studio to AI
            platforms. I build design systems engineers love, and I prototype with Claude
            and Gemini to ship validated UX faster.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href="/contact">
              <CTAButton variant="accent">Start a conversation ↗</CTAButton>
            </Link>
            <a
              href={CV_PDF}
              download
              className="text-caption font-caption text-subtext-color underline underline-offset-4 transition-colors hover:text-default-font"
            >
              Download CV (PDF)
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption font-caption text-subtext-color underline underline-offset-4 transition-colors hover:text-default-font"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Proof strip ── */}
      <section
        className="border-y border-solid border-neutral-border"
        style={{ background: "rgba(23,23,23,0.03)" }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.09} className="px-6 py-8">
              <div
                className="font-heading-2 text-default-font"
                style={{ fontSize: "clamp(30px,3.2vw,52px)", letterSpacing: "-0.03em", lineHeight: 1, fontWeight: 700 }}
              >
                {s.value}
              </div>
              <div className="text-caption font-caption text-subtext-color mt-2 uppercase tracking-widest">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What I bring ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHeader caption="01 — Capabilities" heading="What I bring to your team" />
        <div className="grid gap-px border border-solid border-neutral-border bg-neutral-border sm:grid-cols-2">
          {CAPS.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08} className="h-full">
              <div className="h-full bg-default-background px-7 py-8 transition-colors hover:bg-white/40">
                <div className="text-caption font-caption text-subtext-color uppercase tracking-widest opacity-60">
                  {c.num}
                </div>
                <div className="text-default-font mt-3 text-[13px] font-semibold uppercase tracking-[0.07em]">
                  {c.title}
                </div>
                <p className="text-body font-body text-subtext-color mt-2" style={{ lineHeight: 1.65 }}>
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHeader caption="02 — Recent outcomes" heading="Results, not just screens" />
        <div className="grid gap-4 lg:grid-cols-3">
          {OUTCOMES.map((o, i) => {
            const bg = o.dark ? "var(--color-surface-dark)" : "rgb(228,222,215)";
            const fg = o.dark ? "var(--color-background)" : "var(--color-font)";
            const sub = o.dark ? "rgba(249,246,241,0.5)" : "var(--color-subtext)";
            return (
              <Reveal key={o.num} delay={i * 0.1} className="h-full">
                <Link
                  href={o.href}
                  className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-2"
                >
                  <svg viewBox="0 0 864 104" width="100%" aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
                    <path d={FOLDER_TOP_PATH} fill={o.dark ? "rgb(17,17,17)" : "rgb(228,222,215)"} />
                  </svg>
                  <div
                    className="flex grow flex-col gap-5 px-6 pb-7"
                    style={{ background: bg, borderRadius: "0 0 18px 18px", marginTop: "-1px" }}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-caption font-caption uppercase tracking-widest" style={{ color: sub }}>
                        {o.company}
                      </span>
                      <span
                        className="text-[13px] font-medium tabular-nums"
                        style={{ color: o.dark ? "rgba(249,246,241,0.2)" : "rgba(23,23,23,0.18)" }}
                      >
                        {o.num}
                      </span>
                    </div>
                    <div className="mt-auto flex flex-col gap-2">
                      <span
                        className="text-[17px] font-bold leading-snug"
                        style={{ color: fg, letterSpacing: "-0.02em" }}
                      >
                        {o.title}
                      </span>
                      <span className="text-body font-body" style={{ color: sub, lineHeight: 1.6 }}>
                        {o.result}
                      </span>
                      <span
                        className="mt-1 text-[12px] underline underline-offset-4 opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: o.dark ? "rgb(255,140,80)" : "var(--color-accent)" }}
                      >
                        View case study ↗
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHeader caption="03 — Track record" heading="Where I've worked" />
        <div>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.company} delay={Math.min(i * 0.05, 0.25)}>
              <div
                className={`grid grid-cols-1 gap-1 py-4 sm:grid-cols-[2fr_2fr_1fr] sm:items-baseline sm:gap-6 ${
                  i > 0 ? "border-t border-solid border-neutral-border" : ""
                }`}
              >
                <span className="text-default-font text-[14px] font-semibold">{e.role}</span>
                <span className="text-body font-body text-subtext-color">{e.company}</span>
                <span className="text-caption font-caption text-subtext-color tabular-nums opacity-70 sm:text-right">
                  {e.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Logistics / hiring fit ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHeader caption="04 — The practical part" heading="Hiring fit, at a glance" />
        <div className="grid gap-x-12 lg:grid-cols-2">
          {LOGISTICS.map((l, i) => (
            <Reveal key={l.k} delay={Math.min(i * 0.06, 0.24)}>
              <div className="flex gap-6 border-b border-solid border-neutral-border py-3.5">
                <span className="text-caption font-caption text-subtext-color w-36 shrink-0 pt-0.5 uppercase tracking-widest opacity-80">
                  {l.k}
                </span>
                <span className="text-body font-body text-default-font" style={{ lineHeight: 1.6 }}>
                  {l.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Final CTA — dark panel with embedded contact form ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div
            className="px-8 py-14 sm:px-14"
            style={{
              background: "var(--color-surface-dark)",
              borderRadius: "18px",
              color: "rgb(249,246,241)",
            }}
          >
            <div className="grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
              {/* Left — pitch + links */}
              <div className="flex flex-col">
                <span
                  className="text-caption font-caption uppercase tracking-widest"
                  style={{ color: "rgba(249,246,241,0.4)" }}
                >
                  ● Available now — let&apos;s talk
                </span>
                <h2
                  className="font-heading-2 mt-4"
                  style={{ fontSize: "clamp(28px,4vw,54px)", lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 700 }}
                >
                  Hiring a product designer?
                </h2>
                <p
                  className="mt-5 max-w-lg text-[14px]"
                  style={{ color: "rgba(249,246,241,0.55)", lineHeight: 1.75 }}
                >
                  Tell me about your product and team. I usually reply within a day — and
                  I&apos;m happy to walk through case studies live.
                </p>
                <div
                  className="mt-auto flex flex-wrap gap-6 pt-10"
                  style={{ borderTop: "1px solid rgba(249,246,241,0.12)", marginTop: "2.5rem", paddingTop: "1.5rem" }}
                >
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] underline underline-offset-4 transition-colors hover:text-white"
                    style={{ color: "rgba(249,246,241,0.6)" }}
                  >
                    LinkedIn ↗
                  </a>
                  <Link
                    href="/"
                    className="text-[13px] underline underline-offset-4 transition-colors hover:text-white"
                    style={{ color: "rgba(249,246,241,0.6)" }}
                  >
                    Full portfolio ↗
                  </Link>
                  <a
                    href={CV_PDF}
                    download
                    className="text-[13px] underline underline-offset-4 transition-colors hover:text-white"
                    style={{ color: "rgba(249,246,241,0.6)" }}
                  >
                    CV (PDF) ↗
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <HireContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

export default HireMe;
