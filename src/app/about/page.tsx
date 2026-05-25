"use client";

import React, { useRef } from "react";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import CopyEmail from "@/src/components/CopyEmail";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ─── Masonry ─────────────────────────────────────────────────────────────── */

const colVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const photoVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 55, damping: 18 },
  },
};

function MasonryColumn({
  children,
  offsetTop = false,
}: {
  children: React.ReactNode;
  offsetTop?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={`flex max-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-3 ${
        offsetTop ? "pt-16" : ""
      }`}
      variants={colVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

function MasonryItem({
  src,
  alt,
  isVideo = false,
}: {
  src: string;
  alt?: string;
  isVideo?: boolean;
}) {
  return (
    <motion.div
      className="w-full flex-none rounded-lg overflow-hidden"
      variants={photoVariants}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
    >
      {isVideo ? (
        <video
          className="w-full block"
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <img className="w-full block" src={src} alt={alt ?? ""} />
      )}
    </motion.div>
  );
}

/* ─── Text section ─────────────────────────────────────────────────────────── */

function TextSection({
  index,
  heading,
  body,
  mobileImage,
  mobileVideo,
}: {
  index: string;
  heading: string;
  body: string;
  mobileImage?: string;
  mobileVideo?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className="flex w-full max-w-[512px] flex-col items-start gap-4 py-12 mobile:py-10"
    >
      {/* Mobile media */}
      {mobileVideo && (
        <video
          className="hidden w-full rounded-lg aspect-video object-cover mobile:block"
          src={mobileVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}
      {mobileImage && !mobileVideo && (
        <img
          className="hidden w-full rounded-lg object-cover aspect-[4/3] mobile:block"
          src={mobileImage}
          alt={heading}
        />
      )}

      {/* Index + animated divider */}
      <div className="flex w-full items-center gap-3">
        <motion.span
          className="text-caption font-caption text-subtext-color tabular-nums shrink-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          {index}
        </motion.span>
        <div className="flex-1 h-px overflow-hidden">
          <motion.div
            className="h-px w-full bg-neutral-border origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          />
        </div>
      </div>

      {/* Heading — clip-path slide up */}
      <div className="overflow-hidden w-full">
        <motion.span
          className="block text-heading-1 font-heading-1 text-brand-primary"
          style={{ textWrap: "balance" } as React.CSSProperties}
          initial={{ y: "110%" }}
          animate={isInView ? { y: "0%" } : { y: "110%" }}
          transition={{ type: "spring", stiffness: 58, damping: 18, delay: 0.15 }}
        >
          {heading}
        </motion.span>
      </div>

      {/* Body */}
      <motion.span
        className="text-caption-bold font-caption-bold text-subtext-color"
        style={{ textWrap: "pretty" } as React.CSSProperties}
        initial={{ opacity: 0, y: 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.28 }}
      >
        {body}
      </motion.span>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */

function About() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], ["-8%", "8%"]);

  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-center">
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

        <main className="container max-w-none flex w-full flex-col items-start gap-20 bg-default-background py-16">

          {/* ── Intro ── */}
          <section className="flex w-full flex-col gap-5 px-6 mobile:px-0">
            {/* Eyebrow */}
            <motion.p
              className="text-caption font-caption text-subtext-color"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Product Designer · Rosario, Argentina · Open to remote
            </motion.p>

            {/* Name — clip-path slide */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-heading-1 font-heading-1 text-brand-primary"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ type: "spring", stiffness: 55, damping: 18, delay: 0.1 }}
              >
                Pablo Parma
              </motion.h1>
            </div>

            {/* Bio */}
            <motion.div
              className="flex flex-col gap-2 max-w-[640px]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 55, damping: 20, delay: 0.22 }}
            >
              <span
                className="text-caption font-caption text-subtext-color"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                I&apos;m a Product Designer with 10+ years of experience creating user-centered
                digital experiences, proudly based in Argentina.
              </span>
              <span
                className="text-caption-bold font-caption-bold text-default-font"
                style={{ textWrap: "pretty" } as React.CSSProperties}
              >
                Beyond design, I&apos;m deeply passionate about photography — especially capturing
                the landscapes and wildlife of my country. Patagonia is my constant source of
                inspiration, and I often dream of one day calling it home.
              </span>
            </motion.div>
          </section>

          {/* ── Hero image with parallax ── */}
          <section ref={heroRef} className="w-full overflow-hidden rounded-xl">
            <motion.img
              style={{ y: heroY }}
              className="w-full object-cover aspect-[16/7]"
              src="https://res.cloudinary.com/subframe/image/upload/v1756172560/uploads/20526/b3gp8ugog2wackvbix8e.jpg"
              alt="Patagonia landscape, Argentina"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            />
          </section>

          {/* ── Masonry + text sections ── */}
          <section className="flex w-full items-start gap-8 mobile:flex-col">

            {/* Left: photo masonry */}
            <aside className="flex grow shrink-0 basis-0 items-start gap-3 mobile:hidden">
              <MasonryColumn>
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756173928/uploads/20526/yypeb07pkssolmvs6bgg.jpg"
                  alt="Wildlife in Patagonia"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756173894/uploads/20526/rruqnipgugz43bytqrd5.jpg"
                  alt="Patagonian landscape"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756234158/uploads/20526/aqshgjyzcqrisgcblewg.jpg"
                  alt="Argentine nature"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png"
                  alt="Photography"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178937/uploads/20526/iahgnwizz6h7o1ikfpjq.jpg"
                  alt="Photography"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756233719/uploads/20526/bjmhblysoiu8mhvtodtl.jpg"
                  alt="Photography"
                />
              </MasonryColumn>

              <MasonryColumn offsetTop>
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756180179/uploads/20526/smxmph45zagrbetdlh5d.jpg"
                  alt="Photography"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178229/uploads/20526/thzrykbkdarteddmafoz.jpg"
                  alt="Photography"
                />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756174265/uploads/20526/sjukxo8taigev9wnicad.jpg"
                  alt="Photography"
                />
                <MasonryItem src="/Recording 2024-05-04 184348.mp4" isVideo />
                <MasonryItem
                  src="https://res.cloudinary.com/subframe/image/upload/v1756736102/uploads/20526/thltoellxo4igbopwgee.jpg"
                  alt="Photography"
                />
              </MasonryColumn>
            </aside>

            {/* Right: scrolling text sections */}
            <div className="flex grow shrink-0 basis-0 flex-col items-start py-8 mobile:py-0">
              <TextSection
                index="01"
                heading="What sets me apart?"
                body="Whether I'm exploring nature, experimenting with new creative tools, or collaborating on design projects, I bring the same curiosity, dedication, and love for meaningful experiences that define both my personal and professional journey."
                mobileImage="https://res.cloudinary.com/subframe/image/upload/v1756178229/uploads/20526/thzrykbkdarteddmafoz.jpg"
              />
              <TextSection
                index="02"
                heading="I'm resourceful"
                body="More than 10 years as a designer has given me breadth across User Research, SEO, Digital Marketing, HTML and CSS, AR, 3D, and AI tools. I reach for whatever it takes to solve the problem well."
                mobileImage="https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png"
              />
              <TextSection
                index="03"
                heading="I'm eager to experiment"
                body="Not every project is equal. I regularly step outside my comfort zone and apply new ideas, methodologies, or processes to find what works. I can adapt — I'm always evolving."
                mobileVideo="/Recording 2024-05-04 184348.mp4"
              />
              <TextSection
                index="04"
                heading="I'm always learning"
                body="The UI/UX field never stops expanding — new tools, technologies, trends, methodologies. I consider myself a T-shaped Designer: broad across disciplines, deep where it matters most."
                mobileImage="https://res.cloudinary.com/subframe/image/upload/v1756736102/uploads/20526/thltoellxo4igbopwgee.jpg"
              />
              <TextSection
                index="05"
                heading="I'm empathetic"
                body="Understanding users' perspectives is the key to identifying real pain points. Being empathic as a habit also raises the quality of the work we put out — and the lives we lead."
                mobileImage="https://res.cloudinary.com/subframe/image/upload/v1756180179/uploads/20526/smxmph45zagrbetdlh5d.jpg"
              />
            </div>
          </section>
        </main>

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
              <Link
                href="https://www.linkedin.com/in/pabloparma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-body font-body text-default-font">LinkedIn</span>
              </Link>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <FeatherInstagram className="text-body font-body text-default-font" />
              <Link
                href="https://www.instagram.com/pabloparma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-body font-body text-default-font">Instagram</span>
              </Link>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <FeatherSend className="text-body font-body text-default-font" />
              <CopyEmail />
            </>
          }
          copyright="© 2525 Pablo Parma"
        />
      </div>
    </DefaultPageLayout>
  );
}

export default About;
