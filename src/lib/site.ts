export const siteConfig = {
  /**
   * Base URL of the production website (without trailing slash).
   * Override in Vercel via NEXT_PUBLIC_SITE_URL environment variable.
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://fadhil.dev"
  ).replace(/\/$/, ""),
} as const;

