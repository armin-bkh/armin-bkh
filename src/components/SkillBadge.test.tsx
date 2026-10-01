import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillBadge from "./SkillBadge";

describe("SkillBadge", () => {
  it("renders the skill name", () => {
    render(<SkillBadge name="React" />);
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders initials fallback for skills without a brand icon", () => {
    render(<SkillBadge name="next-intl" />);
    expect(screen.getByText("next-intl")).toBeInTheDocument();
    expect(screen.getByText("N")).toBeInTheDocument();
  });

  it("uses the first two words for multi-word fallback initials", () => {
    render(<SkillBadge name="Smart-contract reads & writes" />);
    expect(screen.getByText("SR")).toBeInTheDocument();
  });

  it("falls back to a question mark for empty names", () => {
    render(<SkillBadge name="" />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("applies the small variant class", () => {
    const { container } = render(<SkillBadge name="React" size="sm" />);
    expect(container.firstChild).toHaveClass("skill-chip-sm");
  });
});
