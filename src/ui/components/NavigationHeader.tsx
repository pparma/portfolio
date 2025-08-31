"use client";
/*
 * Documentation:
 * NavigationHeader — https://app.subframe.com/library?component=NavigationHeader_2914ea44-0d83-4835-ac31-66ed369b6611
 */

import React from "react";
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
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex w-full items-center gap-2 border-b border-solid border-neutral-border bg-default-background px-8 py-4 sticky top-0 bg-blend-screen backdrop-blur-xl bg-opacity-30",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {logoppd ? (
        <div className="flex grow shrink-0 basis-0 items-center gap-2">
          {logoppd}
        </div>
      ) : null}
      {navigation ? (
        <div className="flex items-center gap-4">{navigation}</div>
      ) : null}
    </div>
  );
});

export const NavigationHeader = NavigationHeaderRoot;
