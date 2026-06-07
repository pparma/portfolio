"use client";

import React, { useEffect, useRef } from "react";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import { SiteFooter } from "@/src/components/SiteFooter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CTAButton } from "@/src/components/CTAButton";

/* ─── Work card ───────────────────────────────────────────────────────────── */

const FOLDER_TOP_PATH =
  "M0 24C0 10.7452 10.7452 0 24 0H254.615C260.947 0 267.022 2.50218 271.518 6.96142L312.965 48.0771C321.955 56.9956 334.106 62 346.769 62H840C853.255 62 864 72.7452 864 86V104H0L0 24Z";

function WorkCard({
  index,
  number,
  title,
  subtitle,
  href,
  dark = false,
}: {
  index: number;
  number: string;
  title: string;
  subtitle: string;
  href: string;
  dark?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const fill = dark ? "rgb(17, 17, 17)" : "rgb(228, 222, 215)";
  const text = dark ? "rgb(249, 246, 241)" : "rgb(23, 23, 23)";
  const sub = dark ? "rgba(249,246,241,0.50)" : "rgb(115, 115, 115)";
  const num = dark ? "rgba(249,246,241,0.20)" : "rgba(23,23,23,0.18)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring" as const, stiffness: 55, damping: 20, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { type: "spring" as const, stiffness: 380, damping: 22 } }}
      style={{ cursor: "pointer", height: "100%" }}
    >
      <Link href={href} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <svg viewBox="0 0 864 104" width="100%" aria-hidden="true" style={{ display: "block", flexShrink: 0 }}>
          <path d={FOLDER_TOP_PATH} fill={fill} />
        </svg>
        <div
          style={{
            backgroundColor: fill,
            borderRadius: "0 0 18px 18px",
            padding: "16px 24px 28px",
            marginTop: "-1px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span style={{ color: num, fontSize: "13px", letterSpacing: "0.05em", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>
              {number}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ color: text, fontSize: "clamp(15px, 1.25vw, 20px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", textWrap: "pretty" } as React.CSSProperties}>
              {title}
            </span>
            <span style={{ color: sub, fontSize: "13px", lineHeight: 1.6, textWrap: "pretty" } as React.CSSProperties}>
              {subtitle}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Animated rule ───────────────────────────────────────────────────────── */

function AnimLine({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="w-full h-px overflow-hidden">
      <motion.div
        className="h-full w-full bg-neutral-border origin-left"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay }}
      />
    </div>
  );
}

/* ─── Editorial content section ──────────────────────────────────────────── */

function AboutSection({
  index, heading, body, accent,
}: {
  index: string; heading: string; body: string; accent?: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="w-full">
      <AnimLine />
      <div className="grid grid-cols-[5fr_7fr] gap-12 py-12 mobile:grid-cols-1 mobile:gap-5 mobile:py-8">
        <div className="flex flex-col gap-3">
          <motion.span className="text-caption font-caption text-subtext-color tabular-nums"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}>
            {index}
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2 className="font-heading-2 text-default-font"
              style={{ fontSize: "clamp(24px,2.8vw,38px)", lineHeight: 1.08, letterSpacing: "-0.015em", fontWeight: 700 }}
              initial={{ y: "110%" }} animate={inView ? { y: "0%" } : {}}
              transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.1 }}>
              {heading}
            </motion.h2>
          </div>
        </div>
        <motion.div className="flex flex-col gap-4 self-end"
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 55, damping: 20, delay: 0.22 }}>
          <p className="text-body-big font-body-big text-subtext-color"
            style={{ lineHeight: 1.75, textWrap: "pretty" } as React.CSSProperties}>
            {body}
          </p>
          {accent}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Data ────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "9", label: "Companies & Clients" },
  { value: "30%", label: "Avg. Engagement ↑" },
  { value: "4+", label: "Key Disciplines" },
];

