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
    <div ref={ref} className="sticky-section">
      <div className="sticky-col">
        <div className={`sticky-title${active ? " is-active" : ""}`}>
          <span className="sticky-index">
            <span className="sticky-dot" />
            {index}
          </span>
          <h2>{title}</h2>
          <p>{sub}</p>
        </div>
      </div>
      <div className="sticky-rows">{children}</div>
    </div>
  );
}
