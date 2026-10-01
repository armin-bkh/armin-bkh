import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Reveal from "./Reveal";

vi.mock("gsap", () => ({
  default: {
    registerPlugin: () => {},
    context: (fn: () => void) => {
      fn();
      return { revert: () => {} };
    },
    fromTo: () => {},
    to: () => {},
  },
}));

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: { create: () => ({ kill: () => {} }) },
}));

describe("Reveal", () => {
  it("renders children", () => {
    render(
      <Reveal>
        <span>revealed content</span>
      </Reveal>,
    );
    expect(screen.getByText("revealed content")).toBeInTheDocument();
  });
});
