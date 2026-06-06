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
          <img className="w-4 flex-none" src="/tech/Claude_AI_symbol.svg" alt="Claude" />
          <span className="text-body font-body text-default-font">Claude</span>
          <span className="text-body font-body text-default-font">+</span>
          <img className="w-4 flex-none" src="/tech/Google_Gemini_icon_2025.svg" alt="Gemini" />
          <span className="text-body font-body text-default-font">Gemini</span>
          <span className="text-body font-body text-default-font">+</span>
          <img className="w-4 flex-none" src="/tech/Google-Antigravity-Icon-One-Color.png" alt="Antigravity" />
          <span className="text-body font-body text-default-font">Antigravity</span>
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
      copyright="© 2026 Pablo Parma"
    />
  );
}
