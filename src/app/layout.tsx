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
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://use.typekit.net/alk6jdx.css"></link>

  
</head>

      <body>{children}</body>
    </html>
  );
}
