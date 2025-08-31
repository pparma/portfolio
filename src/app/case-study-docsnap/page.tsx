"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { CheckboxCard } from "@/ui/components/CheckboxCard";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherAlertTriangle } from "@subframe/core";
import { FeatherArrowLeft } from "@subframe/core";
import { FeatherCalendarDays } from "@subframe/core";
import { FeatherCircleDollarSign } from "@subframe/core";
import { FeatherFileCheck } from "@subframe/core";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherRocket } from "@subframe/core";
import { FeatherScale } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import { FeatherShieldCheck } from "@subframe/core";
import { FeatherUser } from "@subframe/core";
import { FeatherUsers } from "@subframe/core";
import Link from "next/link";

function Case_Study_Docsnap() {
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
                  Research
                </LinkButton>
                <LinkButton
                  className="h-auto w-full flex-none"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  AI extraction flow
                </LinkButton>
                <LinkButton
                  className="h-auto w-full flex-none"
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Design system
                </LinkButton>
              </div>
            </div>
            <div className="flex max-w-[1280px] grow shrink-0 basis-0 flex-col items-start gap-16 pt-12">
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-monospace-body font-monospace-body text-subtext-color">
                  Summary
                </span>
                <span className="whitespace-pre-wrap text-heading-1 font-heading-1 text-default-font">
                  {
                    "Clarity and control over legal obligations \npowered by Al."
                  }
                </span>
              </div>
              <div className="flex w-full flex-wrap items-start gap-4 mobile:flex-col mobile:flex-wrap mobile:gap-4">
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
                    {
                      "Delivered a streamlined and \nuser-friendly AI  driven platform."
                    }
                  </span>
                  <span className="whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "Working closely with a team of Al experts and developers, I focused on translating complex Al capabilities into user-friendly solutions. \nAs the Product Designer, I played a key role in the ideation and definition phases of this project. "
                    }
                  </span>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-center gap-6 rounded-md bg-neutral-50 px-6 py-6 mobile:flex">
                  <img
                    className="max-w-[576px] grow shrink-0 basis-0 rounded-md object-cover shadow-lg mobile:w-full mobile:max-w-[576px] mobile:grow mobile:shrink-0 mobile:basis-0"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755982505/uploads/20526/zaojoe20ehq6xvswfeuh.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full items-center gap-12 mobile:flex mobile:flex-col mobile:flex-nowrap mobile:gap-12">
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch">
                    <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-center gap-2">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Research
                      </span>
                      <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                        {"Tailored for\nDiverse Professionals"}
                      </span>
                      <span className="text-caption-bold font-caption-bold text-subtext-color">
                        After a research process, Identified potential users.
                        Generally in Higher education administration, small
                        business owners, or managing legal responsibilities,
                      </span>
                      <div className="flex flex-wrap items-start gap-2">
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherUser className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Who are they?
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherRocket className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            What are their goals?
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherAlertTriangle className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Do we know their pain points and frustrations?
                          </span>
                        </CheckboxCard>
                      </div>
                    </div>
                    <div className="flex w-full flex-col items-center gap-16 rounded-md bg-neutral-50 px-6 py-6">
                      <img
                        className="flex-none"
                        src="https://res.cloudinary.com/subframe/image/upload/v1755978627/uploads/20526/q5c1nqlka0tj6vvsv1il.png"
                      />
                    </div>
                  </div>
                  <div className="flex grow shrink-0 basis-0 items-start gap-6 self-stretch rounded-md">
                    <img
                      className="grow shrink-0 basis-0 self-stretch rounded-lg object-contain"
                      src="https://res.cloudinary.com/subframe/image/upload/v1755978568/uploads/20526/lzolru7auapehcjap7mi.png"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <span className="whitespace-pre-wrap text-heading-3 font-heading-3 text-default-font">
                    {
                      "Laying the UX Foundation for DocSnap’s First Usability Tests"
                    }
                  </span>
                  <div className="flex w-full flex-col items-center gap-16 rounded-md bg-neutral-50 px-12 py-12">
                    <div className="flex w-full flex-col items-center gap-6">
                      <span className="text-heading-3 font-heading-3 text-default-font text-center">
                        Key Information extractions for MVP
                      </span>
                      <span className="w-full max-w-[768px] whitespace-pre-wrap text-caption font-caption text-subtext-color">
                        {
                          'For the first round of testing both, the engine and its results a small set of "Key Information value pairs" was settled as a base of information for the objetive user personas and also testing the ai extraction capabilities.'
                        }
                      </span>
                      <div className="flex w-full flex-wrap items-center justify-center gap-4">
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherFileCheck className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Identify Document Types
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherScale className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Agreement Type &amp; Terms
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherCircleDollarSign className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Billing Terms
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherUsers className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Disclosing Parties
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherCalendarDays className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Effective dates &amp; reminders
                          </span>
                        </CheckboxCard>
                        <CheckboxCard
                          hideCheckbox={true}
                          checked={false}
                          onCheckedChange={(checked: boolean) => {}}
                        >
                          <FeatherShieldCheck className="text-body-bold font-body-bold text-default-font" />
                          <span className="grow shrink-0 basis-0 text-monospace-body font-monospace-body text-default-font">
                            Indemnity Clauses
                          </span>
                        </CheckboxCard>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    AI extraction flow
                  </span>
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {
                      "Translating Complex AI Extraction into User-Centered Insights"
                    }
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Worked with ingenieers  stablishing the foundation for the
                    core engine, ensuring that the final product would be both
                    powerful and accessible to real users. 
                  </span>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <img
                    className="w-full grow shrink-0 basis-0 rounded-md object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755980445/uploads/20526/kntcweof5iua1zzegtvh.svg"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-6">
                <div className="flex w-full flex-col items-start gap-2">
                  <span className="text-monospace-body font-monospace-body text-subtext-color">
                    Design System
                  </span>
                  <span className="whitespace-pre-wrap text-heading-2 font-heading-2 text-default-font">
                    {"Scalable Design System with Tailwind & Shadcn"}
                  </span>
                  <span className="w-full whitespace-pre-wrap text-body font-body text-subtext-color">
                    {
                      "I created a robust design system leveraging Figma, Tailwind, and Shadcn, with reusable components and variables. \nThis streamlined development handoff and accelerated the design of new screens, resulting in a sleek, intuitive interface that boosted user engagement and operational efficiency."
                    }
                  </span>
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-center justify-center gap-6 rounded-md bg-neutral-50 px-6 py-6">
                  <img
                    className="w-full max-w-[768px] grow shrink-0 basis-0 rounded-md object-cover shadow-lg"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755982849/uploads/20526/oxmawshc9s5xxc3jav5f.png"
                  />
                </div>
                <div className="flex w-full items-start gap-6 mobile:flex-col mobile:flex-nowrap mobile:gap-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-brand-500 aspect-video">
                      <img
                        className="flex-none transition-transform duration-300 hover:scale-110"
                        src="https://res.cloudinary.com/subframe/image/upload/v1755983304/uploads/20526/gqk3mumqf4hiikhoseoj.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex w-full items-center justify-center overflow-hidden rounded-lg bg-brand-500 aspect-video">
                      <img
                        className="flex-none transition-transform duration-300 hover:scale-110"
                        src="https://res.cloudinary.com/subframe/image/upload/v1755983319/uploads/20526/tkvehrevlmf4gurcsigi.png"
                      />
                    </div>
                  </div>
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

export default Case_Study_Docsnap;