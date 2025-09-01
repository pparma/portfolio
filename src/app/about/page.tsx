"use client";

import React from "react";
import { Footer } from "@/ui/components/Footer";
import { LinkButton } from "@/ui/components/LinkButton";
import { NavigationHeader } from "@/ui/components/NavigationHeader";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { FeatherInstagram } from "@subframe/core";
import { FeatherLinkedin } from "@subframe/core";
import { FeatherSend } from "@subframe/core";
import Link from "next/link";
import FadeInSection from "@/src/components/FadeInSection";
import CopyEmail from "@/src/components/CopyEmail";

function About() {
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
                    <LinkButton variant="active" onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
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
          <div className="flex w-full items-end justify-between px-6 mobile:flex-col mobile:flex-nowrap mobile:gap-12 mobile:pl-0 mobile:pr-2 mobile:py-0">
            <div className="flex max-w-[768px] grow shrink-0 basis-0 flex-col items-start gap-8 pr-6 mobile:order-last">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  Pablo Parma
                </span>
                <span className="whitespace-pre-wrap text-caption font-caption text-subtext-color">
                  {
                    "I’m a Product Designer with 10+ years of experience creating user-centered digital experiences, proudly based in Argentina. "
                  }
                </span>
                <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-default-font">
                  {
                    "Beyond design, I’m deeply passionate about photography — especially capturing the landscapes and wildlife of my country. \nPatagonia is my constant source of inspiration, and I often dream of one day calling it home."
                  }
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2 rounded-md bg-neutral-50 px-4 py-4">
            <img
              className="w-full grow shrink-0 basis-0 rounded-md object-cover aspect-[16/7]"
              src="https://res.cloudinary.com/subframe/image/upload/v1756172560/uploads/20526/b3gp8ugog2wackvbix8e.jpg"
            />
          </div>
          <div className="flex w-full items-start justify-center gap-6 px-2 py-2">
            <div className="flex grow shrink-0 basis-0 items-center justify-center gap-2 mobile:hidden">
              <div className="flex max-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-2">
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756173928/uploads/20526/yypeb07pkssolmvs6bgg.jpg"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756173894/uploads/20526/rruqnipgugz43bytqrd5.jpg"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756234158/uploads/20526/aqshgjyzcqrisgcblewg.jpg"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178937/uploads/20526/iahgnwizz6h7o1ikfpjq.jpg"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756233719/uploads/20526/bjmhblysoiu8mhvtodtl.jpg"
                />
              </div>
              <div className="flex max-w-[288px] grow shrink-0 basis-0 flex-col items-start gap-2 pt-12">
                <img
                  className="w-full flex-none rounded-md"
  src="https://res.cloudinary.com/subframe/image/upload/v1756180179/uploads/20526/smxmph45zagrbetdlh5d.jpg"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178229/uploads/20526/thzrykbkdarteddmafoz.jpg"
                />
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756174265/uploads/20526/sjukxo8taigev9wnicad.jpg"
                />
                <video
                  className="w-full flex-none rounded-md"
                  src="/Recording 2024-05-04 184348.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                
                <img
                  className="w-full flex-none rounded-md"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756736102/uploads/20526/thltoellxo4igbopwgee.jpg"
                />
                
                
                
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center justify-between self-stretch py-32 overflow-y-none">
              <FadeInSection>
                    <div className="flex w-full max-w-[576px] flex-col items-start gap-1 py-4 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-0 mobile:py-12">
                <img
                  className="hidden w-48 flex-none rounded-md mobile:block"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178229/uploads/20526/thzrykbkdarteddmafoz.jpg"
                />
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  What sets me apart?
                </span>
                <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-subtext-color">
                  {
                    "Whether I'm exploring nature, experimenting with new creative tools, or collaborating on design projects, I bring the same curiosity, dedication, and love for meaningful experiences that define both my personal and professional journey."
                  }
                </span>
              </div>
              </FadeInSection>
                            
              <FadeInSection>
                  <div className="flex w-full max-w-[576px] flex-col items-start gap-1 py-4 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-0 mobile:py-12">
                <img
                  className="hidden max-h-[288px] w-48 flex-none rounded-md mobile:block"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756178574/uploads/20526/qxsrv8qsvhvl1zhocrdi.png"
                />
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  I&#39;m resourceful
                </span>
                <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-subtext-color">
                  {
                    "My experience as a Designer for more than 10 years has also allowed me to gain knowledge and understanding in many disciplines such as User Research, Search Engine Optimization, and Digital Marketing, coding HTML and CSS, AR, 3d and artificial intelligence tools.\n"
                  }
                </span>
              </div>      
              </FadeInSection>
              <FadeInSection>
                  <div className="flex w-full max-w-[576px] flex-col items-start gap-1 py-4 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-0 mobile:py-12">
                <video
                  className="hidden w-full flex-none rounded-md mobile:block"
                  src="/Recording 2024-05-04 184348.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  I&#39;m eager to experiment
                </span>
                <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-subtext-color">
                  {
                    "Not every project is equal, to create solutions for different problems, many times shifting from my comfort zone and applying new ideas, methodologies, or processes in order to see which work for better or worse. \nI can adapt, I'm always evolving"
                  }
                </span>
              </div>
              </FadeInSection>
              <FadeInSection>
                  <div className="flex w-full max-w-[576px] flex-col items-start gap-1 py-4 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-0 mobile:py-12">
                <img
                  className="hidden max-h-[288px] w-48 flex-none rounded-md mobile:block"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756736102/uploads/20526/thltoellxo4igbopwgee.jpg"
                />
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  I&#39;m always learning
                </span>
                <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-subtext-color">
                  {
                    "Because UI/UX field is always expanding, there are many things to be learned; tools, technologies, trends, methodologies, or processes.\nI can be considered as a T - shaped Designer maybe generalist."
                  }
                </span>
              </div>
              </FadeInSection>
              <FadeInSection>
                  <div className="flex w-full max-w-[576px] flex-col items-start gap-1 py-4 mobile:flex-col mobile:flex-nowrap mobile:gap-4 mobile:px-0 mobile:py-12">
                <img
                  className="hidden w-48 flex-none rounded-md mobile:block mobile:h-auto mobile:w-full"
                  src="https://res.cloudinary.com/subframe/image/upload/v1756180179/uploads/20526/smxmph45zagrbetdlh5d.jpg"
                />
                <span className="text-heading-1 font-heading-1 text-brand-primary">
                  I&#39;m empathetic
                </span>
                <span className="whitespace-pre-wrap text-caption-bold font-caption-bold text-subtext-color">
                  {
                    "Users' perspective is a key to understand the pain points users have when using a product or service. Also, being empathic as a habit improves the quality of our own lives."
                  }
                </span>
              </div>
              </FadeInSection>
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

export default About;