"use client";

import React, { useRef } from "react";
import { CaseStudyCard } from "@/ui/components/CaseStudyCard";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { Button } from "@/ui/components/Button";
import { FeatherArrowRight, FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import CopyEmail from "@/src/components/CopyEmail";
import { motion, useInView } from "framer-motion";

/* ─── Animated case study card ────────────────────────────────────────────── */

function AnimatedCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        type: "spring" as const,
        stiffness: 60,
        damping: 20,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring" as const, stiffness: 400, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

function Index() {
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

      {/* ── Hero ── */}
      <section className="container max-w-none flex w-full flex-col items-start gap-8 py-24 px-14 mobile:px-6 mobile:py-16">
        <motion.p
          className="text-caption font-caption text-subtext-color"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Product Designer · Rosario, Argentina · Open to remote
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="text-heading-1 font-heading-1 text-default-font max-w-[720px]"
            style={{ textWrap: "balance" } as React.CSSProperties}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ type: "spring" as const, stiffness: 55, damping: 18, delay: 0.08 }}
          >
            Product Designer crafting clear, calm interfaces.
          </motion.h1>
        </div>

        <motion.p
          className="text-body-big font-body-big text-subtext-color max-w-[520px]"
          style={{ textWrap: "pretty" } as React.CSSProperties}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" as const, stiffness: 55, damping: 20, delay: 0.2 }}
        >
          Senior UI/UX designer focused on systems, product thinking, and
          delightful details. Currently open to remote opportunities.
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" as const, stiffness: 55, damping: 20, delay: 0.3 }}
        >
          <Link href="/works">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
            >
              <Button iconRight={<FeatherArrowRight />}>Browse Work</Button>
            </motion.div>
          </Link>
          <motion.a
            href="/about"
            className="text-body font-body text-subtext-color underline-offset-4 hover:underline"
            whileHover={{ x: 3 }}
            transition={{ type: "spring" as const, stiffness: 400, damping: 17 }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </section>

      {/* ── Selected Work ── */}
      <section className="container max-w-none flex w-full flex-col items-start gap-8 py-20 px-6">
        <motion.span
          className="text-headling-4 font-headling-4 text-default-font"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ type: "spring" as const, stiffness: 80, damping: 20 }}
        >
          Selected Work
        </motion.span>

        <div className="w-full grid grid-cols-3 gap-6 mobile:grid-cols-1">
          <AnimatedCard index={0}>
            <Link href="/case-study-bh">
              <CaseStudyCard
                image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                title="Simplifying Operations for BridgeHaul"
                subtitle="Revolutionizing freight with a redesigned mobile app."
                preview={
                  <img
                    className="flex-none transition-transform duration-300 hover:scale-110"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                    alt="BridgeHaul case study"
                  />
                }
              />
            </Link>
          </AnimatedCard>

          <AnimatedCard index={1}>
            <Link href="/case-study-yappa">
              <CaseStudyCard
                image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                title="Humanizing online rating discussions through Voice & Video UX"
                subtitle="UX flows and a modular design system enabling publishers to embed social interaction on their platforms."
                preview={
                  <img
                    className="flex-none transition-transform duration-300 hover:scale-110"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756048947/uploads/20526/yizdabjt8n9aute45cop.png"
                    alt="Yappa case study"
                  />
                }
              />
            </Link>
          </AnimatedCard>

          <AnimatedCard index={2}>
            <Link href="/case-study-docsnap">
              <CaseStudyCard
                image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                title="AI-driven platform for legal management"
                subtitle="A streamlined, user-friendly platform for intelligent document management."
                preview={
                  <img
                    className="flex-none transition-transform duration-300 hover:scale-110"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755616223/uploads/20526/s4zctt7znm22wkvnu0oe.png"
                    alt="Docsnap case study"
                  />
                }
              />
            </Link>
          </AnimatedCard>
        </div>
      </section>

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
