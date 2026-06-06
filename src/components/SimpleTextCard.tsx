"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export function SimpleTextCard({
  index,
  href,
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  index: string;
  href: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <article ref={ref} className="flex flex-col gap-3">
      {/* Index + animated divider */}
      <div className="flex items-center gap-3">
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

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
        transition={{ type: "spring", stiffness: 58, damping: 20, delay: 0.15 }}
        whileHover={{ y: -8, transition: { type: "spring", stiffness: 350, damping: 22 } }}
      >
        <Link href={href}>
          <div className="flex flex-col items-start gap-4">
            <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-100 aspect-video">
              <img className="w-full h-full object-cover" src={imageSrc} alt={imageAlt ?? title} />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-3 font-heading-3 text-default-font">{title}</span>
              <span className="whitespace-pre-wrap text-caption font-caption text-subtext-color">{subtitle}</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </article>
  );
}
