"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import type { ProjectScreenshot } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Maximize2, X } from "lucide-react";

type ProjectGalleryProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectGallery({ screenshots }: ProjectGalleryProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("ProjectDetail");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!screenshots || screenshots.length === 0) return null;

  const activeItem = activeIndex !== null ? screenshots[activeIndex] : null;

  return (
    <div className="mt-14 space-y-5 border-t border-border/70 pt-10">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {t("galleryLabel")}
          </p>
          <h2 className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {t("galleryTitle")}
          </h2>
        </div>
        <p className="font-mono text-xs text-subtle">{t("galleryHint")}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {screenshots.map((shot, idx) => {
          const caption = shot.caption[locale];
          return (
            <button
              key={`${shot.src}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left transition-all",
                "hover:border-accent/60 hover:shadow-[0_0_32px_-12px_var(--color-accent-glow)]",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer"
              )}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/70 bg-background">
                <Image
                  src={shot.src}
                  alt={caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/80 text-muted opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-hover:text-accent-neon">
                  <Maximize2 className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <p className="text-xs leading-relaxed text-muted group-hover:text-foreground transition-colors">
                  {caption}
                </p>
                <span className="font-mono text-[11px] text-subtle">
                  0{idx + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption[locale]}
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-md sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
              <p className="font-mono text-xs text-foreground">
                {activeItem.caption[locale]}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label={t("closeGallery")}
                className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface-2 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-background">
              <Image
                src={activeItem.src}
                alt={activeItem.caption[locale]}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

