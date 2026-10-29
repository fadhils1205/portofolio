import { useLocale, useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import type { Locale } from "@/i18n/routing";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const locale = useLocale() as Locale;
  const t = useTranslations("Experience");

  return (
    <Section
      id="experience"
      label={t("label")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical Emerald Line */}
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-3 w-px bg-gradient-to-b from-accent via-border to-transparent sm:left-4"
        />

        <ol className="space-y-10">
          {experiences.map((item) => {
            const period = item.period[locale];
            const role = item.role[locale];
            const location = item.location[locale];
            const type = item.type[locale];
            const description = item.description[locale];
            const highlights = item.highlights[locale];

            return (
              <li key={item.id} className="relative pl-10 sm:pl-14">
                {/* Timeline Node / Dot */}
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 left-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background sm:left-1"
                >
                  {item.current ? (
                    <>
                      <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-accent-neon opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-neon shadow-[0_0_8px_var(--color-accent-neon)]" />
                    </>
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  )}
                </span>

                {/* Card */}
                <div className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:bg-surface-2/40 hover:shadow-[0_0_32px_-12px_var(--color-accent-glow)]">
                  {/* Top metadata row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/70 pb-4">
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-accent-neon">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      <span>{period}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-glow px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent-neon">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-neon" />
                          {t("currentBadge")}
                        </span>
                      )}
                      <span className="rounded-full border border-border bg-surface-2 px-2.5 py-0.5 font-mono text-[11px] text-muted">
                        {type}
                      </span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="mt-4 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
                      <span className="inline-flex items-center gap-1 text-foreground/90">
                        <Briefcase className="h-3.5 w-3.5 text-accent" />
                        {item.company}
                      </span>
                      <span className="text-subtle">·</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        {location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background/70 px-2 py-0.5 font-mono text-[11px] text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
