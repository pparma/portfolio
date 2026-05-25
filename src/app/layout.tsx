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
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
  {/* Single request: Manrope (body/UI) + Newsreader (headings) + Inter (base) */}
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://use.typekit.net/alk6jdx.css"></link>

  
</head>

      <body>{children}</body>
    </html>
  );
}
