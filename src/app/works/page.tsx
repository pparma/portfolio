"use client";

import React from "react";
import { CaseStudyCard } from "@/ui/components/CaseStudyCard";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";

function Works() {
  return (
    <DefaultPageLayout>
      <div className="flex h-full w-full flex-col items-center">
        <NavigationHeader
          title="Pablo Parma"
          navigation={
              <>
                  <Link href="/works">
                    <LinkButton variant="active" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
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
        <div className="container max-w-none flex w-full flex-col items-start gap-12 bg-default-background py-12">
          <div className="flex w-full flex-col items-start gap-4">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Product Design Highlights
            </span>
            <span className="max-w-[576px] whitespace-pre-wrap text-body-big font-body-big text-subtext-color">
              {
                "From digital products to design systems—projects that blend creativity, strategy, and execution."
              }
            </span>
          </div>
          <div className="w-full items-start gap-12 px-2 py-2 grid grid-cols-2 mobile:flex-col mobile:flex-nowrap mobile:gap-12 mobile:grid mobile:grid-cols-1">
            {/* go to case_study_ */}
            <Link href="/case_study_bh">
              <CaseStudyCard
                image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                title="Simplifying Operations for BridgeHaul"
                subtitle="Delivered cutting-edge UI/UX design and a solid mobile architecture in just three months."
                preview={
                  <img
                    className="flex-none transition-transform duration-300 hover:scale-110"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755562055/uploads/20526/lyoychwpwl3h0bynaxii.png"
                  />
                }
              />
            </Link>
            
            {/* this card should lead to case_study_docsnap */}
            <Link href="/case_study_docsnap">
              <CaseStudyCard
                image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
                title="Clarity and control over legal obligations powered by Al."
                subtitle="Delivered a streamlined and \nuser-friendly AI  driven platform."
                preview={
                  <img
                    className="flex-none transition-transform duration-300 hover:scale-110"
                    src="https://res.cloudinary.com/subframe/image/upload/v1755906077/uploads/20526/oyzg1w7wuhxvqy8nr0nm.jpg"
                  />
                }
              />
            </Link>
            
            {/* go to case_study_yappa */}
            <Link href="/case_study_yappa">
              <CaseStudyCard
              image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
              title="Rating Discussions through Voice & Video UX"
              subtitle="Created UX flows and a modular design system that enabled publishers to embed social interaction directly on their platforms."
              preview={
                <img
                  className="flex-none transition-transform duration-300 hover:scale-110"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756048947/uploads/20526/yizdabjt8n9aute45cop.png"
                />
              }
            />
            </Link>
            {/* this card should lead to case_study_crypto */}
            <Link href="/case_study_crypto">
              <CaseStudyCard
              image="https://res.cloudinary.com/subframe/image/upload/v1755615333/uploads/20526/pumv86xcpadow3apfydy.png"
              title="Bitcoin Exchange and Cryptocurrency Exchange"
              subtitle="A modern and intuitive interface where they can track their portfolios, and gains to make decisions easier."
              preview={
                <img
                  className="flex-none transition-transform duration-300 hover:scale-110"
                  src="https://res.cloudinary.com/subframe/image/upload/v1755639280/uploads/20526/bvn3sp4q9s3muk0bzhy3.jpg"
                />
              }
            />  
            </Link>

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

export default Works;