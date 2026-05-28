"use client";

import { Footer } from "@/ui/components/Footer";
import { FeatherInstagram, FeatherLinkedin, FeatherSend } from "@subframe/core";
import Link from "next/link";
import CopyEmail from "@/src/components/CopyEmail";

export function SiteFooter() {
  return (
    <Footer
      createdWithText="Proudly created and coded using:"
      tools={
        <>
          <img
            className="w-4 flex-none"
            src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
            alt="Subframe"
          />
          <span className="text-body font-body text-default-font">Subframe</span>
          <span className="text-body font-body text-default-font">+</span>
          <img
            className="w-4 flex-none"
            src="https://res.cloudinary.com/subframe/image/upload/v1755897676/uploads/20526/abte5rdrqheg9h0jl0ff.svg"
            alt="Cursor"
          />
          <span className="text-body font-body text-default-font">Cursor</span>
        </>
      }
      socialText="Find me on"
      socialLinks={
        <>
          <FeatherLinkedin className="text-body font-body text-default-font" />
          <Link href="https://www.linkedin.com/in/pabloparma/" target="_blank" rel="noopener noreferrer">
            <span className="text-body font-body text-default-font">LinkedIn</span>
          </Link>
          <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
          <FeatherInstagram className="text-body font-body text-default-font" />
          <Link href="https://www.instagram.com/pabloparma/" target="_blank" rel="noopener noreferrer">
            <span className="text-body font-body text-default-font">Instagram</span>
          </Link>
          <div className="flex w-px flex-none flex-col items-center gap-2 self-stretch bg-neutral-border" />
          <FeatherSend className="text-body font-body text-default-font" />
          <CopyEmail />
        </>
      }
      copyright="© 2025 Pablo Parma"
    />
  );
}
