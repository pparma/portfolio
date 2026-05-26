import "./globals.css";
import type { Metadata } from "next";

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
  {/* Fontshare — Cabinet Grotesk (headings) + Satoshi (body/UI) */}
  <link rel="preconnect" href="https://api.fontshare.com" />
  <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
  <link
    href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&f[]=satoshi@700,500,400,300&display=swap"
    rel="stylesheet"
  />

  
</head>

      <body>{children}</body>
    </html>
  );
}
