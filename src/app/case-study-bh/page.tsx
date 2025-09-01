"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";
import CopyEmail from "@/src/components/CopyEmail";


function Case_Study_Bh() {
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
            <div className="flex max-w-[176px] grow shrink-0 basis-0 flex-col items-start pt-11 mobile:hidden">
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
                  Delivered cutting-edge UI/UX design and a solid mobile
                  architecture in just four months.
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
                    Nimble.la
                  </span>
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Timeline
                  </span>
                  <span className="text-body font-body text-default-font">
                    4 months | 2024
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
                    <div className="flex h-4 w-4 flex-none items-center justify-center gap-2">
                      <img
                        className="flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1755716058/uploads/20526/dag2nux3syeuytwnl04d.svg"
                      />
                    </div>
                    <span className="text-body font-body text-default-font">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="flex items-center gap-2 py-0.5">
                    <div className="flex h-4 w-4 flex-none items-center justify-center gap-2">
                      <img
                        className="flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1755716059/uploads/20526/hyaa0s9a3muk2ytmjcio.svg"
                      />
                    </div>
                    <span className="text-body font-body text-default-font">
                      React
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"Bridging the Gap with Modern LogisticsTechnology"}
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    BridgeHaul facilitates load booking, fuel management, and
                    invoicing. Their app needed a refreshed, user-friendly
                    mobile experience to streamline freight operations. 
                  </span>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <img
                    className="grow shrink-0 basis-0 rounded-md object-cover aspect-video"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755562055/uploads/20526/lyoychwpwl3h0bynaxii.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-6">
                <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4">
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"Bridging the Gap with Modern LogisticsTechnology"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "In a competitive logistics industry where efficiency and user experience are paramount. \nTheir outdated app hindered usability and lacked alignment with new brand standards. To stay ahead, BridgeHaul required a complete redesign with intuitive interfaces and robust mobile architecture.\nA solution that combined cutting-edge design with a focus on user-centric functionality was provided."
                    }
                  </span>
                </div>
                <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-4 overflow-hidden rounded-md bg-neutral-50 px-4 py-4 mobile:flex-row mobile:flex-wrap mobile:items-start mobile:justify-center mobile:gap-6">
                  <img
                    className="max-h-[224px] grow shrink-0 basis-0 self-stretch rounded-md object-contain mobile:h-auto mobile:max-h-[384px] mobile:w-auto mobile:flex-none mobile:self-stretch"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755987107/uploads/20526/bazyzr8ssybcxr1ytmi0.png"
                  />
                  <img
                    className="max-h-[224px] grow shrink-0 basis-0 self-stretch rounded-md object-contain mobile:h-auto mobile:max-h-[384px] mobile:w-auto mobile:flex-none mobile:self-stretch"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755987106/uploads/20526/almsjyhkaj3zghilpry6.png"
                  />
                  <img
                    className="max-h-[224px] grow shrink-0 basis-0 self-stretch rounded-md object-contain mobile:hidden mobile:h-auto mobile:max-h-[384px] mobile:w-auto mobile:flex-none mobile:self-stretch"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755987107/uploads/20526/an7zn40nhse5o9put9id.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Workflows
                  </span>
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"Simplified freight operations with solution workflows"}
                  </span>
                </div>
                <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color">
                    {
                      "All the app features were meticulously mapped to gain a deep understanding of the client's objectives and their users' needs."
                    }
                  </span>
                  <img
                    className="grow shrink-0 basis-0 rounded-md object-cover aspect-video"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755986171/uploads/20526/lkedbmfeb1wk2dhgth5x.svg"
                  />
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center gap-6">
                <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-4">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Design System
                  </span>
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {
                      "I built the design system starting from the provided brand colors, expanding them into a full range of shades and tones to cover different UI states."
                    }
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      " Using Figma variables, I created reusable tokens for color, typography, and spacing, ensuring consistency and scalability. "
                    }
                  </span>
                </div>
                <div className="flex min-w-[288px] grow shrink-0 basis-0 flex-wrap items-center justify-center gap-6 self-stretch rounded-md bg-neutral-50 px-6 py-6 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
                  <img
                    className="max-h-[384px] flex-none self-stretch rounded-md object-cover mobile:h-auto mobile:max-h-[384px] mobile:w-auto mobile:flex-none"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755990413/uploads/20526/qvbs84oztobx8bapemar.svg"
                  />
                  <img
                    className="max-h-[384px] flex-none self-stretch rounded-md object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755990396/uploads/20526/ytdhndpx1qsakye0awub.svg"
                  />
                </div>
              </div>
              <span className="whitespace-pre-wrap text-heading-3 font-heading-3 text-default-font">
                {
                  "Established a robust design system, enabling faster reuse of components for subsequent screens."
                }
              </span>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color">
                    {
                      "The system was structured to support both light and dark modes, making it adaptable and easy to integrate. "
                    }
                  </span>
                  <img
                    className="w-full grow shrink-0 basis-0 rounded-md object-contain"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755990794/uploads/20526/hqxtlkavph7j2kggedcz.svg"
                  />
                </div>
                <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <span className="w-full whitespace-pre-wrap text-caption font-caption text-subtext-color">
                    {
                      "This approach enabled faster reuse of components and seamless collaboration with developers."
                    }
                  </span>
                  <img
                    className="grow shrink-0 basis-0 rounded-md object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755991669/uploads/20526/b6r4ou61gpseghkfp2q5.png"
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
               <Link href="https://www.linkedin.com/in/pabloparma/" target="_blank" rel="noopener noreferrer">
               <span className="text-body font-body text-default-font">
                LinkedIn
                </span>
                </Link>
              
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <FeatherInstagram className="text-body font-body text-default-font" />
              <Link href="https://www.instagram.com/pabloparma/" target="_blank" rel="noopener noreferrer">
              <span className="text-body font-body text-default-font">
                Instagram
              </span>
              </Link>
              <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
              <FeatherSend className="text-body font-body text-default-font" />
              
              <CopyEmail />
              
            </>
          }
          copyright="© 2525 Pablo Parma"
        />
      </div>
    </DefaultPageLayout>
  );
}

export default Case_Study_Bh;