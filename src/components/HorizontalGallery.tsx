"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HorizontalGalleryProps = {
  images: string[];
  title: string;
};

/**
 * Compact pinned horizontal gallery: vertical scroll drives the track
 * sideways (scrubbed), so 8 screenshots cost ~one viewport of height
 * instead of a long vertical stack. Falls back to native horizontal
 * scroll if pinning can't engage (e.g. reduced motion / short track).
 */
export default function HorizontalGallery({
  images,
  title,
}: HorizontalGalleryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || images.length === 0) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        Math.max(0, track.scrollWidth - section.clientWidth);

      if (!reduceMotion && getDistance() > 0) {
        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "-100px top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (barRef.current) {
                barRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });
      }

      const refresh = () => ScrollTrigger.refresh();
      const imgs = Array.from(track.querySelectorAll("img"));
      imgs.forEach((img) => {
        if (img instanceof HTMLImageElement && !img.complete) {
          img.addEventListener("load", refresh, { once: true });
        }
      });
      const t = window.setTimeout(refresh, 600);
      return () => window.clearTimeout(t);
    }, section);

    return () => ctx.revert();
  }, [images]);

  if (images.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      aria-label={`${title} screens gallery`}
      className="relative mt-10 flex min-h-[82svh] flex-col justify-center overflow-hidden rounded-[28px] border border-line py-8"
    >
      <div className="flex items-end justify-between gap-4 px-6 pt-6 md:px-8">
        <div>
          <h2 className="text-[22px] tracking-[-0.02em]">Screens</h2>
          <p className="mt-1 max-w-160 text-[14.5px] leading-relaxed text-muted">
            Different parts of the app — scroll to travel through them.
          </p>
        </div>
        <span className="hidden shrink-0 text-[13px] font-bold tracking-[0.08em] text-faint uppercase sm:block">
          Scroll →
        </span>
      </div>

      <div className="px-6 pt-4 md:px-8">
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-surface-2">
          <div
            ref={barRef}
            className="h-full w-full origin-left rounded-full bg-ink"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex w-max items-stretch gap-4 overflow-visible px-6 pt-5 pb-6 md:gap-5 md:px-8 md:pb-8"
      >
        {images.map((src, i) => (
          <figure key={src} className="relative shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} screen ${i + 1}`}
              loading={i < 2 ? "eager" : "lazy"}
              draggable={false}
              className="h-[36vh] w-auto rounded-[18px] border border-line object-cover shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] select-none md:h-[46vh]"
            />
            <figcaption className="mt-2 flex items-center justify-between text-[12px] font-bold tracking-[0.08em] text-faint uppercase">
              <span>
                {String(i + 1).padStart(2, "0")} /{" "}
                {String(images.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>
        ))}

        <div className="grid w-[62vw] shrink-0 place-items-center rounded-[18px] border border-dashed border-line-strong sm:w-[300px]">
          <span className="px-6 py-4 text-center text-[13.5px] font-semibold text-muted">
            End of screens
          </span>
        </div>
      </div>
    </section>
  );
}
