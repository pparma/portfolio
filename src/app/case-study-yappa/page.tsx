"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherAtom } from "@subframe/core";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";

function Case_Study_Yappa() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-center">
        <NavigationHeader
          title="Pablo Parma"
          navigation={
              <>
                  <Link href="/works">
                    <LinkButton  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                    Work
                    </LinkButton>
                  </Link>
                  <Link href="/about">
                    <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                    About
                    </LinkButton>
                  </Link>
                  <Link href="/cv">
                    <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                    CV
                    </LinkButton>
                  </Link>
              </>
          }
          logoppd={
                <>
                  <Link href="/">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-9 flex-none"
                      src="https://res.cloudinary.com/subframe/image/upload/v1756584504/uploads/20526/c5wl89v9jqmlegnamrmo.svg"
                    />
                  </div>
                  </Link>
                  <Link href="/">
                  <div className="flex grow shrink-0 basis-0 flex-col items-start">
                    <span className="text-heading-3 font-heading-3 text-default-font">
                      Pablo Parma
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Product Designer
                    </span>
                  </div>
                  </Link>
                </>
          }
        />
        <div className="container max-w-none flex w-full flex-col items-start bg-default-background pb-12">
          <div className="flex w-full items-start gap-4">
            <div className="flex max-w-[176px] grow shrink-0 basis-0 flex-col items-start self-stretch pt-11 mobile:hidden">
              <Button
                variant="neutral-tertiary"
                size="small"
                icon={<FeatherArrowLeft />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Back
              </Button>
              <div className="flex w-full flex-col items-start gap-4 px-6 py-6">
                <LinkButton
                  className="h-auto w-full flex-none"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Summary
                </LinkButton>
                <LinkButton
                  className="h-auto w-full flex-none"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Workflows
                </LinkButton>
                <LinkButton
                  className="h-auto w-full flex-none"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Design system
                </LinkButton>
              </div>
            </div>
            <div className="flex max-w-[1280px] grow shrink-0 basis-0 flex-col items-start gap-12 pt-12">
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  Summary
                </span>
                <span className="text-heading-1 font-heading-1 text-default-font">
                  Humanizing Online Rating Discussions through Voice &amp; Video
                  UX
                </span>
              </div>
              <div className="flex w-full flex-wrap items-start gap-4">
                <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch rounded-md bg-neutral-50 px-4 py-4">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Scope
                  </span>
                  <span className="text-body font-body text-default-font">
                    Product Design
                  </span>
                  <span className="text-body font-body text-default-font">
                    Product Discovery
                  </span>
                  <span className="text-body font-body text-default-font">
                    Design System
                  </span>
                </div>
                <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch rounded-md bg-neutral-50 px-4 py-4">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Company
                  </span>
                  <span className="text-body font-body text-default-font">
                    Yappa
                  </span>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Timeline
                  </span>
                  <span className="text-body font-body text-default-font">
                    2021 -2022
                  </span>
                </div>
                <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-1 self-stretch rounded-md bg-neutral-50 px-4 py-4">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Tech
                  </span>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="flex h-4 w-4 flex-none items-center justify-center gap-2">
                      <img
                        className="grow shrink-0 basis-0 self-stretch object-contain"
                        src="https://res.cloudinary.com/subframe/image/upload/v1755716058/uploads/20526/kzxx6kaysvsjbjnflp3a.svg"
                      />
                    </div>
                    <span className="text-body font-body text-default-font">
                      Figma
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <FeatherAtom className="text-body font-body text-default-font" />
                    <span className="text-body font-body text-default-font">
                      Atomic Design
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"From UX Flows to Scalable Design Systems"}
                  </span>
                  <span className="whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "Created UX flows and a modular design system that enabled publishers to embed social interaction directly on their platforms.\nYaps are up to 45 seconds of voice or video commentary tool that gives Bloggers, Web Publishers and Podcasters, the power of social media directly on your their websites."
                    }
                  </span>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 rounded-md bg-neutral-border px-6 py-6">
                  <img
                    className="w-full max-w-[576px] grow shrink-0 basis-0 rounded-md object-cover shadow-lg"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756071527/uploads/20526/hjdebbizewd27ynuvxmg.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-6">
                <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-2">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Workflows
                  </span>
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"Turning Research Into Clarity"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "I started by mapping user skills, frustrations, and motivations, then built a journey map to visualize their experience end-to-end. \nWith this foundation, we aligned priorities and designed solutions that directly addressed user needs."
                    }
                  </span>
                </div>
                <div className="flex min-w-[448px] grow shrink-0 basis-0 items-start gap-6 self-stretch rounded-md bg-neutral-50 px-6 py-6 mobile:h-auto mobile:min-w-[288px] mobile:grow mobile:shrink-0 mobile:basis-0 mobile:self-stretch">
                  <img
                    className="grow shrink-0 basis-0 rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756051097/uploads/20526/rqtdtxj4ugvtv0x0g6vc.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"From Insights to Impact"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color">
                    {
                      "This process not only uncovered key pain points but also gave the team a shared understanding of our users. \nIt became the foundation for aligning decisions, streamlining priorities, and designing solutions that felt intuitive and impactful."
                    }
                  </span>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-wrap items-start justify-center gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <img
                    className="max-h-[384px] flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756051782/uploads/20526/rttjqokezgkn7hpyvxis.png"
                  />
                  <img
                    className="max-h-[288px] flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756051728/uploads/20526/yxaiqnyadtynkyvdsqnn.jpg"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-6">
                <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Design System
                  </span>
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"Design System Creation & Atomic UI Implementation"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "Built a scalable design system starting from the brand palette, expanding it into full UI shades and tones. \n"
                    }
                  </span>
                  <img
                    className="w-full max-w-[448px] flex-none"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756074858/uploads/20526/ksib85extnrn377htujp.svg"
                  />
                </div>
                <div className="flex items-start gap-6 self-stretch rounded-md bg-neutral-border px-6 py-6">
                  <img
                    className="max-h-[384px] grow shrink-0 basis-0 rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756052538/uploads/20526/rjgdwnhkbgoylye5haib.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <span className="whitespace-pre-wrap text-heading-3 font-heading-3 text-default-font">
                    {
                      "Created reusable Figma tokens for color, typography, and spacing"
                    }
                  </span>
                  <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color">
                    {
                      "Structured components using an atomic design approach—from atoms to organisms—leveraging auto-layout and sigma for responsive, consistent, and efficient UI development."
                    }
                  </span>
                  <img
                    className="w-full max-w-[576px] flex-none rounded-md shadow-lg"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756073386/uploads/20526/rsrc5dnby3oqlnlj1gne.jpg"
                  />
                  <div className="flex w-full flex-wrap items-center gap-6">
                    <img
                      className="max-h-[240px] grow shrink-0 basis-0 self-stretch rounded-md object-cover shadow-md"
                      src="https://res.cloudinary.com/subframe/image/upload/v1756073353/uploads/20526/e575dfpaf6nkincrzwda.png"
                    />
                    <img
                      className="max-h-[240px] grow shrink-0 basis-0 self-stretch rounded-md object-cover shadow-md"
                      src="https://res.cloudinary.com/subframe/image/upload/v1756073553/uploads/20526/riia8goyxsimkzfdhm9s.png"
                    />
                    <img
                      className="max-h-[240px] grow shrink-0 basis-0 self-stretch rounded-md object-cover shadow-md"
                      src="https://res.cloudinary.com/subframe/image/upload/v1756074221/uploads/20526/ocwkdp5yvaroravuh6ij.png"
                    />
                  </div>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color">
                    {
                      "This approach enabled faster reuse of components and seamless collaboration with developers."
                    }
                  </span>
                  <img
                    className="max-h-[576px] flex-none rounded-md"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756052907/uploads/20526/hy6ziqorm3q0ygeclfru.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          createdWithText="Proudly created and coded using:"
          tools={
            <>
              <img
                className="w-4 flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
              />
              <span className="text-body font-body text-default-font">
                Subframe
              </span>
              <span className="text-body font-body text-default-font">+</span>
              <img
                className="w-4 flex-none"
                src="https://res.cloudinary.com/subframe/image/upload/v1755897676/uploads/20526/abte5rdrqheg9h0jl0ff.svg"
              />
              <span className="text-body font-body text-default-font">
                Cursor
              </span>
            </>
          }
          socialText="Find me on"
          socialLinks={
            <>
              <FeatherLinkedin className="text-body font-body text-default-font" />
              <span className="text-body font-body text-default-font">
                LinkedIn
              </span>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <FeatherInstagram className="text-body font-body text-default-font" />
              <span className="text-body font-body text-default-font">
                Instagram
              </span>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <FeatherSend className="text-body font-body text-default-font" />
              <span className="text-body font-body text-default-font">
                Send me an Email
              </span>
            </>
          }
          copyright="© 2525 Pablo Parma"
        />
      </div>
    </DefaultPageLayout>
  );
}

export default Case_Study_Yappa;