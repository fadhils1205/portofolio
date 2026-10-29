import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Mail } from "lucide-react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    href: "mailto:hello@fadhil.dev",
    icon: Mail,
  },
] as const;

export function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40 py-12">
      <Container className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div className="space-y-2">
          <p className="font-mono text-sm font-semibold text-foreground">
            fadhil<span className="text-accent">.dev</span>
          </p>
          <p className="max-w-sm text-xs leading-relaxed text-muted">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent-neon"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <p className="font-mono text-xs text-subtle">
            © {currentYear} Fadhil. {t("rights")}
          </p>
        </div>
      </Container>
    </footer>
  );
}
