"use client";

import React from "react";
import { Badge } from "@/ui/components/Badge";
import { Button } from "@/ui/components/Button";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";
import { SiteFooter } from "@/src/components/SiteFooter";
import { CTAButton } from "@/src/components/CTAButton";


/* Folder tab path — 8px top-left radius + diagonal ramp. Sits above the card body. */
const DIAGONAL_TAB_PATH =
  "M0 8C0 3.58172 3.58172 0 8 0H254.115C260.447 0 266.522 2.50217 271.018 6.96142L312.465 48.0771C321.455 56.9956 333.606 62 346.269 62H352.5H0V8Z";

const CARD_COLOR = "rgb(255, 255, 255)";

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
    <div className={`w-full ${className}`} style={{ isolation: "isolate" }}>
      {/* Diagonal tab — fixed-size, top-left, same color as card body */}
      <svg
        viewBox="0 0 353 62"
        width="103"
        height="18"
        aria-hidden="true"
        style={{ display: "block", flexShrink: 0 }}
      >
        <path d={DIAGONAL_TAB_PATH} fill={CARD_COLOR} />
      </svg>
      {/* Card body — rectangle, top-left corner flat to meet the tab */}
      <div
        className={`flex w-full flex-col items-start px-6 py-6 ${innerClassName}`}
        style={{
          backgroundColor: CARD_COLOR,
          borderRadius: "0 8px 8px 8px",
          marginTop: "-1px",
          overflow: "hidden",
        }}
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
                  <Link href="/ai">
                    <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
                    AI Experiments
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
        <div className="container max-w-none flex w-full flex-col items-center gap-16 bg-default-background pb-12 pt-[86px] px-6">
          <div className="max-w-7xl w-full flex items-start gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
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
                  Senior Product Designer · Design Systems & AI
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
              <a href="/Pablo_Parma-Product_Designer.pdf" download="Pablo-Parma-Resume.pdf">
                <CTAButton variant="primary" className="w-full">
                  Download CV
                </CTAButton>
              </a>
            </div>
            <div className="flex max-w-[1024px] grow shrink-0 basis-0 flex-col items-start gap-12">
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  PROFESSIONAL SUMMARY
                </span>
                <span className="whitespace-pre-wrap text-body font-body text-default-font">
                  {
                    "Senior Product Designer with 10+ years of experience specializing in design systems architecture and AI-powered product experiences across mobile and web. I build scalable component libraries in Figma aligned with React, Tailwind, and Shadcn — bridging design and engineering with precision. Currently working at the intersection of AI and UX, using tools like Claude and Gemini to prototype, research, and ship faster. Experienced in Agile squads alongside engineers, PMs, and business stakeholders, delivering measurable results through clean, systems-driven design."
                  }
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-caption font-caption text-subtext-color">
                  SKILLS
                </span>
                <div className="flex w-full flex-wrap items-start gap-2">
                  <Badge>Design Systems</Badge>
                  <Badge>Figma</Badge>
                  <Badge>React</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Shadcn</Badge>
                  <Badge>HTML / CSS</Badge>
                  <Badge>AI UX Patterns</Badge>
                  <Badge>Claude</Badge>
                  <Badge>Gemini</Badge>
                  <Badge>Cursor</Badge>
                  <Badge>User Research</Badge>
                  <Badge>Prototyping</Badge>
                  <Badge>Wireframing</Badge>
                  <Badge>Agile / Lean UX</Badge>
                  <Badge>XR / AR</Badge>
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
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Designed end-to-end experience for Sally Beauty and CosmoProf apps, serving millions of active users across iOS and Android.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Architected and contributed 100+ components to the design system, enabling consistent implementation across engineering teams.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Defined user flows and pixel-perfect layouts for key product areas; building AI-powered prototypes to accelerate user testing.</span>
                      </div>
                      <div className="flex w-full items-start gap-3 pr-4 py-2">
                        <IconWithBackground className="h-5 w-4 flex-none" variant="success" />
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Using Claude and Gemini to prototype AI-driven UX flows, reducing research validation cycles significantly.</span>
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
                        <span className="grow shrink-0 basis-0 text-body font-body text-default-font">Architected a scalable Figma design system aligned with React, Tailwind, and Shadcn — adopted by 2 engineering teams for cross-product consistency.</span>
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
        <SiteFooter />
      </div>
    </DefaultPageLayout>
  );
}

export default Cv;