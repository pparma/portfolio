"use client";
/*
 * Documentation:
 * Sidebar with minimal sections — https://app.subframe.com/library?component=Sidebar+with+minimal+sections_c184d8cd-6e2b-4e1e-a8f1-c98d42b7504a
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  selected?: boolean;
  rightSlot?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLDivElement, NavItemProps>(function NavItem(
  {
    icon = null,
    children,
    selected = false,
    rightSlot,
    className,
    ...otherProps
  }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/289aa302 flex h-8 w-full cursor-pointer items-center gap-2 rounded-md pl-3 pr-2 py-2 hover:bg-neutral-100 active:bg-neutral-200",
        { "bg-neutral-100 hover:bg-neutral-100": selected },
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {icon ? (
        <SubframeCore.IconWrapper
          className={SubframeUtils.twClassNames(
            "text-body font-body text-default-font",
            { "text-default-font": selected }
          )}
        >
          {icon}
        </SubframeCore.IconWrapper>
      ) : null}
      {children ? (
        <span
          className={SubframeUtils.twClassNames(
            "line-clamp-1 grow shrink-0 basis-0 text-body font-body text-default-font",
            { "text-default-font": selected }
          )}
        >
          {children}
        </span>
      ) : null}
      {rightSlot ? <div className="flex items-center">{rightSlot}</div> : null}
    </div>
  );
});

interface NavSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  className?: string;
}

const NavSection = React.forwardRef<HTMLDivElement, NavSectionProps>(
  function NavSection(
    { children, label, className, ...otherProps }: NavSectionProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-start gap-1",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        <div className="flex w-full flex-col items-start gap-4 px-3 py-1">
          {label ? (
            <span className="w-full text-caption-bold font-caption-bold text-subtext-color">
              {label}
            </span>
          ) : null}
        </div>
        {children ? (
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
            {children}
          </div>
        ) : null}
      </div>
    );
  }
);

interface SidebarWithMinimalSectionsRootProps
  extends React.HTMLAttributes<HTMLElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const SidebarWithMinimalSectionsRoot = React.forwardRef<
  HTMLElement,
  SidebarWithMinimalSectionsRootProps
>(function SidebarWithMinimalSectionsRoot(
  {
    header,
    footer,
    children,
    className,
    ...otherProps
  }: SidebarWithMinimalSectionsRootProps,
  ref
) {
  return (
    <nav
      className={SubframeUtils.twClassNames(
        "flex h-full w-60 flex-col items-start bg-neutral-50",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {header ? (
        <div className="flex w-full items-center justify-between pl-4 pr-3 py-3">
          {header}
        </div>
      ) : null}
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 px-2 py-2 overflow-auto">
          {children}
        </div>
      ) : null}
      {footer ? (
        <div className="flex w-full flex-col items-center gap-2 border-t border-solid border-neutral-border px-2 py-2">
          {footer}
        </div>
      ) : null}
    </nav>
  );
});

export const SidebarWithMinimalSections = Object.assign(
  SidebarWithMinimalSectionsRoot,
  {
    NavItem,
    NavSection,
  }
);
