"use client";

import React, { useEffect, useRef, useState } from "react";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { LinkButton } from "@/ui/components/LinkButton";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CTAButton } from "@/src/components/CTAButton";

/* ─── Math captcha generator ─────────────────────────────────────────────── */
function makeCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { question: `${a} + ${b}`, answer: a + b };
}

/* ─── Field component ────────────────────────────────────────────────────── */
function Field({
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
      <label className="text-caption font-caption text-subtext-color uppercase tracking-widest">
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            className="text-caption font-caption"
            style={{ color: "rgb(239, 68, 68)" }}
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

const inputClass =
  "w-full bg-transparent border-b border-neutral-border text-body font-body text-default-font py-3 outline-none transition-colors duration-200 focus:border-default-font placeholder:text-subtext-color";

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  const loadedAtRef = useRef(Date.now());
  const [captcha, setCaptcha] = useState({ question: "", answer: 0 });

  const [form, setForm] = useState({ name: "", email: "", message: "", captchaInput: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    setCaptcha(makeCaptcha());
    window.scrollTo(0, 0);
  }, []);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    else if (form.name.length > 120) e.name = "Name is too long.";

    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      e.email = "Enter a valid email address.";

    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.length > 3000) e.message = "Keep it under 3,000 characters.";

    if (!form.captchaInput.trim()) e.captcha = "Please answer the question.";
    else if (parseInt(form.captchaInput, 10) !== captcha.answer)
      e.captcha = "That doesn't add up — try again.";

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
          _hp: "",           // honeypot — always empty from real users
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

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-default-background">
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

      <main className="w-full max-w-7xl mx-auto px-14 mobile:px-6 pb-24 pt-[110px]">
        <div className="grid grid-cols-[1fr_1fr] gap-24 mobile:grid-cols-1 mobile:gap-12">

          {/* ── Left — heading + copy ── */}
          <motion.div
            className="flex flex-col gap-8 pt-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex flex-col gap-4">
              <span className="text-caption font-caption text-subtext-color uppercase tracking-widest">
                Contact
              </span>
              <h1
                className="font-heading-1 text-default-font"
                style={{
                  fontSize: "clamp(36px, 5vw, 72px)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                }}
              >
                LET&apos;S WORK<br />TOGETHER
              </h1>
            </div>

            <p
              className="text-body-big font-body-big text-subtext-color"
              style={{ lineHeight: 1.75, maxWidth: "340px" } as React.CSSProperties}
            >
              Have a project in mind, a question, or just want to say hi?
              Fill in the form and I&apos;ll get back to you —{" "}
              <span className="text-default-font">no worries, I&apos;ll reach out.</span>
            </p>

            <div className="flex flex-col gap-2 pt-4">
              <div className="w-full h-px bg-neutral-border" />
              <div className="flex items-center gap-3 py-3">
                <span className="text-caption font-caption text-subtext-color uppercase tracking-widest">Based in</span>
                <span className="text-caption font-caption text-default-font">Rosario, Argentina</span>
              </div>
              <div className="w-full h-px bg-neutral-border" />
            </div>
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="flex flex-col gap-6 pt-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="flex flex-col gap-4">
                    <span
                      className="font-heading-2 text-default-font"
                      style={{ fontSize: "clamp(24px, 3vw, 40px)", letterSpacing: "-0.02em", fontWeight: 700 }}
                    >
                      Message sent.
                    </span>
                    <p className="text-body-big font-body-big text-subtext-color" style={{ lineHeight: 1.75 }}>
                      Thanks for reaching out. I&apos;ll get back to you as soon as I can —
                      no worries, you&apos;ll hear from me.
                    </p>
                  </div>
                  <Link href="/">
                    <motion.span
                      className="inline-flex items-center gap-1 text-caption font-caption text-default-font"
                      style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      ← Back to home
                    </motion.span>
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8 pt-2"
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

                  <Field label="Your name" error={errors.name}>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      maxLength={120}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Your email" error={errors.email}>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      maxLength={254}
                      autoComplete="email"
                    />
                  </Field>

                  <Field label="Message" error={errors.message}>
                    <textarea
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project or just say hi…"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      maxLength={3000}
                    />
                    <span className="text-caption font-caption text-subtext-color self-end">
                      {form.message.length}/3000
                    </span>
                  </Field>

                  {/* Human check */}
                  <Field label={`Quick check — what is ${captcha.question}?`} error={errors.captcha}>
                    <input
                      type="number"
                      className={inputClass}
                      placeholder="Your answer"
                      value={form.captchaInput}
                      onChange={(e) => handleChange("captchaInput", e.target.value)}
                      min={0}
                      max={99}
                    />
                  </Field>

                  {/* Server error */}
                  <AnimatePresence>
                    {status === "error" && serverError && (
                      <motion.p
                        className="text-caption font-caption"
                        style={{ color: "rgb(239, 68, 68)" }}
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
                    {status === "sending" ? "Sending…" : "Send message"}
                  </CTAButton>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
