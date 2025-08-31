"use client";

import React from "react";
import { Button } from "@/ui/components/Button";
import { CaseStudyCard } from "@/ui/components/CaseStudyCard";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";
import HeroCanvas from "../components/HeroCanvas";


function Index() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-center">
              <NavigationHeader
              title="Pablo Parma"
              navigation={
                <>
                  <Link href="/works">
                    <LinkButton onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
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
        <div className="container max-w-none flex w-full flex-col items-start gap-16 bg-default-background py-12">
          <div className="flex w-full items-center gap-12 mobile:flex-col mobile:flex-nowrap mobile:gap-12">
            <div className="flex max-w-[576px] grow shrink-0 basis-0 flex-col items-start gap-8 mobile:order-last">
              <div className="flex w-full flex-col items-start gap-4">
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  Product Designer crafting clear, calm interfaces.
                </span>
                <span className="text-headling-4 font-headling-4 text-subtext-color">
                  Senior UI/UX designer focused on systems, product thinking,
                  and delightful details. Currently open to remote
                  opportunities.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <Link href="/works"> 
                <Button
                  iconRight={<FeatherArrowRight />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Browse Work
                </Button> 
                </Link>
                <LinkButton
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Get in touch
                </LinkButton>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2 px-2 py-2 mobile:h-112 mobile:w-full mobile:flex-none">
              <HeroCanvas />
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-8">
            <span className="text-headling-4 font-headling-4 text-default-font">
              Selected Work
            </span>
            <div className="w-full items-start gap-6 grid grid-cols-3 mobile:flex-col mobile:flex-nowrap mobile:gap-6 mobile:grid mobile:grid-cols-1">
              <Link href="/case-study-bh">
                <CaseStudyCard
                  image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                  title="Simplifying Operations for BridgeHaul"
                  subtitle={
                    "Revolutionizing Freight with a Redesigned\nMobile App"
                  }
                  preview={
                    <img
                      className="flex-none transition-transform duration-300 hover:scale-110"
                      src="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                    />
                  }
                />
              </Link>
              <Link href="/case-study-yappa">
                <CaseStudyCard
                image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                title="Humanizing Online Rating Discussions through Voice & Video UX"
                subtitle="Created UX flows and a modular design system that enabled publishers to embed social interaction directly on their platforms."
                preview={
                  <img
                    className="flex-none transition-transform duration-300 hover:scale-110"
                    src="https://res.cloudinary.com/subframe/image/upload/v1756048947/uploads/20526/yizdabjt8n9aute45cop.png"
                  />
                }
                />
              </Link>
              <Link href="/case-study-docsnap">
                <CaseStudyCard
                  image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                  title="AI driven platform for legal management"
                  subtitle="Delivered a streamlined and user-friendly Al driven platform for document management."
                  preview={
                    <img
                      className="flex-none transition-transform duration-300 hover:scale-110"
                      src="https://res.cloudinary.com/subframe/image/upload/v1755616223/uploads/20526/s4zctt7znm22wkvnu0oe.png"
                    />
                  }
                />
              </Link>
              


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

export default Index;