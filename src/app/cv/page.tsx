"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Footer } from "@/ui/components/Footer";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";

function Cv() {
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
                    <LinkButton variant="active" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
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
        <div className="container max-w-none flex w-full flex-col items-center gap-16 bg-default-background py-12">
          <div className="flex w-full items-start justify-center gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
            <div className="flex min-w-[256px] flex-col items-start gap-4">
              <div className="flex w-52 flex-col items-center justify-center overflow-hidden rounded-full">
                <img
                  className="w-full grow shrink-0 basis-0 object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1755642969/uploads/20526/jz4ofxdqsmf4qyxobfw2.jpg"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-2">
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Pablo Parma
                </span>
                <span className="text-caption-bold font-caption-bold text-subtext-color">
                  Product Designer | UI/UX Specialist
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconWithBackground
                  variant="neutral"
                  icon={<FeatherMapPin />}
                />
                <span className="text-caption font-caption text-default-font">
                  Rosario, Santa Fe, Argentina
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  LANGUAGES
                </span>
                <div className="flex w-full flex-col items-start gap-2 mobile:flex-row mobile:flex-nowrap mobile:gap-2">
                  <Badge variant="neutral">Spanish (Native)</Badge>
                  <Badge variant="neutral">English (Advanced)</Badge>
                </div>
              </div>
            </div>
            <div className="flex max-w-[1024px] grow shrink-0 basis-0 flex-col items-start gap-12">
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  PROFESSIONAL SUMMARY
                </span>
                <span className="whitespace-pre-wrap text-body font-body text-default-font">
                  {
                    "Product Designer with over 10 years of experience delivering user-centered digital experiences across mobile, web, and AI-powered platforms. Skilled in research, UX strategy, and design systems built with React, Tailwind, and Shadcn. Experienced working in Agile squads with developers, product managers, and business teams. Passionate about solving complex problems through clean, scalable, and thoughtful design that drives user\nengagement and business results."
                  }
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  SKILLS
                </span>
                <div className="flex w-full flex-wrap items-start gap-2">
                  <Badge>Figma</Badge>
                  <Badge>Adobe CC</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>HTML/CSS</Badge>
                  <Badge>Design Systems</Badge>
                  <Badge>User Research</Badge>
                  <Badge>Prototyping</Badge>
                  <Badge>Agile</Badge>
                  <Badge>AI UX Patterns</Badge>
                  <Badge>Subframe</Badge>
                  <Badge>Cursor</Badge>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  EXPERIENCE
                </span>
                <div className="flex w-full flex-col items-start gap-6">
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Nimble.la
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Jan 2023 – Jan 2025
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      Senior Product Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Led design for DocSnap.ai, an AI-powered tool for contract insights, improving onboarding and usability."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Redesigned BridgeHaul’s mobile app, streamlining
                          logistics workflows and increasing user engagement by
                          30%.
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Created a scalable Figma design system aligned with
                          React, Tailwind, and Shadcnfor consistency across
                          teams.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Google C+E Studio via Blink
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Oct 2021 – Dec 2022
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      Senior Product Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Designed interactive AI-based tools and assets like Smart Stickers, used by millions of content creators."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Worked closely with AI engineers and product managers
                          to bridge aesthetics with technical capabilities.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Yappa World Inc.
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Apr 2020 – Aug 2021
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      Lead UI/UX Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Conducted UX workshops, created personas and journey maps, improving feature direction and cross-team alignment."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Built a design system for interactive audio/video
                          widgets, used across thousands of communities.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Fulcrum / Redstage
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Jun 2019 – Apr 2020
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      Product Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Defined design processes across healthcare, banking, and food services."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Designed UX for &quot;Culinary Suite,&quot; enhancing
                          efficiency and user satisfaction.
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Integrated Lean UX into Agile teams, reducing
                          design-to-dev cycle time.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        OZ Digital Consulting
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Nov 2018 – May 2019
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      UI/UX Designer – XR
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Led design for mixed reality (Magic Leap, Oculus), creating intuitive XR interfaces."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Conducted deep research into immersive UX, aligning
                          design with tech feasibility.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        BairesDev
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Jun 2017 – Nov 2018
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      UI/UX Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Created intuitive dashboards and complex data visualizations to improve decision-making."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Ensured design consistency and usability across
                          enterprise-level digital platforms.
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Collaborated with product managers and engineers to
                          align business goals with user needs.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Wrap Media
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Jul 2016 – May 2017
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      UI/UX Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Created brand-compliant campaigns and high-fidelity prototypes for marketing teams."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Delivered designs under tight deadlines, improving
                          conversion and engagement.
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Collaborated with product managers and engineers to
                          align business goals with user needs.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-6 py-6">
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        G2K Argentina S.A.
                      </span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">
                        Mar 2013 – Mar 2016
                      </span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">
                      UI/UX Designer
                    </span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 whitespace-pre-wrap text-body font-body text-default-font">
                          {
                            "Managed branding, UI/UX, web design, and marketing assets for large-scale projects."
                          }
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Led a design and dev team, improving conversions by
                          25% through SEO and responsive design.
                        </span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground
                          className="h-5 w-4 flex-none"
                          variant="success"
                        />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                          Created visual systems, custom photography, and
                          iconography to unify product identity.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  EDUCATION
                </span>
                <div className="flex w-full flex-wrap items-start gap-4">
                  <div className="flex min-w-[224px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md bg-neutral-50 px-6 py-6">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Visual Communication
                    </span>
                    <span className="text-body font-body text-brand-primary">
                      UNR - Universidad de Rosario
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2010 – unfinished
                    </span>
                  </div>
                  <div className="flex min-w-[224px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md bg-neutral-50 px-6 py-6">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Postgraduate in Visual Communication
                    </span>
                    <span className="text-body font-body text-brand-primary">
                      Facultad de Planeamiento y Diseño
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2005 – 2007
                    </span>
                  </div>
                  <div className="flex min-w-[224px] grow shrink-0 basis-0 flex-col items-start gap-1 rounded-md bg-neutral-50 px-6 py-6">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Degree in  Graphic Design
                    </span>
                    <span className="text-body font-body text-brand-primary">
                      Escuela de Bellas Artes
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      2002 – 2004
                    </span>
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
          copyright="© 2024 Pablo Parma"
        />
      </div>
    </DefaultPageLayout>
  );
}

export default Cv;