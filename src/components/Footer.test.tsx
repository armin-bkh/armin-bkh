import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import Footer from "./Footer";
import en from "../../messages/en.json";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) =>
    React.createElement(
      "a",
      { href: typeof href === "string" ? href : "/", ...rest },
      children,
    ),
}));

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

describe("Footer", () => {
  it("renders the call to action and contact links", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Footer />
      </NextIntlClientProvider>,
    );
    expect(screen.getByText("HAVE A PROJECT IN MIND?")).toBeInTheDocument();
    expect(
      screen.getByText("Let's build something great."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /arminbkh0921@gmail\.com/ }),
    ).toBeInTheDocument();
  });
});
