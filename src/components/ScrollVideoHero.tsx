"use client";

import { useRef, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/ui/components/Button";
import { FeatherArrowRight } from "@subframe/core";
import Link from "next/link";

// ─── Constants ────────────────────────────────────────────────────────────────

const CREAM    = "rgb(249,246,241)";
const CREAM_70 = "rgba(249,246,241,0.70)";
const CREAM_55 = "rgba(249,246,241,0.55)";

// Video is 5 seconds.
// 500vh total scroll × 0.85 = 425vh devoted to video scrubbing.
// 425vh ÷ 5s = 85vh per second — smooth, intentional pace.
const SCROLL_HEIGHT = "500vh";

// What fraction of scroll progress is used for video scrubbing (rest = text reveals)
const VIDEO_SCRUB_END = 0.85;

// ─── Component ────────────────────────────────────────────────────────────────

export default function ScrollVideoHero() {
  const spacerRef    = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const readyRef     = useRef(false);           // true once video can seek
  const lastTimeRef  = useRef(0);               // last applied currentTime

  // Track scroll progress through the spacer only
  const { scrollYProgress } = useScroll({
    target: spacerRef,
    offset: ["start start", "end end"],
  });

  // ── Video setup ─────────────────────────────────────────────────────────────

  const handleMetadata = useCallback(() => {
    readyRef.current = true;
    const v = videoRef.current;
    if (!v) return;
    // Seek to frame 0 immediately so first frame is visible on load
    v.currentTime = 0;
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.addEventListener("loadedmetadata", handleMetadata);
    // If metadata already loaded (cached video)
    if (v.readyState >= 1) handleMetadata();
    return () => v.removeEventListener("loadedmetadata", handleMetadata);
  }, [handleMetadata]);

  // ── Frame-by-frame scrubbing ─────────────────────────────────────────────

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const v = videoRef.current;
    if (!v || !readyRef.current || !v.duration || isNaN(v.duration)) return;

    // Map scroll 0→VIDEO_SCRUB_END to full video duration
    const videoPct   = Math.min(p / VIDEO_SCRUB_END, 1);
    const targetTime = videoPct * v.duration;          // 0 → 5.0s

    // Only seek if change is meaningful (avoids redundant seeks on tiny scroll)
    if (Math.abs(targetTime - lastTimeRef.current) > 0.016) {
      v.currentTime  = targetTime;
      lastTimeRef.current = targetTime;
    }
  });

  // ── Motion values ────────────────────────────────────────────────────────────

  // Explosion: video zooms in at start, expands to fill screen by 50% scroll
  // → covers first 2.5s of video
  const videoScale = useTransform(scrollYProgress, [0, 0.50], [1.55, 1.0]);

  // Scrim builds just before text arrives
  const scrimOpacity = useTransform(scrollYProgress, [0.56, 0.74], [0, 1]);

  // ── Text rifle sequence (last ~30% of scroll = last ~1.5s of video) ─────────
  // eyebrow  → 68–76%  (3.4s–3.8s into video)
  // heading  → 73–82%  (3.65s–4.1s)
  // subtitle → 79–87%  (3.95s–4.35s)
  // cta      → 84–93%  (4.2s–4.65s)

  const eyebrowOpacity  = useTransform(scrollYProgress, [0.68, 0.76], [0, 1]);
  const eyebrowY        = useTransform(scrollYProgress, [0.68, 0.76], [14, 0]);

  const headingOpacity  = useTransform(scrollYProgress, [0.73, 0.82], [0, 1]);
  const headingY        = useTransform(scrollYProgress, [0.73, 0.82], [26, 0]);

  const subtitleOpacity = useTransform(scrollYProgress, [0.79, 0.87], [0, 1]);
  const subtitleY       = useTransform(scrollYProgress, [0.79, 0.87], [20, 0]);

  const ctaOpacity      = useTransform(scrollYProgress, [0.84, 0.93], [0, 1]);
  const ctaY            = useTransform(scrollYProgress, [0.84, 0.93], [16, 0]);

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/*
        ── Fixed video panel ───────────────────────────────────────────────────
        Lives at z-index 1 — permanently fixed to the viewport.
        The cream content section (z-index 10) slides up and covers it
        naturally once the spacer is fully scrolled past.
      */}
      <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 1 }} aria-hidden="true">

        {/* Video — explodes outward from zoomed-in first frame */}
        <motion.div
          style={{ scale: videoScale }}
          className="absolute inset-0 origin-center will-change-transform"
        >
          <video
            ref={videoRef}
            src="/vid/cut2.mp4"
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="auto"
            // No autoPlay — scroll controls currentTime
          />
        </motion.div>

        {/* Gradient scrim — bottom-heavy, builds before text */}
        <motion.div
          style={{ opacity: scrimOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(22,27,39,0.93) 0%, rgba(22,27,39,0.48) 40%, transparent 74%)",
            }}
          />
        </motion.div>

        {/* ── Text — rifles in bottom-left ── */}
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-20 px-14 mobile:px-6 mobile:pb-12 pointer-events-none">

          {/* Eyebrow */}
          <motion.p
            style={{ opacity: eyebrowOpacity, y: eyebrowY, color: CREAM_55 }}
            className="text-caption font-caption mb-5"
          >
            Product Designer · Rosario, Argentina · Open to remote
          </motion.p>

          {/* Heading — clip-path overflow mask */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              style={{ opacity: headingOpacity, y: headingY, color: CREAM }}
              className="text-heading-1 font-heading-1 max-w-[620px]"
            >
              <span style={{ textWrap: "balance" } as React.CSSProperties}>
                Product Designer crafting clear, calm interfaces.
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            style={{ opacity: subtitleOpacity, y: subtitleY, color: CREAM_70 }}
            className="text-headling-4 font-headling-4 max-w-[480px] mb-10"
          >
            <span style={{ textWrap: "pretty" } as React.CSSProperties}>
              Senior UI/UX designer focused on systems, product thinking, and
              delightful details. Currently open to remote opportunities.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="flex items-center gap-6 pointer-events-auto"
          >
            <Link href="/works">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
              >
                <Button iconRight={<FeatherArrowRight />}>
                  Browse Work
                </Button>
              </motion.div>
            </Link>

            <motion.a
              href="/about"
              style={{ color: CREAM_70 }}
              className="text-body font-body underline-offset-4 hover:underline"
              whileHover={{ x: 3 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/*
        ── Transparent scroll spacer ──────────────────────────────────────────
        500vh tall — gives the browser scroll distance to drive the video.
        Sits above the fixed video at z-index 2 but is invisible.
        The useScroll hook targets this div to compute scrollYProgress.
      */}
      <div
        ref={spacerRef}
        className="relative pointer-events-none"
        style={{ zIndex: 2, height: SCROLL_HEIGHT }}
      />
    </>
  );
}
