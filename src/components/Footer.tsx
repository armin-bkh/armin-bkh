"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const giantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = giantRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: 28, opacity: 0.25 },
        {
          yPercent: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 98%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[28px] bg-[#101012] text-[#f4f4f2]">
      <div className="container-x pt-[72px]">
        <div className="px-2 py-5 text-center">
          <p className="text-[13px] font-bold tracking-[0.14em]">
            HAVE A PROJECT IN MIND?
          </p>
          <h2 className="mt-3 text-[clamp(34px,6vw,62px)] leading-none font-extrabold tracking-[-0.04em]">
            Let&apos;s build something great.
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-relaxed text-[#a3a3a0]">
            I&apos;m currently open to frontend roles and freelance projects.
            Tell me about your product — I usually reply within 24 hours.
          </p>
          <div>
            <a
              className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#f4f4f2] px-8 py-4 text-[clamp(18px,3vw,28px)] font-bold tracking-[-0.02em] text-[#0b0b0c] shadow-[0_18px_44px_-14px_rgba(244,244,242,0.4)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_54px_-14px_rgba(244,244,242,0.5)]"
              href={`mailto:${profile.email}`}
            >
              ✉&nbsp; {profile.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { label: "GitHub ↗", href: profile.github },
              { label: "LinkedIn ↗", href: profile.linkedin },
              { label: "Book a call ↗", href: profile.bookingUrl },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-[22px] py-[10px] text-sm font-semibold text-[#d6d6d3] transition-all duration-300 hover:border-[#f4f4f2] hover:bg-[#f4f4f2] hover:text-[#0b0b0c]"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/projects"
              className="rounded-full border border-white/15 px-[22px] py-[10px] text-sm font-semibold text-[#d6d6d3] transition-all duration-300 hover:border-[#f4f4f2] hover:bg-[#f4f4f2] hover:text-[#0b0b0c]"
            >
              My works →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-3 border-t border-white/10 py-7 text-[13.5px] text-[#8d8d8a] max-md:flex-col">
          <span>© 2026 Armin Bakhshi. All rights reserved.</span>
          <span>
            Built with TypeScript, React &amp; Next.js · {profile.location}
          </span>
        </div>

        <div
          ref={giantRef}
          aria-hidden="true"
          className="-mb-2 bg-gradient-to-b from-[rgba(244,244,242,0.9)] to-[rgba(244,244,242,0.02)] bg-clip-text pb-2 text-center text-[clamp(56px,12.5vw,168px)] leading-[0.9] font-extrabold tracking-[-0.05em] whitespace-nowrap text-transparent select-none"
        >
          Armin Bakhshi
        </div>
      </div>
    </footer>
  );
}