const CAPS = [
  { num: "01", title: "UX Research & Strategy", desc: "User insights transformed into validated design decisions" },
  { num: "02", title: "Design Systems", desc: "Scalable component libraries built for dev handoff" },
  { num: "03", title: "Mobile & Web Apps", desc: "End-to-end product design across platforms and devices" },
  { num: "04", title: "AI-Powered UX", desc: "Designing intelligent experiences at the frontier of AI" },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */

function About() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: contentProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start 50%"],
  });
  const contentOpacity = useTransform(contentProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-full flex-col bg-default-background">
      <NavigationHeader
        className="z-50"
        title="Pablo Parma"
        navigation={
          <>
            <Link href="/works"><LinkButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => { }}>Work</LinkButton></Link>
            <Link href="/ai"><LinkButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => { }}>AI Experiments</LinkButton></Link>
            <Link href="/cv"><LinkButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => { }}>CV</LinkButton></Link>
          </>
        }
        logoppd={
          <>
            <Link href="/"><div className="flex items-center gap-2">
              <img className="w-9 flex-none" src="https://res.cloudinary.com/subframe/image/upload/v1756584504/uploads/20526/c5wl89v9jqmlegnamrmo.svg" alt="Pablo Parma logo" />
            </div></Link>
            <Link href="/"><div className="flex grow shrink-0 basis-0 flex-col items-start">
              <span className="text-heading-3 font-heading-3 text-default-font">Pablo Parma</span>
              <span className="w-full text-caption font-caption text-subtext-color">Product Designer</span>
            </div></Link>
          </>
        }
      />

      {/* ── Hero — sticky, self-contained, content scrolls over it at z-30 ── */}
      <div
        className="sticky top-0 w-full overflow-hidden h-[100dvh] mobile:h-auto mobile:overflow-visible mobile:sticky-none mobile:relative"
        style={{ zIndex: 1, backgroundColor: "#F9F6F1" }}
      >
        {/* Full-height flex column */}
        <div className="absolute inset-0 flex flex-col mobile:relative mobile:inset-auto" style={{ paddingTop: "74px" }}>

          {/* MAIN 3-COL GRID — overflow:hidden clips cell content to grid bounds */}
          <div
            className="flex-1 min-h-0 overflow-hidden grid grid-cols-[2fr_3fr_auto] mobile:grid-cols-1 mobile:flex-none mobile:overflow-visible w-full mx-auto"
            style={{ maxWidth: "1600px" }}
          >

            {/* LEFT: Text block */}
            <motion.div
              className="overflow-hidden flex flex-col justify-center gap-5 px-14 mobile:overflow-visible mobile:px-6 mobile:pt-16 mobile:pb-10 mobile:order-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              {/* Metadata */}
              <motion.div
                className="flex items-center gap-2 flex-wrap"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <span style={{ color: "rgba(23,23,23,0.45)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "monospace" }}>
                  Product Designer
                </span>
                <span style={{ color: "rgba(23,23,23,0.2)" }}>·</span>
                <span style={{ color: "rgba(23,23,23,0.45)", fontSize: "10px", letterSpacing: "0.12em", fontFamily: "monospace" }}>
                  Rosario, Argentina
                </span>
                <span style={{ color: "rgb(22,163,74)", backgroundColor: "rgba(34,197,94,0.12)", borderRadius: "999px", padding: "2px 10px", fontSize: "10px", letterSpacing: "0.08em", fontFamily: "monospace" }}>
                  ● Available
                </span>
              </motion.div>

              {/* Greeting + headline */}
              <div>
                <p style={{ color: "rgba(23,23,23,0.42)", fontSize: "clamp(14px,1.2vw,18px)", fontWeight: 400, marginBottom: "6px", letterSpacing: "-0.01em" }}>
                  Hey. I&apos;m Pablo,
                </p>
                <div className="overflow-hidden">
                  <motion.h1
                    style={{ color: "#171717", fontSize: "clamp(40px,4.5vw,80px)", lineHeight: 0.92, letterSpacing: "-0.04em", fontWeight: 700 }}
                    initial={{ y: "110%" }} animate={{ y: "0%" }}
                    transition={{ type: "spring", stiffness: 48, damping: 16, delay: 0.5 }}
                  >
                    Product<br />Designer.
                  </motion.h1>
                </div>
              </div>

              {/* Bio */}
              <motion.p
                style={{ color: "rgba(23,23,23,0.58)", fontSize: "clamp(14px,1.05vw,16px)", lineHeight: 1.75, maxWidth: "380px" } as React.CSSProperties}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                10+ years building user-centered digital experiences across mobile, web, and AI-powered platforms.                </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex items-center gap-5 flex-wrap"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 1.05, duration: 0.4 }}
              >
                <Link href="/works">
                  <CTAButton variant="primary">View Work ↗</CTAButton>
                </Link>
                <a href="/Pablo_Parma-Product_Designer.pdf" download>
                  <motion.span
                    style={{ color: "rgba(23,23,23,0.48)", fontSize: "13px", textDecoration: "underline", textUnderlineOffset: "4px", cursor: "pointer", letterSpacing: "0.02em" }}
                    whileHover={{ color: "rgba(23,23,23,0.85)" }}
                  >
                    Download CV
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            {/* CENTER: Portrait — fills full grid height on desktop, stacks first on mobile */}
            <motion.div
              className="relative flex items-center justify-center overflow-visible min-w-0 mobile:order-1 mobile:h-72 mobile:mx-auto mobile:w-full"
              style={{
                minHeight: 0,
                backgroundImage: "url('/gradient-bg.png')",
                backgroundSize: "150%",
                backgroundPosition: "center 0%",
                backgroundRepeat: "no-repeat",
              }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <img
                src="/portrait.png"
                alt="Pablo Parma"
                className="mobile:h-full mobile:w-auto"
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  objectPosition: "center bottom",
                  position: "relative",
                  zIndex: 1,
                  maxHeight: "100%",
                }}
              />
            </motion.div>

            {/* RIGHT: Stats — centered vertically */}
            <motion.div
              className="overflow-hidden flex flex-col justify-center gap-10 px-12 mobile:px-6 mobile:py-10 mobile:order-3 mobile:grid mobile:grid-cols-2 mobile:gap-6"
              style={{ borderLeft: "1px solid rgba(23,23,23,0.08)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {STATS.map((stat, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                >
                  <div style={{ color: "#171717", fontSize: "clamp(28px,2.8vw,48px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ color: "rgba(23,23,23,0.38)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "5px", fontFamily: "monospace" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* ── CAPABILITIES STRIP — flex-shrink:0 keeps it always docked to bottom ── */}
          <motion.div
            style={{ flexShrink: 0, backgroundColor: "rgba(23,23,23,0.04)", borderTop: "1px solid rgba(23,23,23,0.08)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.5 }}
          >
            <div
              className="w-full mx-auto grid grid-cols-4 mobile:flex mobile:overflow-x-auto"
              style={{ maxWidth: "1600px" }}
            >
              {CAPS.map((cap, i) => (
                <div key={i}
                  className="mobile:min-w-[210px] mobile:max-w-[300px] mobile:shrink-0"
                  style={{ padding: "22px 28px", borderRight: i < 3 ? "1px solid rgba(23,23,23,0.07)" : "none" }}
                >
                  <div style={{ color: "rgba(23,23,23,0.28)", fontSize: "10px", fontFamily: "monospace", letterSpacing: "0.12em", marginBottom: "8px" }}>
                    {cap.num}
                  </div>
                  <div style={{ color: "#171717", fontSize: "11px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "5px" }}>
                    {cap.title}
                  </div>
                  <div style={{ color: "rgba(23,23,23,0.45)", fontSize: "12px", lineHeight: 1.55 }}>
                    {cap.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Content + Footer — scrolls over hero at z-30 ── */}
      <motion.div
        ref={contentRef}
        className="relative w-full"
        style={{ zIndex: 30, background: "rgb(249,246,241)", opacity: contentOpacity }}
      >
        {/* ── Selected Work ── */}
        <section className="flex w-full flex-col items-start py-20 px-6">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-2">
            <motion.div
              className="w-full flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span style={{ color: "rgb(232, 80, 0)", fontSize: "22px", fontWeight: 700, lineHeight: 1, userSelect: "none" }}>+</span>
              <span className="text-caption font-caption text-subtext-color uppercase tracking-widest">Selected Work</span>
            </motion.div>
            <div className="w-full h-px bg-neutral-border mb-6" />
            <div className="w-full grid grid-cols-3 gap-4 mobile:grid-cols-1" style={{ paddingTop: "12px" }}>
              <WorkCard index={0} number="01/" title="Simplifying Operations for BridgeHaul" subtitle="Revolutionizing freight with a redesigned mobile app." href="/case-study-bh" />
              <WorkCard index={1} number="02/" title="Humanizing online rating discussions through Voice & Video UX" subtitle="UX flows and a modular design system for publishers." href="/case-study-yappa" />
              <WorkCard index={2} number="03/" title="AI-driven platform for legal management" subtitle="A streamlined, user-friendly platform for intelligent document management." href="/case-study-docsnap" dark />
            </div>
          </div>
        </section>

        <main className="w-full max-w-7xl mx-auto px-14 pb-24 mobile:px-6">
          <AboutSection index="01" heading="What sets me apart?"
            body="Whether I'm exploring nature, experimenting with new creative tools, or collaborating on design projects, I bring the same curiosity, dedication, and love for meaningful experiences that define both my personal and professional journey."
          />
          <AboutSection index="02" heading="I'm resourceful" body="More than 10 years as a designer has given me breadth across User Research, SEO, Digital Marketing, HTML and CSS, AR, 3D, and AI tools. I reach for whatever it takes to solve the problem well." />
          <AboutSection index="03" heading="I'm eager to experiment" body="Not every project is equal. I regularly step outside my comfort zone and apply new ideas, methodologies, or processes to find what works. I can adapt — I'm always evolving." />
          <AboutSection index="04" heading="I'm always learning" body="The UI/UX field never stops expanding — new tools, technologies, trends, methodologies. I consider myself a T-shaped Designer: broad across disciplines, deep where it matters most." />
          <AboutSection index="05" heading="I'm empathetic" body="Understanding users' perspectives is the key to identifying real pain points. Being empathic as a habit also raises the quality of the work we put out — and the lives we lead." />
          <AnimLine />
        </main>

        <SiteFooter />
      </motion.div>
    </div>
  );
}

export default About;
