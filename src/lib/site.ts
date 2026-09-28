// Central site config for SEO (canonical URLs, OG images, sitemap).
// Set NEXT_PUBLIC_SITE_URL in production (e.g. Vercel project settings).
// The fallback keeps local builds working — replace it once the domain is final.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://armin-bkh.vercel.app"
).replace(/\/$/, "");

export const siteName = "Armin Bakhshi";
export const siteTagline = "Frontend Developer — TypeScript · React · Next.js";
export const siteDescription =
  "Frontend developer specializing in TypeScript, React and Next.js. Web3, DeFi, backend-driven and mobile products.";
