import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { GitHubIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { SharedProjectCover } from "@/components/ui/shared-project-cover";
import { ProjectGallery } from "@/components/sections/project-gallery";
import {
  getAdjacentProjects,
  getProjectBySlug,
  projects,
} from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Layers,
  UserCheck,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const project = getProjectBySlug(slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "ProjectDetail" });
  const title = `${project.title[locale]} — ${t("metaSuffix")}`;
  const description = project.summary[locale];

  return {
    title,
    description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "ProjectDetail" });

  let Content: React.ComponentType;
  try {
    const mdxModule = await import(
      `../../../../../content/projects/${locale}/${slug}.mdx`
    );
    Content = mdxModule.default;
  } catch {
    notFound();
  }

  const typedLocale = locale as Locale;
  const title = project.title[typedLocale];
  const summary = project.summary[typedLocale];
  const role = project.role[typedLocale];
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <main className="py-12 md:py-20">
      <Container>
        {/* Back button */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent-neon"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>{t("backToProjects")}</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <span className="rounded-full border border-accent/40 bg-accent-glow px-3 py-1 text-accent-neon">
                {t("caseStudyBadge")}
              </span>
              <span className="text-subtle">·</span>
              <span className="text-muted">{project.year}</span>
              <span className="text-subtle">·</span>
              <span className="text-accent">{role}</span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {summary}
            </p>
          </div>

          {/* Metadata Bar + Action Links */}
          <div className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-5 sm:flex-row sm:items-center">
            <div className="grid grid-cols-2 gap-6 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
              <div className="space-y-1">
                <p className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  <UserCheck className="h-3.5 w-3.5 text-accent" />
                  {t("roleLabel")}
                </p>
                <p className="text-sm font-medium text-foreground">{role}</p>
              </div>

              <div className="space-y-1">
                <p className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  {t("yearLabel")}
                </p>
                <p className="font-mono text-sm font-medium text-foreground">
                  {project.year}
                </p>
              </div>

              <div className="col-span-2 space-y-1.5 sm:col-span-1">
                <p className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-subtle">
                  <Layers className="h-3.5 w-3.5 text-accent" />
                  {t("stackLabel")}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-xs text-accent-neon"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* External Action Buttons */}
            {(project.links.demo || project.links.repo) && (
              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4 sm:border-t-0 sm:pt-0">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-xs font-medium text-background transition-all hover:bg-accent-neon"
                  >
                    <span>{t("liveDemo")}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}

                {project.links.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-neon"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    <span>{t("sourceCode")}</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Hero Cover Image with shared layout transition */}
          <SharedProjectCover
            slug={project.slug}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_0_50px_-15px_var(--color-accent-glow)]"
          >
            <Image
              src={project.cover}
              alt={title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover"
            />
          </SharedProjectCover>
        </header>

        {/* MDX Case Study Body */}
        <Reveal delay={0.1}>
          <article className="mx-auto mt-14 max-w-3xl">
            <Content />

            {/* Screenshot Gallery */}
            {project.screenshots && (
              <ProjectGallery screenshots={project.screenshots} />
            )}
          </article>
        </Reveal>

        {/* Previous / Next Project Navigation */}
        {(prev || next) && (
          <nav
            aria-label={t("navAriaLabel")}
            className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2"
          >
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all hover:border-accent/50 hover:bg-surface-2/60"
              >
                <span className="inline-flex items-center gap-2 font-mono text-xs text-subtle group-hover:text-accent">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  {t("prevProject")}
                </span>
                <div className="mt-3">
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-neon transition-colors">
                    {prev.title[typedLocale]}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {prev.role[typedLocale]} · {prev.year}
                  </p>
                </div>
              </Link>
            )}

            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 text-left sm:items-end sm:text-right transition-all hover:border-accent/50 hover:bg-surface-2/60"
              >
                <span className="inline-flex items-center gap-2 font-mono text-xs text-subtle group-hover:text-accent">
                  {t("nextProject")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="mt-3">
                  <p className="text-base font-semibold text-foreground group-hover:text-accent-neon transition-colors">
                    {next.title[typedLocale]}
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted">
                    {next.role[typedLocale]} · {next.year}
                  </p>
                </div>
              </Link>
            )}
          </nav>
        )}
      </Container>
    </main>
  );
}
