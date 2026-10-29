import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  const t = useTranslations("Sections.hero");

  return (
    <Section
      id="hero"
      className="flex min-h-[calc(100dvh-4rem)] items-center py-24 md:py-32"
    >
      <div className="max-w-2xl space-y-4">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          {t("label")}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("title")}
        </h1>
        <p className="text-base leading-relaxed text-muted">
          {t("placeholder")}
        </p>
      </div>
    </Section>
  );
}

