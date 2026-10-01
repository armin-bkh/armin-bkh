import { describe, expect, it } from "vitest";
import { alt, contentType, runtime, size } from "./opengraph-image";

describe("opengraph-image config", () => {
  it("exports a valid 1200x630 PNG config", () => {
    expect(alt).toBeTruthy();
    expect(size).toEqual({ width: 1200, height: 630 });
    expect(contentType).toBe("image/png");
    expect(runtime).toBe("edge");
  });
});

// NOTE: the render path itself (ImageResponse + avatar fetch) is verified
// against a running server and production — sharp's native binding can't
// initialize inside the test sandbox, so rendering is not unit-tested here.
