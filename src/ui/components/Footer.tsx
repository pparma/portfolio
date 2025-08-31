"use client";
/*
 * Documentation:
 * Footer — https://app.subframe.com/library?component=Footer_9591b9b2-eace-47a0-9f5a-a8456829dce9
 */

import React from "react";
import * as SubframeUtils from "../utils";

interface FooterRootProps extends React.HTMLAttributes<HTMLDivElement> {
  createdWithText?: React.ReactNode;
  tools?: React.ReactNode;
  socialText?: React.ReactNode;
  socialLinks?: React.ReactNode;
  copyright?: React.ReactNode;
  className?: string;
}

const FooterRoot = React.forwardRef<HTMLDivElement, FooterRootProps>(
  function FooterRoot(
    {
      createdWithText,
      tools,
      socialText,
      socialLinks,
      copyright,
      className,
      ...otherProps
    }: FooterRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start justify-center gap-4 px-4 py-4",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
        <div className="flex w-full flex-wrap items-start gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start justify-end gap-1">
            {createdWithText ? (
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                {createdWithText}
              </span>
            ) : null}
            {tools ? (
              <div className="flex items-center gap-2">{tools}</div>
            ) : null}
          </div>
          <div className="flex flex-col items-start justify-end gap-1">
            {socialText ? (
              <span className="text-monospace-body font-monospace-body text-subtext-color">
                {socialText}
              </span>
            ) : null}
            {socialLinks ? (
              <div className="flex items-center gap-2">{socialLinks}</div>
            ) : null}
          </div>
        </div>
        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-brand-200" />
        {copyright ? (
          <span className="text-caption font-caption text-default-font">
            {copyright}
          </span>
        ) : null}
      </div>
    );
  }
);

export const Footer = FooterRoot;
