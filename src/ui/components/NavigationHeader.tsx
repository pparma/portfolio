"use client";
/*
 * Documentation:
 * NavigationHeader — https://app.subframe.com/library?component=NavigationHeader_2914ea44-0d83-4835-ac31-66ed369b6611
 */

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as SubframeUtils from "../utils";

interface NavigationHeaderRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  navigation?: React.ReactNode;
  logoppd?: React.ReactNode;
  className?: string;
}

const NavigationHeaderRoot = React.forwardRef<
  HTMLDivElement,
  NavigationHeaderRootProps
>(function NavigationHeaderRoot(
  {
    title,
    navigation,
    logoppd,
    className,
    ...otherProps
  }: NavigationHeaderRootProps,
  ref
) {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        setHidden(false);
      } else if (currentY > lastYRef.current + 4) {
        setHidden(true);
        setMenuOpen(false);
      } else if (currentY < lastYRef.current - 4) {
        setHidden(false);
      }
      lastYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className={SubframeUtils.twClassNames(
        "flex flex-col w-full bg-default-background/20 fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl",
        className
      )}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.8 }}
      ref={ref}
      {...(otherProps as any)}
    >
      {/* Main bar */}
      <div className="flex w-full items-center gap-2 px-8 mobile:px-4 py-4">
        {logoppd ? (
          <div className="flex grow shrink-0 basis-0 items-center gap-2">
            {logoppd}
          </div>
        ) : null}

        {/* Desktop nav */}
        {navigation ? (
          <div className="flex items-center gap-4 mobile:hidden">{navigation}</div>
        ) : null}

        {/* Mobile hamburger */}
        {navigation ? (
          <button
            className="hidden mobile:flex items-center justify-center w-9 h-9 rounded-md text-neutral-700 hover:text-neutral-900 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <AnimatePresence initial={false} mode="wait">
                {menuOpen ? (
                  <motion.g
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.15 }}
                  >
                    <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.g>
                ) : (
                  <motion.g
                    key="open"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </button>
        ) : null}
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && navigation && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 36, mass: 0.7 }}
            className="overflow-hidden mobile:flex hidden flex-col px-4 pb-4 gap-1"
            onClick={() => setMenuOpen(false)}
          >
            {navigation}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

export const NavigationHeader = NavigationHeaderRoot;
