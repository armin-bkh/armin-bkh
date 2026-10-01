import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

describe("sitemap", () => {
  it("lists every route and project page", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const path of ["", "/projects", "/resume", "/profile"]) {
      expect(urls).toContain(`${siteUrl}${path}`);
    }
    for (const p of projects) {
      expect(urls).toContain(`${siteUrl}/projects/${p.slug}`);
    }
    expect(urls.length).toBe(4 + projects.length);
  });
});
