"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CopyEmailButtonProps = {
  email: string;
  copyLabel: string;
  copiedLabel: string;
  className?: string;
};

export function CopyEmailButton({
  email,
  copyLabel,
  copiedLabel,
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard permission is denied
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 font-mono text-xs font-medium transition-all",
        copied
          ? "border-accent bg-accent-glow text-accent-neon"
          : "border-border bg-surface-2 text-foreground hover:border-accent/50 hover:text-accent-neon",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 text-accent-neon" />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 text-accent" />
          <span>{copyLabel}</span>
        </>
      )}
    </button>
  );
}

