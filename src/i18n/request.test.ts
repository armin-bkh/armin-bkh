import { describe, expect, it, vi } from "vitest";

vi.mock("next-intl/server", () => ({
  getRequestConfig: (cb: () => unknown) => cb,
}));

describe("request config", () => {
  it("serves the English catalog", async () => {
    const getConfig = (await import("./request")).default;
    const config = await getConfig({
      requestLocale: Promise.resolve("en"),
    });
    expect(config.locale).toBe("en");
    expect(config.messages).toMatchObject({
      Nav: { home: "Home" },
      ProjectContent: { "prc-pixel-race-club": { tagline: expect.any(String) } },
    });
  });
});
