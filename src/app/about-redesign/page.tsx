"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const SLIDE_DURATION = 6000;
const CARD_H = 224;
const CARD_W = 196;
const CARD_GAP = 10;
const CARD_STRIDE = CARD_H + CARD_GAP;

const slides = [
  {
    num: "01",
    category: "Rosario, Argentina",
    title: "Pablo Parma",
    description:
      "Senior UI/UX designer with 10+ years crafting user-centered digital experiences. Deeply passionate about photography and the wild landscapes of Patagonia.",
    bg: "https://res.cloudinary.com/subframe/image/upload/v1756172560/uploads/20526/b3gp8ugog2wackvbix8e.jpg",
    thumb: "https://res.cloudinary.com/subframe/image/upload/v1756173928/uploads/20526/yypeb07pkssolmvs6bgg.jpg",
    cta: "Download CV",
    ctaHref: "/cv",
  },
  {
    num: "02",
    category: "Passion",
    title: "What Sets Me Apart",
    description:
      "Whether exploring nature, experimenting with creative tools, or collaborating on projects — curiosity and love for meaningful experiences define everything I do.",
    bg: "https://res.cloudinary.com/subframe/image/upload/v1756180179/uploads/20526/smxmph45zagrbetdlh5d.jpg",
    thumb: "https://res.cloudinary.com/subframe/image/upload/v1756178229/uploads/20526/thzrykbkdarteddmafoz.jpg",
    cta: "Browse Work",
    ctaHref: "/works",
  },
  {
    num: "03",
    category: "Skills",
    title: "Resourceful",
    description:
      "A decade across disciplines: User Research, SEO, Digital Marketing, HTML/CSS, AR, 3D and AI tools. A T-shaped designer constantly expanding beyond the frame.",
    bg: "https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png",
    thumb: "https://res.cloudinary.com/subframe/image/upload/v1756234158/uploads/20526/aqshgjyzcqrisgcblewg.jpg",
    cta: "See Experience",
    ctaHref: "/cv",
  },
  {
    num: "04",
    category: "Mindset",
    title: "Eager to Experiment",
    description:
      "No two projects are the same. I shift from comfort zones, apply fresh methodologies, and embrace iteration — constantly adapting, always evolving the craft.",
    bg: "https://res.cloudinary.com/subframe/image/upload/v1756174265/uploads/20526/sjukxo8taigev9wnicad.jpg",
    thumb: "https://res.cloudinary.com/subframe/image/upload/v1756173894/uploads/20526/rruqnipgugz43bytqrd5.jpg",
    cta: "Browse Work",
    ctaHref: "/works",
  },
  {
    num: "05",
    category: "Values",
    title: "Empathetic",
    description:
      "Understanding the user's perspective is the foundation of every great product. Empathy as a practice improves the design — and the quality of life itself.",
    bg: "https://res.cloudinary.com/subframe/image/upload/v1756736102/uploads/20526/thltoellxo4igbopwgee.jpg",
    thumb: "https://res.cloudinary.com/subframe/image/upload/v1756178937/uploads/20526/iahgnwizz6h7o1ikfpjq.jpg",
    cta: "Get in Touch",
    ctaHref: "/",
  },
];

