import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import SmoothScroll from "./SmoothScroll";

const lenisMocks = vi.hoisted(() => ({ scrollTo: vi.fn() }));

vi.mock("lenis", () => ({
  default: class {
    on() {}
    raf() {}
    destroy() {}
    scrollTo(...args: unknown[]) {
      lenisMocks.scrollTo(...args);
    }
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("gsap", () => ({
  default: {
    registerPlugin: () => {},
    ticker: { add: () => {}, remove: () => {}, lagSmoothing: () => {} },
  },
}));

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: { refresh: () => {}, update: () => {} },
}));

describe("SmoothScroll", () => {
  it("renders nothing and cleans up on unmount", () => {
    const { container, unmount } = render(<SmoothScroll />);
    expect(container).toBeEmptyDOMElement();
    expect(() => unmount()).not.toThrow();
  });

  it("routes in-page anchor clicks through Lenis", () => {
    document.body.insertAdjacentHTML(
      "beforeend",
      '<a href="#target">jump</a><section id="target"></section>',
    );
    render(<SmoothScroll />);
    fireEvent.click(screen.getByText("jump"));
    expect(lenisMocks.scrollTo).toHaveBeenCalledWith(
      expect.any(HTMLElement),
      { offset: -90 },
    );
    document.getElementById("target")?.remove();
    screen.getByText("jump").remove();
  });

  it("ignores clicks that are not in-page anchors", () => {
    render(<SmoothScroll />);
    const calls = lenisMocks.scrollTo.mock.calls.length;
    fireEvent.click(document.body);
    document.body.insertAdjacentHTML(
      "beforeend",
      '<a href="#">empty</a><a href="#missing">missing</a>',
    );
    fireEvent.click(screen.getByText("empty"));
    fireEvent.click(screen.getByText("missing"));
    expect(lenisMocks.scrollTo.mock.calls.length).toBe(calls);
    screen.getByText("empty").remove();
    screen.getByText("missing").remove();
  });
});
