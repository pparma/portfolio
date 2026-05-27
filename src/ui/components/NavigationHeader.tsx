"use client";
/*
 * Documentation:
 * NavigationHeader — https://app.subframe.com/library?component=NavigationHeader_2914ea44-0d83-4835-ac31-66ed369b6611
 */

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 60) {
        // Always visible near the top
        setHidden(false);
      } else if (currentY > lastYRef.current + 4) {
        // Scrolling down — hide
        setHidden(true);
      } else if (currentY < lastYRef.current - 4) {
        // Scrolling up — reveal
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
        "flex w-full items-center gap-2 border-b border-solid border-neutral-border bg-default-background px-8 mobile:px-4 py-4 fixed top-0 left-0 right-0 z-50 bg-blend-screen backdrop-blur-xl bg-opacity-30",
        className
      )}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 32, mass: 0.8 }}
      ref={ref}
      {...(otherProps as any)}
    >
      {logoppd ? (
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          {logoppd}
        </div>
      ) : null}
      {navigation ? (
        <div className="flex items-center gap-4">{navigation}</div>
      ) : null}
    </motion.div>
  );
});

export const NavigationHeader = NavigationHeaderRoot;
