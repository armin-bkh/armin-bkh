import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { projects, experience, education, nav } from "./portfolio";

const publicDir = join(__dirname, "../../public");

describe("projects", () => {
  it("has only real work with unique slugs", () => {
    expect(projects.length).toBeGreaterThan(0);
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("fills every required field", () => {
    for (const p of projects) {
      expect(p.title, p.slug).toBeTruthy();
      expect(p.year, p.slug).toBeTruthy();
      expect(p.category, p.slug).toBeTruthy();
      expect(p.role, p.slug).toBeTruthy();
      expect(p.timeline, p.slug).toBeTruthy();
      expect(p.stack.length, p.slug).toBeGreaterThan(0);
      expect(p.hue, p.slug).toBeGreaterThanOrEqual(0);
      expect(p.hue, p.slug).toBeLessThan(360);
    }
  });

  it("points covers and gallery items at real public files", () => {
    const files = projects.flatMap((p) => [
      ...(p.cover ? [p.cover] : []),
      ...(p.gallery ?? []),
    ]);
    expect(files.length).toBeGreaterThan(0);
    for (const f of files) {
      expect(f.startsWith("/"), f).toBe(true);
      expect(existsSync(join(publicDir, f)), f).toBe(true);
    }
  });

  it("links offline projects to their demos", () => {
    for (const p of projects) {
      if (p.status === "offline") {
        expect(p.gallery?.length ?? 0, p.slug).toBeGreaterThan(0);
      }
    }
  });
});

describe("experience", () => {
  it("uses unique keys", () => {
    const keys = experience.map((e) => e.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe("education", () => {
  it("uses unique keys", () => {
    const keys = education.map((e) => e.key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe("nav", () => {
  it("links to internal routes only", () => {
    for (const item of nav) {
      expect(item.href.startsWith("/"), item.href).toBe(true);
    }
  });
});
