import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import HorizontalGallery, { isVideoSrc } from "./HorizontalGallery";
import en from "../../messages/en.json";

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
  ScrollTrigger: {
    create: () => ({ kill: () => {} }),
    refresh: () => {},
    update: () => {},
  },
}));

describe("isVideoSrc", () => {
  it.each(["/aih/demo-1.mp4", "clip.WEBM", "/x/y.mov?v=2"])(
    "detects video file %s",
    (src) => {
      expect(isVideoSrc(src)).toBe(true);
    },
  );

  it.each(["/prc/cover.png", "/aih/2.jpeg", "/rangertreejer/cover.webp"])(
    "treats image %s as non-video",
    (src) => {
      expect(isVideoSrc(src)).toBe(false);
    },
  );
});

describe("HorizontalGallery", () => {
  const images = [
    "/aih/1.png",
    "/aih/2.jpeg",
    "/aih/demo-1.mp4",
    "/aih/demo-2.mp4",
  ];

  function renderGallery() {
    return render(
      <NextIntlClientProvider locale="en" messages={en}>
        <HorizontalGallery images={images} title="AIH — All In Hype" />
      </NextIntlClientProvider>,
    );
  }

  it("renders photos and demo videos with counters", () => {
    const { container } = renderGallery();
    expect(
      screen.getByRole("heading", { name: "Screens" }),
    ).toBeInTheDocument();
    expect(container.querySelectorAll("img")).toHaveLength(2);
    expect(container.querySelectorAll("video")).toHaveLength(2);
    expect(screen.getByText("01 / 04")).toBeInTheDocument();
    expect(screen.getByText("End of screens")).toBeInTheDocument();
  });

  it("labels media accessibly", () => {
    const { container } = renderGallery();
    expect(
      within(container as HTMLElement).getByAltText("AIH — All In Hype screen 1"),
    ).toBeInTheDocument();
    expect(
      container.querySelector('video[aria-label="AIH — All In Hype demo 3"]'),
    ).not.toBeNull();
  });

  it("renders nothing without images", () => {
    const { container } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <HorizontalGallery images={[]} title="Empty" />
      </NextIntlClientProvider>,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
