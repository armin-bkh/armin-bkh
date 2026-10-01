import { afterEach, describe, expect, it, vi } from "vitest";

async function loadSiteUrl(env?: string) {
  if (env === undefined) {
    delete process.env.NEXT_PUBLIC_SITE_URL;
  } else {
    process.env.NEXT_PUBLIC_SITE_URL = env;
  }
  vi.resetModules();
  return (await import("./site")).siteUrl;
}

afterEach(() => {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  vi.resetModules();
});

describe("siteUrl", () => {
  it("falls back to the production URL without env", async () => {
    expect(await loadSiteUrl()).toBe("https://armin-bkh.vercel.app");
  });

  it("prefers NEXT_PUBLIC_SITE_URL", async () => {
    expect(await loadSiteUrl("https://example.com")).toBe(
      "https://example.com",
    );
  });

  it("trims a trailing slash", async () => {
    expect(await loadSiteUrl("https://example.com/")).toBe(
      "https://example.com",
    );
  });
});
