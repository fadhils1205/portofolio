"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTransition } from "react";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [isPending, startTransition] = useTransition();

  function handleSwitch(nextLocale: Locale) {
    if (nextLocale === locale) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    startTransition(() => {
      router.replace(`${pathname}${hash}`, {
        locale: nextLocale,
        scroll: false,
      });
    });
  }

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface p-0.5 font-mono text-xs",
        isPending && "opacity-60",
        className
      )}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            disabled={isPending}
            onClick={() => handleSwitch(loc)}
            aria-label={t("switchLang", { locale: loc.toUpperCase() })}
            aria-pressed={active}
            className={cn(
              " cursor-pointer rounded-full px-2.5 py-1 uppercase transition-colors",
              active
                ? "bg-accent/15 text-accent-neon font-medium shadow-[inset_0_0_0_1px_var(--color-accent)]"
                : "text-muted hover:text-foreground"
            )}
          >
            {loc}
          </button>
        );
      })}
    </div>
  );
}

