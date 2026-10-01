import { describe, expect, it } from "vitest";
import { cardGradient, heroGradient } from "./cover";

describe("cardGradient", () => {
  it("builds the card gradient for a hue", () => {
    expect(cardGradient(8)).toBe(
      "linear-gradient(135deg, hsl(8 45% 22%) 0%, hsl(8 60% 42%) 55%, hsl(48 70% 55%) 100%)",
    );
  });

  it("wraps the accent hue past 360", () => {
    expect(cardGradient(330)).toContain("hsl(10 70% 55%)");
  });
});

describe("heroGradient", () => {
  it("builds the darker hero gradient for a hue", () => {
    expect(heroGradient(8)).toBe(
      "linear-gradient(135deg, hsl(8 45% 18%) 0%, hsl(8 55% 36%) 55%, hsl(48 65% 48%) 100%)",
    );
  });

  it("differs from the card gradient", () => {
    expect(heroGradient(140)).not.toBe(cardGradient(140));
  });
});
