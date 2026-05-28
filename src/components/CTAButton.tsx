"use client";
import React from "react";
import { motion } from "framer-motion";

const CLIP_PATH =
  "polygon(7px 0%, 100% 0%, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0% 100%, 0% 7px)";

interface CTAButtonProps {
  variant?: "primary" | "accent";
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function CTAButton({
  variant = "primary",
  children,
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: CTAButtonProps) {
  const bg      = variant === "accent" ? "rgb(232, 80, 0)"     : "rgb(23, 23, 23)";
  const bgHover = variant === "accent" ? "rgb(200, 60, 0)"     : "rgb(42, 42, 42)";
  const color   = variant === "accent" ? "rgb(255, 255, 255)"  : "rgb(249, 246, 241)";

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: bg,
        color,
        padding: "10px 26px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontSize: "13px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        clipPath: CLIP_PATH,
        borderRadius: "0 4px 0 4px",
        opacity: disabled ? 0.6 : 1,
      }}
      whileHover={!disabled ? { scale: 1.03, backgroundColor: bgHover } : {}}
      whileTap={!disabled  ? { scale: 0.97 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}