export default function AboutRedesign() {
  const [active, setActive] = useState(0);
  const [textKey, setTextKey] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [carouselH, setCarouselH] = useState(600);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (carouselRef.current) setCarouselH(carouselRef.current.clientHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active || isTransitioning) return;
      setIsTransitioning(true);
      setTextVisible(false);
      setTimeout(() => {
        setActive(idx);
        setTextKey((k) => k + 1);
        setTextVisible(true);
        setTimeout(() => setIsTransitioning(false), 900);
      }, 290);
    },
    [active, isTransitioning]
  );

  useEffect(() => {
    const t = setInterval(() => {
      goTo((active + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(t);
  }, [active, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo((active + 1) % slides.length);
      if (e.key === "ArrowLeft")
        goTo((active - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const current = slides[active];

  // Translate strip so active card is vertically centered in the container
  const stripTranslateY = carouselH / 2 - CARD_H / 2 - active * CARD_STRIDE;

  return (
    <>
      <style>{`
        @keyframes mel-left {
          from { opacity: 0; transform: translateX(-38px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes mel-up {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mel-progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes mel-num {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 0.7; transform: translateX(0); }
        }

        .mel-cat   { animation: mel-left 0.52s ease both; }
        .mel-title { animation: mel-left 0.56s 0.07s ease both; }
        .mel-desc  { animation: mel-up  0.52s 0.18s ease both; }
        .mel-cta   { animation: mel-up  0.52s 0.28s ease both; }
        .mel-num   { animation: mel-num 0.52s 0.06s ease both; }

        .mel-progress { animation: mel-progress ${SLIDE_DURATION}ms linear forwards; }

        .mel-dot-pill {
          transition: width 300ms ease, background-color 300ms ease;
        }

        .mel-carousel {
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 22%,
            black 78%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 22%,
            black 78%,
            transparent 100%
          );
        }
      `}</style>

      <div
        className="relative w-full overflow-hidden bg-black select-none"
        style={{ height: "100dvh" }}
      >
        {/* Progress line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-50">
          <div
            key={`prog-${active}`}
            className="h-full bg-warning-300 mel-progress"
          />
        </div>

        {/* Background crossfade */}
        {slides.map((s, i) => (
          <div
            key={s.num}
            className="absolute inset-0"
            style={{
              opacity: i === active ? 1 : 0,
              transition: "opacity 780ms ease-in-out",
              zIndex: i === active ? 1 : 0,
            }}
          >
            <img
              src={s.bg}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.68) saturate(0.82)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
          </div>
        ))}

        {/* Navigation */}
        <nav
          className="absolute left-0 right-0 z-40 flex items-center justify-between"
          style={{ top: "3px", padding: "18px 40px" }}
        >
          <Link href="/" className="flex items-center gap-3 text-white group">
            <img
              src="https://res.cloudinary.com/subframe/image/upload/v1756584504/uploads/20526/c5wl89v9jqmlegnamrmo.svg"
              className="w-8 flex-none opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              alt="PP"
            />
            <div>
              <div className="font-body font-bold text-[14px] tracking-tight leading-none text-white">
                Pablo Parma
              </div>
              <div className="font-caption text-[9px] text-white/45 tracking-[0.24em] leading-none mt-[4px] uppercase">
                Product Designer
              </div>
            </div>
          </Link>

          <div className="font-body flex items-center gap-7 text-[13px] font-medium text-white/75 mobile:hidden">
            <Link href="/" className="hover:text-white transition-colors duration-150">Home</Link>
            <Link href="/works" className="hover:text-white transition-colors duration-150">Work</Link>
            <span className="relative text-white">
              About
              <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-warning-300 rounded-full" />
            </span>
            <Link href="/cv" className="hover:text-white transition-colors duration-150">CV</Link>
          </div>

          <button className="text-white/55 hover:text-white transition-colors duration-150 p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </nav>

        {/* Main content */}
        <div
          className="absolute inset-0 z-20 flex items-center px-10 mobile:px-6"
          style={{ paddingTop: "72px" }}
        >
          {/* Left: slide text */}
          <div
            key={textKey}
            className="flex flex-col gap-[18px] w-full"
            style={{
              maxWidth: 520,
              opacity: textVisible ? 1 : 0,
              transition: "opacity 260ms ease",
            }}
          >
            <div className="mel-cat font-caption flex items-center gap-3 text-white/70 text-[11px] tracking-[0.22em] uppercase font-semibold">
              <span>{current.category}</span>
              <div className="w-10 h-px bg-white/40 flex-none" />
            </div>

            <h1
              className="mel-title font-heading-1 text-white tracking-tighter leading-[0.93]"
              style={{ fontSize: "clamp(42px, 6.5vw, 76px)" }}
            >
              {current.title}
            </h1>

            <p
              className="mel-desc font-body text-white/78 leading-[1.72] font-light"
              style={{ fontSize: "clamp(13px, 1.2vw, 15px)", maxWidth: 410 }}
            >
              {current.description}
            </p>

            <div className="mel-cta flex items-center gap-4 mt-1">
              <div className="w-[46px] h-[46px] rounded-full bg-success-700 flex items-center justify-center flex-none shadow-lg">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <Link href={current.ctaHref}>
                <button
                  className="font-body px-7 py-[11px] rounded-full border border-white/75 text-white font-semibold uppercase hover:bg-white hover:text-black transition-all duration-200"
                  style={{ fontSize: "12px", letterSpacing: "0.14em" }}
                >
                  {current.cta}
                </button>
              </Link>
            </div>
          </div>

          {/* Right: vertical carousel — all slides, active centered */}
          <div
            ref={carouselRef}
            className="mel-carousel absolute right-0 bottom-0 mobile:hidden overflow-hidden"
            style={{
              top: "72px",
              width: CARD_W + 40,
              paddingRight: 32,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: CARD_GAP,
                transform: `translateY(${stripTranslateY}px)`,
                transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {slides.map((slide, i) => {
                const dist = Math.abs(i - active);
                const opacity = [1, 0.55, 0.25, 0.1, 0.04][Math.min(dist, 4)];
                const isActive = i === active;

                return (
                  <button
                    key={slide.num}
                    onClick={() => goTo(i)}
                    className="relative rounded-2xl overflow-hidden flex-none cursor-pointer group"
                    style={{
                      width: CARD_W,
                      height: CARD_H,
                      opacity,
                      transition: "opacity 600ms ease",
                      outline: isActive ? "1.5px solid rgba(255,255,255,0.3)" : "none",
                      outlineOffset: 2,
                    }}
                  >
                    <img
                      src={slide.thumb}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />

                    <div className="absolute bottom-3.5 left-4 right-4 text-left">
                      <div
                        className="font-caption flex items-center gap-2 text-white/55 uppercase mb-1.5"
                        style={{ fontSize: "9px", letterSpacing: "0.18em" }}
                      >
                        <span>{slide.category}</span>
                        <div className="flex-1 h-px bg-white/28" />
                      </div>
                      <h3
                        className="font-body text-white font-bold leading-tight"
                        style={{ fontSize: "15px" }}
                      >
                        {slide.title}
                      </h3>
                      <p
                        className="font-caption text-white/55 mt-1 leading-snug line-clamp-2"
                        style={{ fontSize: "10px" }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slide number */}
        <div
          className="font-body absolute bottom-9 left-10 z-30 text-white font-extrabold leading-none tracking-tighter mobile:left-6 mobile:bottom-7"
          key={`num-${textKey}`}
          style={{
            fontSize: "clamp(40px, 5.5vw, 60px)",
            opacity: textVisible ? 1 : 0,
            transition: "opacity 260ms ease",
          }}
        >
          <span className="mel-num">{current.num}</span>
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-[38px] left-1/2 -translate-x-1/2 z-30 flex items-center gap-[7px]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`mel-dot-pill rounded-full h-2 ${
                i === active ? "w-7 bg-warning-300" : "w-2 bg-white/30 hover:bg-white/55"
              }`}
            />
          ))}
        </div>

        <div className="font-caption absolute bottom-[36px] right-10 z-30 text-white/35 text-[11px] tracking-widest uppercase flex items-center gap-2 mobile:hidden">
          <span>← →</span>
          <span>navigate</span>
        </div>
      </div>
    </>
  );
}
