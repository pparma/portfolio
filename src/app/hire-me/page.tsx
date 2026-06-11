"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTAButton } from "@/src/components/CTAButton";
import { SiteFooter } from "@/src/components/SiteFooter";

/* ─── Constants ───────────────────────────────────────────────────────────── */

const EMAIL = "pabloparma@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/pabloparma/";
const CV_PDF = "/Pablo_Parma-Product_Designer.pdf";
const ACCENT = "rgb(232, 80, 0)";

const MICRO: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  fontVariantNumeric: "tabular-nums",
};

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

/* ─── Copy-email button ───────────────────────────────────────────────────── */

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable — mailto CTA next to this still works */
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={copy}
      className="text-[13px] underline underline-offset-4 transition-colors"
      style={{ color: copied ? "rgb(74,222,128)" : "rgba(249,246,241,0.6)" }}
    >
      {copied ? "Copied ✓" : `Copy ${EMAIL}`}
    </button>
  );
}

/* ─── Section header (orange +, caption, rule, display heading) ──────────── */

function SectionHeader({ caption, heading }: { caption: string; heading: string }) {
  return (
    <Reveal>
      <div className="flex items-center justify-between">
        <span className="select-none text-[22px] font-bold leading-none" style={{ color: ACCENT }}>
          +
        </span>
        <span className="text-caption font-caption text-subtext-color" style={MICRO}>
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
  return (
    <div className="min-h-screen w-full bg-default-background text-default-font">
      {/* ── Top bar — conversion-focused, email always one click away ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{ background: "rgba(249,246,241,0.75)", borderBottom: "1px solid rgb(224,216,209)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex flex-col">
            <span className="font-heading-3 text-[15px] font-bold leading-tight text-default-font">
              Pablo Parma
            </span>
            <span className="text-subtext-color" style={MICRO}>
              Product Designer
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <span
              className="hidden rounded-full px-3 py-1 sm:inline-block"
              style={{ ...MICRO, color: "rgb(22,163,74)", backgroundColor: "rgba(34,197,94,0.12)" }}
            >
              ● Available
            </span>
            <a href={`mailto:${EMAIL}`}>
              <CTAButton variant="primary">Email me ↗</CTAButton>
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span style={{ ...MICRO, color: "rgba(23,23,23,0.45)" }}>
              Open to senior product design roles
            </span>
            <span style={{ color: "rgba(23,23,23,0.2)" }}>·</span>
            <span style={{ ...MICRO, color: "rgba(23,23,23,0.45)" }}>Remote · GMT-3</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1
            className="font-heading-1 mt-6 max-w-4xl text-default-font"
            style={{ fontSize: "clamp(38px,6vw,84px)", lineHeight: 0.96, letterSpacing: "-0.04em", fontWeight: 700 }}
          >
            Senior Product Designer for teams shipping{" "}
            <span style={{ color: ACCENT }}>AI-era</span> products.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p
            className="mt-7 max-w-xl text-[15px]"
            style={{ color: "rgba(23,23,23,0.58)", lineHeight: 1.75 }}
          >
            12+ years designing mobile and web products — from Google C+E Studio to AI
            platforms. I build design systems engineers love, and I prototype with Claude
            and Gemini to ship validated UX faster.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href={`mailto:${EMAIL}`}>
              <CTAButton variant="accent">Start a conversation ↗</CTAButton>
            </a>
            <a
              href={CV_PDF}
              download
              className="text-[13px] underline underline-offset-4 transition-colors hover:text-black"
              style={{ color: "rgba(23,23,23,0.55)" }}
            >
              Download CV (PDF)
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] underline underline-offset-4 transition-colors hover:text-black"
              style={{ color: "rgba(23,23,23,0.55)" }}
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Proof strip ── */}
      <section
        style={{
          borderTop: "1px solid rgb(224,216,209)",
          borderBottom: "1px solid rgb(224,216,209)",
          background: "rgba(23,23,23,0.03)",
        }}
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
              <div className="mt-2" style={{ ...MICRO, color: "rgba(23,23,23,0.45)" }}>
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What I bring ── */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <SectionHeader caption="01 — Capabilities" heading="What I bring to your team" />
        <div
          className="grid gap-px sm:grid-cols-2"
          style={{ background: "rgb(224,216,209)", border: "1px solid rgb(224,216,209)" }}
        >
          {CAPS.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08} className="h-full">
              <div className="h-full bg-default-background px-7 py-8 transition-colors hover:bg-white/40">
                <div style={{ ...MICRO, color: "rgba(23,23,23,0.3)" }}>{c.num}</div>
                <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.07em]">
                  {c.title}
                </div>
                <p className="mt-2 text-[13px]" style={{ color: "rgba(23,23,23,0.5)", lineHeight: 1.65 }}>
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
            const bg = o.dark ? "rgb(17,17,17)" : "rgb(228,222,215)";
            const fg = o.dark ? "rgb(249,246,241)" : "rgb(23,23,23)";
            const sub = o.dark ? "rgba(249,246,241,0.5)" : "rgb(115,115,115)";
            return (
              <Reveal key={o.num} delay={i * 0.1} className="h-full">
                <Link
                  href={o.href}
                  className="group flex h-full flex-col transition-transform duration-300 hover:-translate-y-2"
                >
                  <svg viewBox="0 0 864 104" width="100%" aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
                    <path d={FOLDER_TOP_PATH} fill={bg} />
                  </svg>
                  <div
                    className="flex grow flex-col gap-5 px-6 pb-7"
                    style={{ background: bg, borderRadius: "0 0 18px 18px", marginTop: "-1px" }}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <span style={{ ...MICRO, color: sub }}>{o.company}</span>
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
                      <span className="text-[13px]" style={{ color: sub, lineHeight: 1.6 }}>
                        {o.result}
                      </span>
                      <span
                        className="mt-1 text-[12px] underline underline-offset-4 opacity-0 transition-opacity group-hover:opacity-100"
                        style={{ color: o.dark ? "rgb(255,140,80)" : ACCENT }}
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
                className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[2fr_2fr_1fr] sm:items-baseline sm:gap-6"
                style={{ borderTop: i === 0 ? "none" : "1px solid rgb(224,216,209)" }}
              >
                <span className="text-[14px] font-semibold">{e.role}</span>
                <span className="text-[13px] text-subtext-color">{e.company}</span>
                <span className="text-[12px] tabular-nums sm:text-right" style={{ color: "rgba(23,23,23,0.4)" }}>
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
              <div className="flex gap-6 py-3.5" style={{ borderBottom: "1px solid rgb(224,216,209)" }}>
                <span className="w-36 shrink-0 pt-0.5" style={{ ...MICRO, color: "rgba(23,23,23,0.4)" }}>
                  {l.k}
                </span>
                <span className="text-[13px]" style={{ lineHeight: 1.6 }}>
                  {l.v}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div
            className="px-8 py-14 sm:px-14"
            style={{ background: "rgb(17,17,17)", borderRadius: "18px", color: "rgb(249,246,241)" }}
          >
            <span style={{ ...MICRO, color: "rgba(249,246,241,0.4)" }}>
              ● Available now — let&apos;s talk
            </span>
            <h2
              className="font-heading-2 mt-4 max-w-2xl"
              style={{ fontSize: "clamp(28px,4vw,54px)", lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 700 }}
            >
              Hiring a product designer?
            </h2>
            <p className="mt-5 max-w-lg text-[14px]" style={{ color: "rgba(249,246,241,0.55)", lineHeight: 1.75 }}>
              Tell me about your product and team. I usually reply within a day — and I&apos;m
              happy to walk through case studies live.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href={`mailto:${EMAIL}`}>
                <CTAButton variant="accent">Email {EMAIL} ↗</CTAButton>
              </a>
              <CopyEmailButton />
            </div>
            <div
              className="mt-10 flex flex-wrap gap-6"
              style={{ borderTop: "1px solid rgba(249,246,241,0.12)", paddingTop: "1.5rem" }}
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
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}

export default HireMe;
