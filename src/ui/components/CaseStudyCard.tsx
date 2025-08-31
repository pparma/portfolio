"use client";
/*
 * Documentation:
 * CaseStudyCard — https://app.subframe.com/library?component=CaseStudyCard_56e49f75-32ce-474f-b2c5-9dd51ed8aa99
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface CaseStudyCardRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  preview?: React.ReactNode;
  className?: string;
}

const CaseStudyCardRoot = React.forwardRef<
  HTMLDivElement,
  CaseStudyCardRootProps
>(function CaseStudyCardRoot(
  {
    image,
    title,
    subtitle,
    preview,
    className,
    ...otherProps
  }: CaseStudyCardRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex flex-col items-start gap-4",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {preview ? (
        <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-brand-500 aspect-video">
          {preview}
        </div>
      ) : null}
      <div className="flex flex-col items-start gap-1">
        {title ? (
          <span className="text-heading-3 font-heading-3 text-default-font">
            {title}
          </span>
        ) : null}
        {subtitle ? (
          <span className="whitespace-pre-wrap text-caption font-caption text-subtext-color">
            {subtitle}
          </span>
        ) : null}
      </div>
    </div>
  );
});

export const CaseStudyCard = CaseStudyCardRoot;
