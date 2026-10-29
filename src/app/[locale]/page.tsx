import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function HomePage({ params }: Props) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Placeholder");

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        {locale}
      </span>
      <h1 className="text-4xl font-semibold tracking-tight">{t("heading")}</h1>
      <p className="max-w-md text-muted">{t("body")}</p>
    </main>
  );
}

