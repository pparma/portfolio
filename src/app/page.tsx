"use client";

import React, { useRef, useEffect, useState } from "react";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { Button } from "@/ui/components/Button";
import { FeatherArrowRight, FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import CopyEmail from "@/src/components/CopyEmail";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─── Scroll-scrubbed video hero ─────────────────────────────────────────── */

// Tunable constants — adjust in future iterations
const LOADER_BAR_HEIGHT = "2px";       // bar thickness
const LOADER_BAR_COLOR = "rgba(255,255,255,0.55)"; // bar fill color
const SCRUB_THRESHOLD = 0.033;         // min time diff (s) before seeking (~30fps)

function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadProgress, setLoadProgress] = useState(0); // 0–1
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Force load — iOS ignores preload="auto" without this
    video.load();

    const onProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        setLoadProgress(video.buffered.end(video.buffered.length - 1) / video.duration);
      }
    };
    const onCanPlay = () => { setVideoReady(true); setLoadProgress(1); };

    video.addEventListener("progress", onProgress);
    video.addEventListener("loadedmetadata", onProgress);
    video.addEventListener("canplaythrough", onCanPlay);

    // RAF loop — reads scrollY directly each frame, bypasses iOS touch-scroll batching
    let rafId: number;
    let lastScrollY = -1;

    const tick = () => {
      const sy = window.scrollY;
      if (sy !== lastScrollY && video.duration) {
        lastScrollY = sy;
        const rect = container.getBoundingClientRect();
        const scrollable = container.offsetHeight - window.innerHeight;
        if (scrollable > 0) {
          const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
          const target = video.duration * progress;
          if (Math.abs(video.currentTime - target) > SCRUB_THRESHOLD) {
            video.currentTime = target;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("progress", onProgress);
      video.removeEventListener("loadedmetadata", onProgress);
      video.removeEventListener("canplaythrough", onCanPlay);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "250vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/vid/bganim-scrub.mp4"
          poster="/vid/poster.jpg"
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />

        {/* Loader bar — fades out when video is buffered */}
        <motion.div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          style={{ height: LOADER_BAR_HEIGHT }}
          animate={{ opacity: videoReady ? 0 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: videoReady ? 0.2 : 0 }}
        >
          <motion.div
            className="h-full w-full origin-left"
            style={{ backgroundColor: LOADER_BAR_COLOR }}
            animate={{ scaleX: loadProgress }}
            transition={{ ease: "linear", duration: 0.25 }}
          />
        </motion.div>
      </div>
    </div>
  );
}


/* ─── Folder-style work card ──────────────────────────────────────────────── */

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

  const bg      = dark ? "rgb(17, 17, 17)"         : "rgb(228, 222, 215)";
  const tabBg   = dark ? "rgb(30, 31, 38)"          : "rgb(213, 206, 198)";
  const text    = dark ? "rgb(249, 246, 241)"       : "rgb(23, 23, 23)";
  const sub     = dark ? "rgba(249,246,241,0.50)"   : "rgb(115, 115, 115)";
  const num     = dark ? "rgba(249,246,241,0.20)"   : "rgba(23,23,23,0.18)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring" as const, stiffness: 55, damping: 20, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { type: "spring" as const, stiffness: 380, damping: 22 } }}
      style={{ cursor: "pointer", paddingTop: "10px" /* room for the tab */ }}
    >
      <Link href={href}>
        <div style={{ position: "relative" }}>
          {/* Folder tab — sits flush above the top-left corner */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "68px",
              height: "10px",
              backgroundColor: tabBg,
              borderRadius: "5px 5px 0 0",
              transform: "translateY(-100%)",
            }}
          />

          {/* Card body — top-left corner is flat (folder edge) */}
          <div
            style={{
              backgroundColor: bg,
              borderRadius: "0 18px 18px 18px",
              padding: "24px 26px 26px",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "32px",
            }}
          >
            {/* Number — top right */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <span
                style={{
                  color: num,
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                  fontWeight: 500,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {number}
              </span>
            </div>

            {/* Text — bottom */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span
                style={{
                  color: text,
                  fontSize: "clamp(16px, 1.35vw, 21px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                {title}
              </span>
              <span
                style={{
                  color: sub,
                  fontSize: "13px",
                  lineHeight: 1.6,
                  textWrap: "pretty",
                } as React.CSSProperties}
              >
                {subtitle}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

function Index() {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.25 });

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroWrapperRef,
    offset: ["start end", "end start"],
  });
  // Becomes fully opaque by the time 25% of the wrapper has scrolled past —
  // that maps to ~80% of the actual slide-in movement.
  const heroBgOpacity = useTransform(heroScrollProgress, [0, 0.25], [0, 1]);

  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <NavigationHeader
        title="Pablo Parma"
        navigation={
          <>
            <Link href="/works">
              <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                Work
              </LinkButton>
            </Link>
            <Link href="/about">
              <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
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

      {/* ── Scroll video ── */}
      <ScrollVideoHero />

      {/* ── Hero panel — pulls up 100dvh to overlay the video's last viewport ── */}
      <div
        ref={heroWrapperRef}
        className="relative w-full"
        style={{ marginTop: "-100dvh", height: "200dvh", zIndex: 20 }}
      >
        <div
          ref={heroRef}
          className="sticky top-0 flex flex-col justify-center"
          style={{ minHeight: "100dvh" }}
        >
          {/* scroll-driven background — transparent on entry, solid by 80% of slide-in */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundColor: "rgb(249, 246, 241)", opacity: heroBgOpacity }}
          />

          <div className="relative max-w-7xl mx-auto w-full flex flex-col items-start gap-8 px-14 mobile:px-6">
            <motion.p
              className="text-caption font-caption text-subtext-color"
              initial={{ opacity: 0, y: 10 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Product Designer · Rosario, Argentina · Open to remote
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                className="text-heading-1 font-heading-1 text-default-font max-w-[720px]"
                style={{ textWrap: "balance" } as React.CSSProperties}
                initial={{ y: "100%" }}
                animate={heroInView ? { y: "0%" } : {}}
                transition={{
                  type: "spring" as const,
                  stiffness: 55,
                  damping: 18,
                  delay: 0.08,
                }}
              >
                Product Designer crafting clear, calm interfaces.
              </motion.h1>
            </div>

            <motion.p
              className="text-body-big font-body-big text-subtext-color max-w-[520px]"
              style={{ textWrap: "pretty" } as React.CSSProperties}
              initial={{ opacity: 0, y: 14 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring" as const,
                stiffness: 55,
                damping: 20,
                delay: 0.2,
              }}
            >
              Senior UI/UX designer focused on systems, product thinking, and
              delightful details. Currently open to remote opportunities.
            </motion.p>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring" as const,
                stiffness: 55,
                damping: 20,
                delay: 0.3,
              }}
            >
              <Link href="/works">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{
                    type: "spring" as const,
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Button iconRight={<FeatherArrowRight />}>Browse Work</Button>
                </motion.div>
              </Link>
              <motion.a
                href="/contact"
                className="text-body font-body text-accent underline-offset-4 hover:underline"
                whileHover={{ x: 3 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
              >
                Get in touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Selected Work — overlays hero, full viewport height ── */}
      <div
        className="relative w-full"
        style={{ zIndex: 30, background: "rgb(249, 246, 241)" }}
      >
        <section
          className="flex w-full flex-col items-start py-20 px-6"
          style={{ minHeight: "100dvh" }}
        >
          <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-2">

            {/* Section header — + accent left, label right */}
            <motion.div
              className="w-full flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span
                style={{
                  color: "rgb(232, 80, 0)",
                  fontSize: "22px",
                  fontWeight: 700,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                +
              </span>
              <span className="text-caption font-caption text-subtext-color uppercase tracking-widest">
                Selected Work
              </span>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-border mb-6" />

            {/* Cards grid — extra top padding lets folder tabs breathe */}
            <div
              className="w-full grid grid-cols-3 gap-4 mobile:grid-cols-1"
              style={{ paddingTop: "12px" }}
            >
              <WorkCard
                index={0}
                number="01/"
                title="Simplifying Operations for BridgeHaul"
                subtitle="Revolutionizing freight with a redesigned mobile app."
                href="/case-study-bh"
              />
              <WorkCard
                index={1}
                number="02/"
                title="Humanizing online rating discussions through Voice & Video UX"
                subtitle="UX flows and a modular design system for publishers."
                href="/case-study-yappa"
              />
              <WorkCard
                index={2}
                number="03/"
                title="AI-driven platform for legal management"
                subtitle="A streamlined, user-friendly platform for intelligent document management."
                href="/case-study-docsnap"
                dark
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
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
    </div>
  );
}

export default Index;
