"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StickySectionProps = {
  index: string;
  title: string;
  sub: string;
  children: ReactNode;
};

/**
 * Sticky resume section: the title locks to the viewport while its rows
 * scroll past, and releases when the next section arrives (sticky is
 * contained by the parent, so no JS math needed). A ScrollTrigger toggles
 * an active state on the title while the section is passing through.
 */
export default function StickySection({
  index,
  title,
  sub,
  children,
}: StickySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 55%",
      end: "bottom 55%",
      onToggle: (self) => setActive(self.isActive),
    });
    return () => {
      st.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid items-start gap-2 md:grid-cols-[230px_1fr] md:gap-[clamp(24px,4vw,56px)]"
    >
      <div className="self-stretch">
        <div className="static pb-0 md:sticky md:top-27 md:pb-6">
          <span className="mb-3 inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[0.14em] text-faint">
            <span
              className={`h-2.25 w-2.25 rounded-full border-[1.5px] transition-all duration-300 ${
                active ? "border-ink bg-ink" : "border-faint"
              }`}
            />
            {index}
          </span>
          <h2
            className={`text-[clamp(24px,3vw,32px)] leading-[1.05] font-extrabold tracking-[-0.03em] transition-colors duration-300 ${
              active ? "text-ink" : "text-faint"
            }`}
          >
            {title}
          </h2>
          <p className="mt-2.5 text-[14.5px] leading-relaxed text-faint">
            {sub}
          </p>
        </div>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
