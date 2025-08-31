"use client";
/*
 * Documentation:
 * NavigationHeader2 — https://app.subframe.com/library?component=NavigationHeader2_cc8e4d48-acc5-4dfd-a937-ba8f7df80449
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import * as SubframeUtils from "../utils";

interface NavigationHeader2RootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  navigation?: React.ReactNode;
  mobilemenu?: React.ReactNode;
  logo?: React.ReactNode;
  mobile?: boolean;
  className?: string;
}

const NavigationHeader2Root = React.forwardRef<
  HTMLDivElement,
  NavigationHeader2RootProps
>(function NavigationHeader2Root(
  {
    title,
    navigation,
    mobilemenu,
    logo,
    mobile = false,
    className,
    ...otherProps
  }: NavigationHeader2RootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/cc8e4d48 flex w-full items-center gap-2 border-b border-solid border-neutral-border bg-default-background px-8 py-4 sticky top-0 bg-blend-screen backdrop-blur-xl bg-opacity-30",
        className
      )}
      ref={ref}
      {...otherProps}
    >
      <img
        className="w-9 flex-none"
        src="https://res.cloudinary.com/subframe/image/upload/v1756584504/uploads/20526/c5wl89v9jqmlegnamrmo.svg"
      />
      {logo ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start">
          {logo}
        </div>
      ) : null}
      {navigation ? (
        <div className="flex items-center gap-4">{navigation}</div>
      ) : null}
      {mobilemenu ? (
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <div className="flex items-center gap-2">{mobilemenu}</div>
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="end"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu>
                <DropdownMenu.DropdownItem
                  icon={mobile ? null : <FeatherStar />}
                >
                  {mobile ? "Work" : "Favorite"}
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem
                  icon={mobile ? null : <FeatherPlus />}
                >
                  {mobile ? "About" : "Add"}
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem
                  icon={mobile ? null : <FeatherEdit2 />}
                >
                  {mobile ? "CV" : "Edit"}
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem
                  className={SubframeUtils.twClassNames({ hidden: mobile })}
                  icon={<FeatherTrash />}
                >
                  Delete
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
      ) : null}
    </div>
  );
});

export const NavigationHeader2 = NavigationHeader2Root;
