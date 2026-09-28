import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: siteUrl, lastModified },
    { url: `${siteUrl}/projects`, lastModified },
    { url: `${siteUrl}/resume`, lastModified },
    { url: `${siteUrl}/profile`, lastModified },
    ...projects.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified,
    })),
  ];
}
