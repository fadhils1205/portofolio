import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";
import { techStack } from "@/data/tech-stack";
import { Code2, Database, Layers, Wrench, MapPin } from "lucide-react";

const CATEGORY_ICONS = {
  frontend: Layers,
  backend: Code2,
  database: Database,
  tools: Wrench,
} as const;

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <Section
      id="about"
      label={t("label")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      {/* Top Grid: Photo + Narrative + Metrics */}
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left: Portrait / Profile Card */}
        <div className="lg:col-span-4">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-3 transition-colors hover:border-accent/40">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl bg-surface-2">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <div className="mt-3 flex items-center justify-between px-1 py-1">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {profile.name}
                </p>
                <p className="font-mono text-xs text-muted">{profile.role}</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                <MapPin className="h-3 w-3 text-accent" />
                {profile.location}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Bio Paragraphs & Metrics */}
        <div className="flex flex-col justify-between space-y-8 lg:col-span-8">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p className="text-foreground/95 font-medium">{t("bio1")}</p>
            <p>{t("bio2")}</p>
            <p>{t("bio3")}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {profile.metrics.map((metric) => (
              <div
                key={metric.key}
                className="rounded-2xl border border-border bg-surface/80 p-4 transition-colors hover:border-accent/40"
              >
                <p className="font-mono text-2xl font-semibold tracking-tight text-accent-neon sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-muted">
                  {t(`metrics.${metric.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Grouped Tech Stack */}
      <div className="mt-16 space-y-6">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {t("stackLabel")}
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              {t("stackTitle")}
            </h3>
          </div>
          <p className="font-mono text-xs text-subtle">{t("stackSubtitle")}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => {
            const Icon = CATEGORY_ICONS[group.category];
            return (
              <div
                key={group.category}
                className="flex flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <div className="mb-4 flex items-center justify-between border-b border-border/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-glow text-accent-neon">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h4 className="text-sm font-semibold text-foreground">
                      {t(`categories.${group.category}`)}
                    </h4>
                  </div>
                  <span className="font-mono text-xs text-subtle">
                    0{techStack.indexOf(group) + 1}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/80 px-2.5 py-1.5 text-xs text-foreground transition-colors hover:border-accent/40"
                    >
                      <span>{item.name}</span>
                      {item.tag && (
                        <span className="font-mono text-[10px] text-accent">
                          {item.tag}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
