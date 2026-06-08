import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Pablo Parma Portfolio - ",
  description: "Created using Subframe + Cursor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<head>
  {/* Google Fonts — Chakra Petch (headings) + IBM Plex Mono (body/UI) */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,600;0,700;1,600&family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap"
    rel="stylesheet"
  />

  
</head>

      <body>{children}<Analytics /></body>
    </html>
  );
}
