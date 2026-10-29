import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homeEntries: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        id: `${siteConfig.url}/id`,
        en: `${siteConfig.url}/en`,
      },
    },
  }));

  const projectEntries: MetadataRoute.Sitemap = routing.locales.flatMap(
    (locale) =>
      projects.map((project) => ({
        url: `${siteConfig.url}/${locale}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: {
            id: `${siteConfig.url}/id/projects/${project.slug}`,
            en: `${siteConfig.url}/en/projects/${project.slug}`,
          },
        },
      }))
  );

  return [...homeEntries, ...projectEntries];
}

