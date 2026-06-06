"use client";

import Link from "next/link";

export default function CopyEmail() {
  return (
    <Link href="/contact">
      <span className="cursor-pointer text-body font-body text-default-font hover:underline">
        Let&apos;s work together
      </span>
    </Link>
  );
}
