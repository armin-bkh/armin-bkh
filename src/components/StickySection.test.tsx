import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import StickySection from "./StickySection";

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

describe("StickySection", () => {
  it("renders title, sub and children", () => {
    render(
      <StickySection index="01" title="Experience" sub="Sub text">
        <p>section body</p>
      </StickySection>,
    );
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Sub text")).toBeInTheDocument();
    expect(screen.getByText("section body")).toBeInTheDocument();
  });
});
