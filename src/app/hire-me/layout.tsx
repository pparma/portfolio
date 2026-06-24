import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Pablo Parma — Senior Product Designer",
  description:
    "Senior Product Designer with 12+ years across design systems, mobile/web apps and AI-powered UX. Available now — remote, GMT-3.",
  openGraph: {
    title: "Hire Pablo Parma — Senior Product Designer",
    description:
      "Senior Product Designer with 12+ years across design systems, mobile/web apps and AI-powered UX. Available now — remote, GMT-3.",
    images: ["/portrait.png"],
  },
};

export default function HireMeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
