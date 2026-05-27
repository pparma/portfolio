"use client";

import React, { useEffect, useRef } from "react";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import CopyEmail from "@/src/components/CopyEmail";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

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
  index,
  heading,
  body,
  accent,
}: {
  index: string;
  heading: string;
  body: string;
  accent?: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="w-full">
      <AnimLine />
      <div className="grid grid-cols-[5fr_7fr] gap-12 py-12 mobile:grid-cols-1 mobile:gap-5 mobile:py-8">

        {/* Left — index + heading */}
        <div className="flex flex-col gap-3">
          <motion.span
            className="text-caption font-caption text-subtext-color tabular-nums"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            {index}
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              className="font-heading-2 text-default-font"
              style={{
                fontSize: "clamp(24px, 2.8vw, 38px)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                fontWeight: 700,
              }}
              initial={{ y: "110%" }}
              animate={inView ? { y: "0%" } : {}}
              transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.1 }}
            >
              {heading}
            </motion.h2>
          </div>
        </div>

        {/* Right — body + optional accent */}
        <motion.div
          className="flex flex-col gap-4 self-end"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", stiffness: 55, damping: 20, delay: 0.22 }}
        >
          <p
            className="text-body-big font-body-big text-subtext-color"
            style={{ lineHeight: 1.75, textWrap: "pretty" } as React.CSSProperties}
          >
            {body}
          </p>
          {accent}
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

