import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  const t = useTranslations("Sections.about");

  return (
    <Section id="about" label={t("label")} title={t("title")}>
      <div className="rounded-2xl border border-border bg-surface p-8 text-sm text-muted">
        {t("placeholder")}
      </div>
    </Section>
  );
}

