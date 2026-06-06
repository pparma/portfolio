"use client";

import React, { useRef } from "react";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import Link from "next/link";
import { SiteFooter } from "@/src/components/SiteFooter";
import { motion, useInView } from "framer-motion";
import { SimpleTextCard } from "@/src/components/SimpleTextCard";

/* ─── Page ──────────────────────────────────────────────────────────────────── */

function Works() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-40px" });

  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-center">
        <NavigationHeader
          title="Pablo Parma"
          navigation={
            <>
              <Link href="/works">
                <LinkButton
                  variant="active"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}
                >
                  Work
                </LinkButton>
              </Link>
              <Link href="/ai">
                <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => { }}>
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

        <main className="container max-w-none flex w-full flex-col items-center gap-16 bg-default-background pb-16 pt-[86px] px-6">
          <div className="max-w-7xl w-full flex flex-col items-start gap-16">

          {/* ── Page header ── */}
          <section ref={headingRef} className="flex w-full flex-col gap-5">
            {/* Eyebrow */}
            <motion.p
              className="text-caption font-caption text-subtext-color"
              initial={{ opacity: 0, x: -10 }}
              animate={isHeadingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              Selected work · 4 projects
            </motion.p>

            {/* Heading clip-path slide */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-heading-1 font-heading-1 text-default-font"
                style={{ textWrap: "balance" } as React.CSSProperties}
                initial={{ y: "100%" }}
                animate={isHeadingInView ? { y: "0%" } : { y: "100%" }}
                transition={{ type: "spring" as const, stiffness: 55, damping: 18, delay: 0.08 }}
              >
                Product Design Highlights
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="max-w-[576px] text-body-big font-body-big text-subtext-color"
              style={{ textWrap: "pretty" } as React.CSSProperties}
              initial={{ opacity: 0, y: 12 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ type: "spring" as const, stiffness: 55, damping: 20, delay: 0.2 }}
            >
              From digital products to design systems. Projects that blend creativity,
              strategy, and execution.
            </motion.p>
          </section>

          {/* ── Case study grid ── */}
          <section className="w-full grid grid-cols-2 gap-4 mobile:grid-cols-1">

            <SimpleTextCard
              index="01"
              href="/case-study-bh"
              title="Simplifying Operations for BridgeHaul"
              subtitle="Delivered UI/UX design and a solid mobile architecture in three months — from research to production."
              imageSrc="https://res.cloudinary.com/subframe/image/upload/v1755562055/uploads/20526/lyoychwpwl3h0bynaxii.png"
            />

            <SimpleTextCard
              index="02"
              href="/case-study-docsnap"
              title="Clarity and control over legal obligations powered by AI"
              subtitle="Delivered a streamlined, user-friendly AI-driven platform for document management."
              imageSrc="https://res.cloudinary.com/subframe/image/upload/v1755906077/uploads/20526/oyzg1w7wuhxvqy8nr0nm.jpg"
            />

            <SimpleTextCard
              index="03"
              href="/case-study-yappa"
              title="Rating discussions through Voice & Video UX"
              subtitle="Created UX flows and a modular design system for publishers."
              imageSrc="https://res.cloudinary.com/subframe/image/upload/v1756048947/uploads/20526/yizdabjt8n9aute45cop.png"
            />

            <SimpleTextCard
              index="04"
              href="/case-study-crypto"
              title="Bitcoin Exchange and Cryptocurrency platform"
              subtitle="A modern, intuitive interface for tracking portfolios and gains."
              imageSrc="https://res.cloudinary.com/subframe/image/upload/v1755639280/uploads/20526/bvn3sp4q9s3muk0bzhy3.jpg"
            />

          </section>
          </div>
        </main>

        <SiteFooter />
      </div>
    </DefaultPageLayout>
  );
}

export default Works;