function About() {
  /* Scroll-driven fade for the content+footer block */
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: contentProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "start 50%"],
  });
  /* Fade in over the first half of the element entering the viewport */
  const contentOpacity = useTransform(contentProgress, [0, 1], [0, 1]);

  /* Prevent browser scroll-restoration from landing mid-page */
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <NavigationHeader
        className="z-50"
        title="Pablo Parma"
        navigation={
          <>
            <Link href="/works">
              <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                Work
              </LinkButton>
            </Link>
            <Link href="/about">
              <LinkButton
                variant="active"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                About
              </LinkButton>
            </Link>
            <Link href="/cv">
              <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                CV
              </LinkButton>
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
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Pablo Parma
                </span>
                <span className="w-full text-caption font-caption text-subtext-color">
                  Product Designer
                </span>
              </div>
            </Link>
          </>
        }
      />

      {/* ── Hero spacer — creates 100dvh of scroll space ── */}
      {/* The actual hero is position:fixed so it never moves */}
      <div style={{ height: "calc(100dvh - 74px)", width: "100%" }}>

        {/* Fixed hero — completely static, behind everything */}
        <div
          className="fixed top-0 left-0 right-0 w-full overflow-hidden"
          style={{ height: "100dvh", zIndex: 1, backgroundColor: "#F9F6F1" }}
        >
          {/* Background image — flipped horizontally for composition */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
          >
            <img
              src="https://res.cloudinary.com/subframe/image/upload/v1756172560/uploads/20526/b3gp8ugog2wackvbix8e.jpg"
              alt="Patagonia landscape, Argentina"
              className="w-full h-full object-cover"
              style={{ transform: "scaleX(-1)", transformOrigin: "center center", filter: "saturate(0%) contrast(1.25)" }}
            />
          </motion.div>

          {/* Multiply burn overlay — sibling to image so blend mode reaches the actual bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundColor: "#8B7355",
              mixBlendMode: "multiply",
              opacity: 0.35,
            } as React.CSSProperties}
          />

          {/* Frosted glass card — inside a centered max-width container */}
          <div
            className="absolute inset-0 flex items-start"
            style={{ paddingTop: "74px" }}
          >
            <div
              className="w-full mx-auto flex items-center px-14 mobile:px-6"
              style={{ maxWidth: "1440px", height: "100%", paddingBottom: "22vh" }}
            >
            <motion.div
              className="flex flex-col gap-5 p-8 mobile:p-6"
              style={{
                backgroundColor: "rgba(249, 246, 241, 0.30)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(249, 246, 241, 0.45)",
                /* diagonal cuts — top-left and bottom-right */
                clipPath: "polygon(42px 0%, 100% 0%, 100% calc(100% - 42px), calc(100% - 42px) 100%, 0% 100%, 0% 42px)",
                maxWidth: "580px",
                width: "100%",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              {/* Metadata */}
              <motion.div
                className="flex items-center gap-2 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.4 }}
              >
                <span className="text-caption font-caption uppercase tracking-widest" style={{ color: "rgb(23, 23, 23)" }}>
                  Product Designer
                </span>
                <div className="w-px h-3 flex-none bg-neutral-border opacity-40" />
                <span className="text-caption font-caption" style={{ color: "rgb(23, 23, 23)" }}>
                  Rosario, Argentina
                </span>
                <div className="w-px h-3 flex-none bg-neutral-border opacity-40" />
                <span
                  className="text-caption font-caption"
                  style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(34, 197, 94)",
                    borderRadius: "999px",
                    padding: "2px 8px",
                    letterSpacing: "0.02em",
                  }}
                >
                  ● Available
                </span>
              </motion.div>

              {/* Name */}
              <div className="overflow-hidden">
                <motion.h1
                  className="font-heading-1 text-default-font leading-none select-none"
                  style={{
                    fontSize: "clamp(28px, 3.6vw, 56px)",
                    letterSpacing: "-0.03em",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ type: "spring", stiffness: 50, damping: 17, delay: 0.6 }}
                >
                  PABLO PARMA
                </motion.h1>
              </div>

              {/* Bio */}
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5, ease: "easeOut" }}
              >
                <p
                  className="text-body font-body"
                  style={{ lineHeight: 1.75, textWrap: "pretty", color: "rgb(23, 23, 23)" } as React.CSSProperties}
                >
                  10+ years creating user-centered digital experiences,
                  proudly based in Argentina.
                </p>
                <p
                  className="text-body font-body text-default-font"
                  style={{ lineHeight: 1.75, textWrap: "pretty" } as React.CSSProperties}
                >
                  Beyond design, deeply passionate about photography —
                  the landscapes and wildlife of Patagonia.
                </p>
                <Link href="/cv">
                  <motion.span
                    className="inline-flex items-center gap-1 text-caption font-caption text-accent mt-2"
                    style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Download CV ↗
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            </div>
          </div>
        </div>

      </div>
      {/* ── Content + Footer — fades in over hero, solid bg kills bleed-through ── */}
      <motion.div
        ref={contentRef}
        className="relative w-full"
        style={{ zIndex: 30, background: "rgb(249, 246, 241)", opacity: contentOpacity }}
      >
        <main className="w-full max-w-7xl mx-auto px-14 pb-24 mobile:px-6">

          <AboutSection
            index="01"
            heading="What sets me apart?"
            body="Whether I'm exploring nature, experimenting with new creative tools, or collaborating on design projects, I bring the same curiosity, dedication, and love for meaningful experiences that define both my personal and professional journey."
            accent={
              <motion.div
                className="mt-2 overflow-hidden rounded-lg"
                style={{ maxWidth: "240px" }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <img
                  src="https://res.cloudinary.com/subframe/image/upload/v1756173928/uploads/20526/yypeb07pkssolmvs6bgg.jpg"
                  alt="Hummingbird — Patagonian wildlife"
                  className="w-full block"
                />
              </motion.div>
            }
          />

          <AboutSection
            index="02"
            heading="I'm resourceful"
            body="More than 10 years as a designer has given me breadth across User Research, SEO, Digital Marketing, HTML and CSS, AR, 3D, and AI tools. I reach for whatever it takes to solve the problem well."
          />

          <AboutSection
            index="03"
            heading="I'm eager to experiment"
            body="Not every project is equal. I regularly step outside my comfort zone and apply new ideas, methodologies, or processes to find what works. I can adapt — I'm always evolving."
          />

          <AboutSection
            index="04"
            heading="I'm always learning"
            body="The UI/UX field never stops expanding — new tools, technologies, trends, methodologies. I consider myself a T-shaped Designer: broad across disciplines, deep where it matters most."
          />

          <AboutSection
            index="05"
            heading="I'm empathetic"
            body="Understanding users' perspectives is the key to identifying real pain points. Being empathic as a habit also raises the quality of the work we put out — and the lives we lead."
          />

          <AnimLine />
        </main>

        {/* Footer lives inside the same solid wrapper — no hero bleed-through */}
        <Footer
        createdWithText="Proudly created and coded using:"
        tools={
          <>
            <img
              className="w-4 flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
              alt="Subframe"
            />
            <span className="text-body font-body text-default-font">Subframe</span>
            <span className="text-body font-body text-default-font">+</span>
            <img
              className="w-4 flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1755897676/uploads/20526/abte5rdrqheg9h0jl0ff.svg"
              alt="Cursor"
            />
            <span className="text-body font-body text-default-font">Cursor</span>
          </>
        }
        socialText="Find me on"
        socialLinks={
          <>
            <FeatherLinkedin className="text-body font-body text-default-font" />
            <Link href="https://www.linkedin.com/in/pabloparma/" target="_blank" rel="noopener noreferrer">
              <span className="text-body font-body text-default-font">LinkedIn</span>
            </Link>
            <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
            <FeatherInstagram className="text-body font-body text-default-font" />
            <Link href="https://www.instagram.com/pabloparma/" target="_blank" rel="noopener noreferrer">
              <span className="text-body font-body text-default-font">Instagram</span>
            </Link>
            <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
            <FeatherSend className="text-body font-body text-default-font" />
            <CopyEmail />
          </>
        }
        copyright="© 2025 Pablo Parma"
      />
      </motion.div>
    </div>
  );
}

export default About;
