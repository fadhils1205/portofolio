import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { HeroSpotlight } from "./hero-spotlight";
import { profile } from "@/data/profile";
import { ArrowDownRight, Download, Mail, Terminal } from "lucide-react";

const SOCIAL_ITEMS = [
  {
    name: "GitHub",
    href: profile.socials.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    name: "LinkedIn",
    href: profile.socials.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    name: "Email",
    href: profile.socials.email,
    icon: Mail,
    external: false,
  },
] as const;

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative scroll-mt-24 border-b border-border/50"
    >
      <HeroSpotlight className="flex min-h-[calc(100dvh-4rem)] items-center py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left column: primary intro */}
            <div className="space-y-8 lg:col-span-8">
              {/* Available for work badge */}
              <Reveal delay={0.02}>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent-glow px-3.5 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-neon opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-neon" />
                  </span>
                  <span className="font-mono text-xs font-medium tracking-wide text-accent-neon">
                    {t("available")}
                  </span>
                </div>
              </Reveal>

              {/* Heading & Role */}
              <Reveal delay={0.08} className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {t("greeting")} — {profile.location}
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  {profile.name}
                  <span className="block mt-2 text-muted font-normal text-2xl sm:text-3xl md:text-4xl">
                    {t("rolePrefix")}{" "}
                    <span className="text-foreground font-semibold underline decoration-accent/60 decoration-2 underline-offset-8">
                      {profile.role}
                    </span>
                  </span>
                </h1>
              </Reveal>

              {/* Tagline */}
              <Reveal delay={0.14}>
                <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {t("tagline")}
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.2} className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-background transition-all hover:bg-accent-neon"
                >
                  <span>{t("ctaProjects")}</span>
                  <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </Link>

                <a
                  href={profile.cvUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface-2"
                >
                  <Download className="h-4 w-4 text-accent" />
                  <span>{t("ctaCv")}</span>
                </a>
              </Reveal>

              {/* Social Links */}
              <Reveal delay={0.26} className="flex items-center gap-4 pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-subtle">
                  {t("connectLabel")}
                </span>
                <div className="h-px w-8 bg-border" />
                <div className="flex items-center gap-2">
                  {SOCIAL_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        aria-label={item.name}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/80 text-muted transition-colors hover:border-accent/50 hover:bg-surface-2 hover:text-accent-neon"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </Reveal>
            </div>

            {/* Right column: engineering status card */}
            <Reveal delay={0.18} className="lg:col-span-4">
              <SpotlightCard className="rounded-2xl border border-border bg-surface/85 p-6 backdrop-blur-sm shadow-[0_0_40px_-15px_var(--color-accent-glow)]">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-accent" />
                    <span className="font-mono text-xs text-foreground">
                      system.profile
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-accent-neon">
                    v2026.1
                  </span>
                </div>

                <dl className="mt-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-subtle">{t("cardRoleLabel")}</dt>
                    <dd className="text-foreground">{profile.role}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-subtle">{t("cardFocusLabel")}</dt>
                    <dd className="text-foreground">{t("cardFocusValue")}</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-subtle">{t("cardStackLabel")}</dt>
                    <dd className="text-accent-neon">Next.js · Node · SQL</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt className="text-subtle">{t("cardStatusLabel")}</dt>
                    <dd className="inline-flex items-center gap-1.5 text-accent-neon">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-neon" />
                      {t("cardStatusValue")}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 rounded-xl border border-border/80 bg-background/60 p-3.5 font-mono text-[11px] leading-relaxed text-muted">
                  <span className="text-accent">$</span> {t("cardCommand")}
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </Container>
      </HeroSpotlight>
    </section>
  );
}
