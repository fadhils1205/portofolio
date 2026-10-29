import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";

export function ContactSection() {
  const t = useTranslations("Sections.contact");

  return (
    <Section
      id="contact"
      label={t("label")}
      title={t("title")}
      className="border-b-0"
    >
      <div className="rounded-2xl border border-border bg-surface p-8 text-sm text-muted">
        {t("placeholder")}
      </div>
    </Section>
  );
}

