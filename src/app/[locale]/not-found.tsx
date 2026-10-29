import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");

  return (
    <main className="flex min-h-[calc(100dvh-10rem)] items-center py-20">
      <Container className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-glow px-3.5 py-1.5 font-mono text-xs text-accent-neon">
          <Terminal className="h-3.5 w-3.5" />
          <span>404_NOT_FOUND</span>
        </div>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {t("title")}
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          {t("description")}
        </p>

        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-background transition-all hover:bg-accent-neon"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>{t("backHome")}</span>
        </Link>
      </Container>
    </main>
  );
}

