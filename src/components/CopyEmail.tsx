"use client";

import { useState } from "react";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "pabloparma@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <span
        onClick={handleCopy}
        className="cursor-pointer text-body font-body text-default-font hover:underline "
      >
        Send me an Email
      </span>

      {copied && (
        <div
          className="
            absolute 
            right-full bottom-full 
            mb-2 mr-2 
            bg-black text-white text-sm 
            px-3 py-1 
            rounded-lg shadow-lg
            whitespace-nowrap
          "
        >
          📋 Email Copied!
        </div>
      )}
    </div>
  );
}
