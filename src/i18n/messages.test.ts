import { describe, expect, it } from "vitest";
import messages from "../../messages/en.json";
import { projects, experience, education, nav } from "../data/portfolio";

type ContentEntry = {
  tagline: string;
  description: string[];
  highlights: string[];
};

describe("messages catalog", () => {
  it("has every top-level namespace the app renders", () => {
    for (const ns of [
      "Nav",
      "Common",
      "Meta",
      "Site",
      "Home",
      "Projects",
      "ProjectDetail",
      "ProjectContent",
      "Resume",
      "Experience",
      "Education",
      "Profile",
      "Footer",
      "NotFound",
    ]) {
      expect(messages, ns).toHaveProperty(ns);
    }
  });

  it("covers every nav key", () => {
    const navMessages = messages.Nav as Record<string, string>;
    for (const item of nav) {
      expect(navMessages[item.key], item.key).toBeTruthy();
    }
  });

  it("covers every project slug with tagline, description and highlights", () => {
    const content = messages.ProjectContent as Record<string, ContentEntry>;
    for (const p of projects) {
      const entry = content[p.slug];
      expect(entry, p.slug).toBeDefined();
      expect(entry.tagline, p.slug).toBeTruthy();
      expect(entry.description.length, p.slug).toBeGreaterThan(0);
      expect(entry.highlights.length, p.slug).toBeGreaterThan(0);
    }
    // No orphan entries for removed projects
    expect(Object.keys(content).sort()).toEqual(
      projects.map((p) => p.slug).sort(),
    );
  });

  it("covers every experience key with summary and bullets", () => {
    const exp = messages.Experience as Record<
      string,
      { summary: string; bullets: string[] }
    >;
    for (const job of experience) {
      expect(exp[job.key]?.summary, job.key).toBeTruthy();
      expect(exp[job.key]?.bullets.length ?? 0, job.key).toBeGreaterThan(0);
    }
    expect(Object.keys(exp).sort()).toEqual(
      experience.map((e) => e.key).sort(),
    );
  });

  it("covers every education key", () => {
    const edu = messages.Education as Record<string, { detail: string }>;
    for (const e of education) {
      expect(edu[e.key]?.detail, e.key).toBeTruthy();
    }
  });
});
