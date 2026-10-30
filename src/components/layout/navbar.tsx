"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Track window scroll for navbar blur/border appearance
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver on the home page
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["hero", ...NAV_ITEMS.map((item) => item.id)];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || mobileOpen
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 xl:h-20">
        {/* Brand / Logo */}
        <Link
          href={isHome ? "#hero" : "/"}
          onClick={() => setMobileOpen(false)}
          className="group inline-flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-foreground xl:text-base"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-neon" />
          </span>
          <span>
            fadhil<span className="text-accent">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-1 rounded-full border border-border/80 bg-surface/70 px-2 py-1 backdrop-blur-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isHome && activeSection === item.id;
            const href = isHome ? `#${item.id}` : `/#${item.id}`;
            return (
              <Link
                key={item.id}
                href={href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors xl:px-4 xl:py-2 xl:text-sm",
                  isActive
                    ? "bg-accent-glow text-accent-neon shadow-[inset_0_0_0_1px_var(--color-accent)]"
                    : "text-muted hover:text-foreground"
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-foreground md:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => {
              const isActive = isHome && activeSection === item.id;
              const href = isHome ? `#${item.id}` : `/#${item.id}`;
              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent-glow text-accent-neon border border-accent/40"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  )}
                >
                  <span>{t(item.key)}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-neon" />
                  )}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}

