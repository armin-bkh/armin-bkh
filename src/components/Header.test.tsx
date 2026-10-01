import React from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import Header from "./Header";
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

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

function renderHeader() {
  return render(
    <NextIntlClientProvider locale="en" messages={en}>
      <Header />
    </NextIntlClientProvider>,
  );
}

describe("Header", () => {
  it("renders translated nav links", () => {
    renderHeader();
    const primary = screen.getByRole("navigation", { name: "Primary" });
    for (const label of ["Home", "Projects", "Resume", "Profile"]) {
      expect(
        within(primary).getByRole("link", { name: label }),
      ).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Book a call" })).toBeInTheDocument();
  });

  it("toggles the mobile menu", () => {
    renderHeader();
    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it("closes the mobile menu when a link is clicked", () => {
    renderHeader();
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    const mobile = screen.getByRole("navigation", { name: "Mobile" });
    fireEvent.click(within(mobile).getByRole("link", { name: "Projects" }));
    expect(
      screen.getByRole("button", { name: "Toggle menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu when the logo is clicked", () => {
    renderHeader();
    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));
    fireEvent.click(screen.getByRole("link", { name: /Armin Bakhshi/ }));
    expect(
      screen.getByRole("button", { name: "Toggle menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });
});
