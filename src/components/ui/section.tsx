import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Reveal } from "./reveal";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({
  id,
  label,
  title,
  subtitle,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 md:py-28 border-b border-border/50",
        className
      )}
    >
      <Container className={containerClassName}>
        {(label || title || subtitle) && (
          <Reveal className="mb-12 max-w-2xl space-y-3 xl:mb-14 xl:max-w-3xl">
            {label && (
              <p className="font-mono text-xs uppercase tracking-widest text-accent 2xl:text-sm">
                {label}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl xl:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm leading-relaxed text-muted sm:text-base xl:text-lg">
                {subtitle}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
