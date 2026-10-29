import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SharedProjectCover } from "@/components/ui/shared-project-cover";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import type { Locale } from "@/i18n/routing";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index: number;
  className?: string;
};

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations("Projects");

  const title = project.title[locale];
  const summary = project.summary[locale];
  const role = project.role[locale];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-neon",
        className
      )}
    >
      <SpotlightCard
        spotlightSize={420}
        className={cn(
          "flex h-full flex-col justify-between rounded-2xl border border-border bg-surface transition-all duration-300",
          "group-hover:-translate-y-0.5 group-hover:border-accent/60 group-hover:bg-surface-2/60 group-hover:shadow-[0_0_36px_-10px_var(--color-accent-glow)]"
        )}
      >
        {/* Top: Cover Image with shared layout transition */}
        <SharedProjectCover
          slug={project.slug}
          className={cn(
            "relative w-full overflow-hidden border-b border-border/80 bg-background",
            project.featured ? "aspect-[16/9]" : "aspect-[16/10]"
          )}
        >
          <Image
            src={project.cover}
            alt={title}
            fill
            sizes={
              project.featured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 1024px) 100vw, 33vw"
            }
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Subtle gradient overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/75 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30"
          />

          {/* Top badges on cover */}
          <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/90 bg-background/85 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur-md">
              <span className="text-accent">0{index + 1}</span>
              <span>·</span>
              <span>{project.year}</span>
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-glow px-2.5 py-1 font-mono text-[11px] font-medium text-accent-neon backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-neon" />
                {t("featuredBadge")}
              </span>
            )}
          </div>
        </SharedProjectCover>

        {/* Bottom: Content */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-xs text-accent">{role}</p>
                <h3
                  className={cn(
                    "mt-1 font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-neon",
                    project.featured ? "text-xl sm:text-2xl" : "text-lg"
                  )}
                >
                  {title}
                </h3>
              </div>

              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-muted transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent group-hover:text-background"
              >
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <p className="line-clamp-3 text-sm leading-relaxed text-muted">
              {summary}
            </p>
          </div>

          {/* Stack Badges & Action Label */}
          <div className="mt-6 space-y-4 border-t border-border/60 pt-4">
            <ul className="flex flex-wrap gap-1.5" aria-label={t("stackLabel")}>
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-background/70 px-2 py-0.5 font-mono text-[11px] text-muted transition-colors group-hover:border-accent/30 group-hover:text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-subtle group-hover:text-accent-neon transition-colors">
                {t("viewDetail")}
              </span>
              <span className="text-accent opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
