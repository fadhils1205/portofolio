import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

const components: MDXComponents = {
  h2: ({ className, children, ...props }) => (
    <h2
      className={cn(
        "mt-12 mb-4 flex items-center gap-3 text-xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-2xl",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2 rounded-full bg-accent-neon shadow-[0_0_10px_var(--color-accent)]"
      />
      <span>{children}</span>
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      className={cn(
        "mt-8 mb-3 text-lg font-semibold tracking-tight text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ className, children, ...props }) => (
    <p
      className={cn("my-4 text-base leading-relaxed text-muted", className)}
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ className, children, ...props }) => (
    <ul
      className={cn("my-4 space-y-2.5 pl-1 text-base text-muted", className)}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }) => (
    <ol
      className={cn(
        "my-4 list-decimal space-y-2.5 pl-5 text-base text-muted marker:font-mono marker:text-accent",
        className
      )}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }) => (
    <li
      className={cn("flex items-start gap-2.5 leading-relaxed", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
      />
      <span className="flex-1">{children}</span>
    </li>
  ),
  strong: ({ className, children, ...props }) => (
    <strong
      className={cn("font-semibold text-foreground", className)}
      {...props}
    >
      {children}
    </strong>
  ),
  blockquote: ({ className, children, ...props }) => (
    <blockquote
      className={cn(
        "my-6 rounded-r-xl border-l-2 border-accent bg-surface/80 px-5 py-4 text-sm italic text-foreground/90",
        className
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }) => (
    <code
      className={cn(
        "rounded-md border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-xs text-accent-neon",
        className
      )}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ className, children, ...props }) => (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-xs leading-relaxed text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-10 border-border", className)} {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}

