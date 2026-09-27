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
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <p style={{ fontSize: 13, letterSpacing: "0.14em", fontWeight: 700 }}>
            HAVE A PROJECT IN MIND?
          </p>
          <h2>Let&apos;s build something great.</h2>
          <p>
            I&apos;m currently open to frontend roles and freelance projects.
            Tell me about your product — I usually reply within 24 hours.
          </p>
          <div>
            <a className="footer-mail" href={`mailto:${profile.email}`}>
              ✉&nbsp; {profile.email}
            </a>
          </div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.bookingUrl} target="_blank" rel="noreferrer">
              Book a call ↗
            </a>
            <Link href="/projects">My works →</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Armin Bakhshi. All rights reserved.</span>
          <span>
            Built with TypeScript, React &amp; Next.js · {profile.location}
          </span>
        </div>

        <div ref={giantRef} className="giant-name" aria-hidden="true">
          Armin Bakhshi
        </div>
      </div>
    </footer>
  );
}
