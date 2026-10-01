import { describe, expect, it, vi } from "vitest";
import en from "../../../../messages/en.json";

const shared = vi.hoisted(() => ({
  catalog: null as null | Record<string, unknown>,
}));
shared.catalog = en as Record<string, unknown>;

function lookup(
  namespace: string,
  key: string,
  vars?: Record<string, string | number>,
): unknown {
  let node: unknown = shared.catalog;
  for (const part of namespace.split(".")) {
    node = (node as Record<string, unknown>)[part];
  }
  const raw = (node as Record<string, unknown>)[key];
  if (typeof raw === "string" && vars) {
    let text = raw;
    for (const [k, v] of Object.entries(vars)) {
      text = text.replace(`{${k}}`, String(v));
    }
    return text;
  }
  return raw;
}

vi.mock("next-intl/server", () => ({
  getTranslations: async (namespace: string) => {
    const t = (key: string, vars?: Record<string, string | number>) =>
      lookup(namespace, key, vars);
    (t as unknown as { raw: unknown }).raw = (key: string) =>
      lookup(namespace, key);
    return t;
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("project route metadata", () => {
  it("generates static params for every project", async () => {
    const { generateStaticParams } = await import("./page");
    const { projects } = await import("@/data/portfolio");
    expect(generateStaticParams()).toEqual(
      projects.map((p) => ({ slug: p.slug })),
    );
  });

  it("builds rich metadata for a live project", async () => {
    const { generateMetadata } = await import("./page");
    const meta = await generateMetadata({
      params: Promise.resolve({ slug: "prc-pixel-race-club" }),
    });
    expect(meta.title).toContain("Pixel Race Club");
    expect(meta.description).toContain("play-to-earn");
    expect(meta.alternates).toMatchObject({
      canonical: "/projects/prc-pixel-race-club",
    });
    const images = meta.openGraph?.images as { url: string }[] | undefined;
    expect(images?.[0]?.url).toMatch(/^https?:\/\/.+\/prc\/cover\.png$/);
    expect(meta.twitter).toMatchObject({ card: "summary_large_image" });
  });

  it("builds metadata for an offline project without live links", async () => {
    const { generateMetadata } = await import("./page");
    const meta = await generateMetadata({
      params: Promise.resolve({ slug: "aih-all-in-hype" }),
    });
    expect(meta.title).toContain("All In Hype");
    expect(meta.openGraph).toMatchObject({ type: "article" });
  });

  it("returns empty metadata for an unknown slug", async () => {
    const { generateMetadata } = await import("./page");
    await expect(
      generateMetadata({ params: Promise.resolve({ slug: "nope" }) }),
    ).resolves.toEqual({});
  });
});
