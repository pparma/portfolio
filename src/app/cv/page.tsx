"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
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
import CopyEmail from "@/src/components/CopyEmail";


/* Folder shape path — same as homepage cards (filefoldershape.svg).
   Used with preserveAspectRatio="none" so it stretches to any card size. */
const FOLDER_PATH =
  "M0 24C0 10.7452 10.7452 0 24 0H184.615C190.947 0 197.022 2.50218 201.518 6.96142L242.965 48.0771C251.955 56.9956 264.106 62 276.769 62H490C503.255 62 514 72.7452 514 86V490C514 503.255 503.255 514 490 514H24C10.7452 514 0 503.255 0 490V24Z";

function FolderCard({
  children,
  className = "",
  innerClassName = "gap-2",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Folder shape — absolutely fills the card at any width/height */}
      <svg
        viewBox="0 0 514 514"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ position: "absolute", top: 0, left: 0, display: "block" }}
      >
        <path d={FOLDER_PATH} fill="rgb(228, 222, 215)" />
      </svg>
      {/* Content sits above the SVG */}
      <div
        className={`relative flex w-full flex-col items-start px-6 py-6 ${innerClassName}`}
        style={{ zIndex: 1 }}
      >
        {children}
      </div>
    </div>
  );
}

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
              <a href="/pablo-parma-resume.pdf" download>
                <Button variant="brand-primary" className="w-full">
                  Download CV
                </Button>
              </a>
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

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Concord — Client: Sallybeauty.com</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Mar 2025 – Present</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">Senior Product Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Designed the current Sally Beauty app experience and CosmoProf app experience end-to-end.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Contributed to the design system and provided guidance for implementation across teams.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Defined user flows and delivered pixel-perfect layouts for development handoff.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Currently building AI-powered prototypes for user testing and research validation.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Nimble.la</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Jan 2023 – Jan 2025</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">Senior Product Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Led design for DocSnap.ai, an AI-powered tool for contract insights, improving onboarding and usability.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Redesigned BridgeHaul&apos;s mobile app, streamlining logistics workflows and increasing user engagement by 30%.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Created a scalable Figma design system aligned with React, Tailwind, and Shadcn for consistency across teams.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Google C+E Studio via Blink</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Oct 2021 – Dec 2022</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">Senior Product Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Designed interactive AI-based tools and assets like Smart Stickers, used by millions of content creators.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Worked closely with AI engineers and product managers to bridge aesthetics with technical capabilities.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Yappa World Inc.</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Apr 2020 – Aug 2021</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">Lead UI/UX Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Conducted UX workshops, created personas and journey maps, improving feature direction and cross-team alignment.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Built a design system for interactive audio/video widgets, used across thousands of communities.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Fulcrum / Redstage</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Jun 2019 – Apr 2020</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">Product Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Defined design processes across healthcare, banking, and food services.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Designed UX for &quot;Culinary Suite,&quot; enhancing efficiency and user satisfaction.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Integrated Lean UX into Agile teams, reducing design-to-dev cycle time.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">OZ Digital Consulting</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Nov 2018 – May 2019</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">UI/UX Designer – XR</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Led design for mixed reality (Magic Leap, Oculus), creating intuitive XR interfaces.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Conducted deep research into immersive UX, aligning design with tech feasibility.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">BairesDev</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Jun 2017 – Nov 2018</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">UI/UX Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Created intuitive dashboards and complex data visualizations to improve decision-making.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Ensured design consistency and usability across enterprise-level digital platforms.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Collaborated with product managers and engineers to align business goals with user needs.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Wrap Media</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Jul 2016 – May 2017</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">UI/UX Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Created brand-compliant campaigns and high-fidelity prototypes for marketing teams.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Delivered designs under tight deadlines, improving conversion and engagement.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Collaborated with product managers and engineers to align business goals with user needs.</span>
                      </div>
                    </div>
                  </FolderCard>

                  <FolderCard>
                    <div className="flex w-full items-start justify-between">
                      <span className="text-monospace-body font-monospace-body text-subtext-color">G2K Argentina S.A.</span>
                      <span className="text-monospace-body font-monospace-body text-subtext-color">Mar 2013 – Mar 2016</span>
                    </div>
                    <span className="text-body-bold font-body-bold text-default-font">UI/UX Designer</span>
                    <div className="flex w-full flex-col items-start">
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Managed branding, UI/UX, web design, and marketing assets for large-scale projects.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Led a design and dev team, improving conversions by 25% through SEO and responsive design.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Created visual systems, custom photography, and iconography to unify product identity.</span>
                      </div>
                    </div>
                  </FolderCard>

                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  EDUCATION
                </span>
                <div className="flex w-full flex-wrap items-start gap-4">
                  <FolderCard className="min-w-[224px] grow shrink-0 basis-0" innerClassName="gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">Visual Communication</span>
                    <span className="text-body font-body text-brand-primary">UNR - Universidad de Rosario</span>
                    <span className="text-caption font-caption text-subtext-color">2010 – unfinished</span>
                  </FolderCard>
                  <FolderCard className="min-w-[224px] grow shrink-0 basis-0" innerClassName="gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">Postgraduate in Visual Communication</span>
                    <span className="text-body font-body text-brand-primary">Facultad de Planeamiento y Diseño</span>
                    <span className="text-caption font-caption text-subtext-color">2005 – 2007</span>
                  </FolderCard>
                  <FolderCard className="min-w-[224px] grow shrink-0 basis-0" innerClassName="gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">Degree in Graphic Design</span>
                    <span className="text-body font-body text-brand-primary">Escuela de Bellas Artes</span>
                    <span className="text-caption font-caption text-subtext-color">2002 – 2004</span>
                  </FolderCard>
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
          copyright="© 2024 Pablo Parma"
        />
      </div>
    </DefaultPageLayout>
  );
}

export default Cv;