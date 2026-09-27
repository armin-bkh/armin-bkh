import Link from "next/link";
import { profile, projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const selected = projects.slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <div className="container">
        <section className="hero">
          <div className="hero-card">
            <Reveal>
              <div className="hero-top">
                <div className="avatar-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="avatar"
                    width={84}
                    height={84}
                  />
                  <span className="avatar-status" />
                </div>
                <span className="pill">
                  <span className="dot" />
                  {profile.availability}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} as="h1" className="hero-name">
              {profile.name}
            </Reveal>
            <Reveal delay={0.16}>
              <p className="hero-role">
                <strong>{profile.role}</strong> — {profile.stack}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="hero-summary">{profile.summary}</p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="hero-cta">
                <Link href="/projects" className="btn btn-primary">
                  My works →
                </Link>
                <a
                  href={profile.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  Book a call
                </a>
                <a href={`mailto:${profile.email}`} className="btn btn-light">
                  ✉ {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="hero-meta">
                <span>
                  Based: <b>{profile.location}</b>
                </span>
                <span>
                  Focus: <b>Web3 · CMS · E2E · B2B</b>
                </span>
                <span>
                  Stack: <b>TypeScript · React · Next.js</b>
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Selected works ---------- */}
        <section className="section" id="works">
          <Reveal>
            <div className="section-head">
              <div>
                <div className="eyebrow">Portfolio</div>
                <h2 className="section-title">Selected works</h2>
                <p className="section-sub">
                  A few projects across Web3, CMS, end-to-end and B2B products.
                  Each has its own detail page.
                </p>
              </div>
              <Link href="/projects" className="link-more">
                All projects →
              </Link>
            </div>
          </Reveal>
          <div className="works-grid">
            {selected.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </section>

        {/* ---------- About strip ---------- */}
        <section className="section">
          <Reveal>
            <div
              className="resume-card"
              style={{
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <div className="eyebrow">Currently</div>
                <h2 style={{ fontSize: 26, letterSpacing: "-0.03em" }}>
                  Senior Frontend Developer @ Novacart
                </h2>
                <p className="section-sub">
                  Leading frontend for a B2B ordering platform — design system,
                  quote-to-order flows and backend integrations. Open to new
                  roles and freelance.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/resume" className="btn btn-secondary">
                  View resume
                </Link>
                <a
                  href={profile.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Book a call
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
      <div style={{ height: 8 }} />
    </>
  );
}
