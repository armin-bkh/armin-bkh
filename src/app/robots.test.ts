import { describe, expect, it } from "vitest";
import robots from "./robots";
import { siteUrl } from "@/lib/site";

describe("robots", () => {
  it("allows crawling and points at the sitemap", () => {
    const config = robots();
    expect(config.rules).toMatchObject({ userAgent: "*", allow: "/" });
    expect(config.sitemap).toBe(`${siteUrl}/sitemap.xml`);
  });
});
