import { describe, expect, it, vi } from "vitest";

vi.mock("lenis", () => ({
  default: class {
    on() {}
    raf() {}
    destroy() {}
    scrollTo() {}
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

import { smoothEasing } from "./SmoothScroll";

describe("smoothEasing", () => {
  it("starts near zero", () => {
    expect(smoothEasing(0)).toBeCloseTo(0.001, 3);
  });

  it("settles at exactly one", () => {
    expect(smoothEasing(1)).toBe(1);
    expect(smoothEasing(10)).toBe(1);
  });

  it("increases monotonically", () => {
    const samples = [0, 0.25, 0.5, 0.75, 1].map(smoothEasing);
    const sorted = [...samples].sort((a, b) => a - b);
    expect(samples).toEqual(sorted);
  });
});
