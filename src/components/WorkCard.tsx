"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export const FOLDER_TOP_PATH =
  "M0 24C0 10.7452 10.7452 0 24 0H254.615C260.947 0 267.022 2.50218 271.518 6.96142L312.965 48.0771C321.955 56.9956 334.106 62 346.769 62H840C853.255 62 864 72.7452 864 86V104H0L0 24Z";

type WorkCardVariant = "light" | "dark" | "warm";

const VARIANTS: Record<WorkCardVariant, { fill: string; text: string; sub: string; num: string }> = {
  light: {
    fill: "rgb(228, 222, 215)",
    text: "rgb(23, 23, 23)",
    sub:  "rgb(115, 115, 115)",
    num:  "rgba(23,23,23,0.18)",
  },
  warm: {
    fill: "rgb(240, 234, 224)",
    text: "rgb(23, 23, 23)",
    sub:  "rgb(130, 118, 105)",
    num:  "rgba(23,23,23,0.15)",
  },
  dark: {
    fill: "rgb(17, 17, 17)",
    text: "rgb(249, 246, 241)",
    sub:  "rgba(249,246,241,0.50)",
    num:  "rgba(249,246,241,0.20)",
  },
};

export function WorkCard({
  index = 0,
  number,
  title,
  subtitle,
  href,
  variant = "light",
}: {
  index?: number;
  number: string;
  title: string;
  subtitle: string;
  href: string;
  variant?: WorkCardVariant;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { fill, text, sub, num } = VARIANTS[variant];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 55, damping: 20, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { type: "spring", stiffness: 380, damping: 22 } }}
      style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
    >
      <Link href={href} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <svg
          viewBox="0 0 864 104"
          width="100%"
          aria-hidden="true"
          style={{ display: "block", flexShrink: 0 }}
        >
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

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span
              style={{
                color: text,
                fontSize: "clamp(15px, 1.25vw, 20px)",
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
      </Link>
    </motion.div>
  );
}
