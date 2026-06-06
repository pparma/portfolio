"use client";

import React, { useRef, useEffect, useState } from "react";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { Button } from "@/ui/components/Button";
import { FeatherArrowRight, FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import { SiteFooter } from "@/src/components/SiteFooter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { HubSpokeDiagram } from "@/src/components/HubSpokeDiagram";
import type { SpokeNode, DecorationDot } from "@/src/components/HubSpokeDiagram";
import { CTAButton } from "@/src/components/CTAButton";
import { WorkCard } from "@/src/components/WorkCard";
import { PhotoCard } from "@/src/components/PhotoCard";

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


/* ─── Hub & Spoke config ─────────────────────────────────────────────────── */

const NODES: SpokeNode[] = [
  { src: "/tech/Claude_AI_symbol.svg", label: "Claude AI", r: 165, ao: 0, shrink: 0.83 },
  { src: "/tech/Figma-logo.svg", label: "Figma", r: 148, ao: -6, shrink: 0.90 },
  { src: "/tech/GitHub_Invertocat_Black.svg", label: "GitHub", r: 172, ao: 9, shrink: 0.78 },
  { src: "/tech/Google_Gemini_icon_2025.svg", label: "Gemini", r: 152, ao: -4, shrink: 0.95 },
  { src: "/tech/vercel-icon-light.svg", label: "Vercel", r: 168, ao: 7, shrink: 0.86 },
  { src: "/tech/CUBE_2D_LIGHT.svg", label: "Subframe", r: 142, ao: -8, shrink: 0.93 },
  { src: "/tech/Google-Antigravity-Icon-One-Color.png", label: "Google", r: 158, ao: 5, shrink: 0.81 },
];

const DOTS: DecorationDot[] = [
  { a: -11.4, r: 100, dot_r: 7 },
  { a: 91.5, r: 108, dot_r: 6 },
  { a: 191.4, r: 100, dot_r: 8 },
  { a: 246.8, r: 90, dot_r: 6 },
];

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
  const linesBgOpacity = useTransform(heroScrollProgress, [0.0625, 0.25], [0, 0.29]);

  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <NavigationHeader
        title="Pablo Parma"
        navigation={
          <>
            <Link href="/works">
              <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}>
                Work
              </LinkButton>
            </Link>
            <Link href="/ai">
              <LinkButton variant="active" onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}>
                AI Experiments
              </LinkButton>
            </Link>
            <Link href="/cv">
              <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}>
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

          {/* Lines texture — fixed so it stays pinned while content scrolls over it */}
          <motion.img
            src="/linesbg.svg"
            aria-hidden="true"
            className="fixed top-0 left-0 pointer-events-none select-none"
            style={{
              width: "100%",
              height: "100dvh",
              objectFit: "cover",
              objectPosition: "center",
              opacity: linesBgOpacity,
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-row items-center justify-center gap-16 px-14 mobile:px-6 mobile:flex-col mobile:gap-8">
            {/* Left: text content */}
            <div className="flex flex-col items-start gap-8 min-w-0 max-w-[540px]">
              <motion.p
                className="text-caption font-caption text-subtext-color"
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Product Designer · Rosario, Argentina
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-heading-1 font-heading-1 text-default-font max-w-[560px]"
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
                  Making sense of AI through design, code, and curiosity.
                </motion.h1>
              </div>

              <motion.p
                className="text-body-big font-body-big text-subtext-color max-w-[460px]"
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
                Interaction paradigms are shifting, and I want to understand how.<br />
                This is a collection of my hands on experiments, vibe coding, moving static
                designs from Figma to functional code to discover how designers interface with intelligent systems.
              </motion.p>
            </div>

            {/* Right: hub-and-spoke tech diagram — grows to fill available flex space */}
            <div className="flex-1 min-w-0 mobile:w-full" style={{ maxWidth: 540 }}>
              <HubSpokeDiagram
                nodes={NODES}
                dots={DOTS}
                hubSrc="/tech/pparmalogo.svg"
                hubAlt="Pablo Parma"
              />
            </div>
          </div>
        </div>
      </div >

      {/* ── Photo Cards Section ── */}
      < div className="relative w-full" style={{ zIndex: 30 }
      }>
        <section className="flex w-full flex-col items-start py-20 px-6">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-start gap-2">

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
                AI Experiments
              </span>
            </motion.div>

            <div className="w-full h-px bg-neutral-border mb-6" />

            <div
              className="w-full grid grid-cols-3 gap-4 mobile:grid-cols-1"
              style={{ paddingTop: "12px" }}
            >
              <PhotoCard
                index={0}
                number="01/"
                title="Simplifying Operations for BridgeHaul"
                subtitle="Revolutionizing freight with a redesigned mobile app."
                imageSrc="/cards/comparefeature.png"
              />
              <PhotoCard
                index={1}
                number="02/"
                title="Humanizing online rating discussions through Voice & Video UX"
                subtitle="UX flows and a modular design system for publishers."
                imageSrc="/cards/designsystem.jpeg"
              />
              <PhotoCard
                index={2}
                number="03/"
                title="AI-driven platform for legal management"
                subtitle="A streamlined, user-friendly platform for intelligent document management."
                imageSrc="/cards/ways-to-shop.jpg"
              />
            </div>
          </div>
        </section>
      </div >

      {/* ── Footer ── */}
      < SiteFooter />
    </div >
  );
}

export default Index;
