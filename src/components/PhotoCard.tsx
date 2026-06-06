"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FOLDER_TOP_PATH } from "./WorkCard";

const PANEL_FILL = "rgb(228, 222, 215)";

export function PhotoCard({
  index = 0,
  number,
  title,
  subtitle,
  imageSrc,
  aspect = "9 / 16",
}: {
  index?: number;
  number: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  aspect?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 55, damping: 20, delay: index * 0.1 }}
      style={{ height: "100%" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          aspectRatio: aspect,
          width: "100%",
          borderRadius: "18px",
          overflow: "hidden",
          position: "relative",
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Number — top right over photo */}
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "rgba(255,255,255,0.45)",
            fontSize: "13px",
            letterSpacing: "0.05em",
            fontWeight: 500,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {number}
        </span>

        {/* Folder tab SVG — overlaps photo */}
        <svg
          viewBox="0 0 864 104"
          width="100%"
          aria-hidden="true"
          style={{ display: "block", flexShrink: 0 }}
        >
          <path d={FOLDER_TOP_PATH} fill={PANEL_FILL} />
        </svg>

        {/* Text panel */}
        <div
          style={{
            backgroundColor: PANEL_FILL,
            padding: "4px 24px 28px",
            marginTop: "-1px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <span
            style={{
              color: "rgb(23, 23, 23)",
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
              color: "rgb(115, 115, 115)",
              fontSize: "13px",
              lineHeight: 1.6,
              textWrap: "pretty",
            } as React.CSSProperties}
          >
            {subtitle}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
