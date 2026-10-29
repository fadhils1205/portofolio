import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CopyEmailButton } from "./copy-email-button";
import { profile } from "@/data/profile";
import { ArrowUpRight, FileText, Mail } from "lucide-react";

const CONTACT_CHANNELS = [
  {
    name: "GitHub",
    handle: "@fadhils",
    href: profile.socials.github,
    icon: GitHubIcon,
    external: true,
  },
  {
    name: "LinkedIn",
    handle: "in/fadhils",
    href: profile.socials.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    name: "Resume / CV",
    handle: "PDF Document",
    href: profile.cvUrl,
    icon: FileText,
    external: false,
  },
] as const;

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <Section
      id="contact"
      label={t("label")}
      title={t("title")}
      subtitle={t("subtitle")}
      className="border-b-0"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: Large CTA Card */}
        <Reveal className="lg:col-span-7">
          <SpotlightCard
            spotlightSize={480}
            className="h-full rounded-2xl border border-border bg-surface p-8 sm:p-10"
          >
            {/* Subtle ambient emerald glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative z-10 flex h-full flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-glow px-3 py-1 font-mono text-xs text-accent-neon">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-neon opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-neon" />
                  </span>
                  <span>{t("statusBadge")}</span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {t("ctaHeading")}
                </h3>

                <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  {t("ctaBody")}
                </p>
              </div>

              {/* Direct Email Display + Actions */}
              <div className="space-y-4 border-t border-border/80 pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-subtle">
                  {t("directEmailLabel")}
                </p>

                <p className="font-mono text-lg font-semibold text-accent-neon sm:text-xl break-all">
                  {profile.email}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={profile.socials.email}
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-background transition-all hover:bg-accent-neon"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{t("sendEmailBtn")}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <CopyEmailButton
                    email={profile.email}
                    copyLabel={t("copyEmailBtn")}
                    copiedLabel={t("copiedEmailBtn")}
                  />
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Right: Social & Channel Cards */}
        <StaggerGroup className="flex flex-col justify-between gap-4 lg:col-span-5">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <StaggerItem key={channel.name}>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group block h-full rounded-2xl"
                >
                  <SpotlightCard className="flex h-full items-center justify-between rounded-2xl border border-border bg-surface p-5 transition-all group-hover:border-accent/50 group-hover:bg-surface-2/60 group-hover:shadow-[0_0_28px_-12px_var(--color-accent-glow)]">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent-glow group-hover:text-accent-neon">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground group-hover:text-accent-neon transition-colors">
                          {channel.name}
                        </p>
                        <p className="font-mono text-xs text-muted">
                          {channel.handle}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/60 text-muted transition-all group-hover:border-accent/50 group-hover:text-accent-neon">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </SpotlightCard>
                </a>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </Section>
  );
}
