import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <Section
      id="projects"
      label={t("label")}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      {/* Bento Grid: Featured cards span 3 of 6 cols on desktop; standard cards span 2 of 6 cols */}
      <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
        {projects.map((project, index) => (
          <StaggerItem
            key={project.slug}
            className={
              project.featured
                ? "md:col-span-1 lg:col-span-3"
                : "md:col-span-1 lg:col-span-2"
            }
          >
            <ProjectCard project={project} index={index} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
