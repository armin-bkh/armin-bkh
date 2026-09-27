import Link from "next/link";
import { profile, experience, skills, education } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import StickySection from "@/components/StickySection";
import SkillBadge from "@/components/SkillBadge";

export const metadata = {
  title: "Resume — Armin Bakhshi",
  description: "Experience, skills and education of Armin Bakhshi.",
};

export default function ResumePage() {
  return (
    <div className="container">
      <section className="page-hero">
        <Reveal>
          <div className="eyebrow">Resume</div>
          <h1>
            {profile.name} —<br />
            {profile.role}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p>{profile.summary}</p>
        </Reveal>
      </section>

      <div className="resume-grid" style={{ marginTop: 32 }}>
        {/* Section 1 — summary + contact */}
        <section className="section" style={{ paddingTop: 0 }}>
          <Reveal>
            <div className="resume-card">
              <h2>Summary &amp; contact</h2>
              <p className="resume-sub">
                Frontend developer, deep in TypeScript, React and Next.js — with
                backend-service experience across Web3, CMS, E2E and B2B
                products.
              </p>
              <div className="hero-meta" style={{ border: "none", padding: 0, margin: 0 }}>
                <span>
                  Email: <b>{profile.email}</b>
                </span>
                <span>
                  Location: <b>{profile.location}</b>
                </span>
                <span>
                  Status: <b>{profile.availability}</b>
                </span>
              </div>
              <div className="contact-row">
                <a href={`mailto:${profile.email}`} className="btn btn-primary btn-sm">
                  ✉ {profile.email}
                </a>
                <a
                  href={profile.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Book a call
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light btn-sm"
                >
                  GitHub ↗
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-light btn-sm"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Section 2 — experience */}
        <section className="section" style={{ paddingTop: 0 }}>
          <StickySection
            index="01"
            title="Experience"
            sub="Where I've worked, my role, dates and what I did there."
          >
            {experience.map((job) => (
              <Reveal key={job.company}>
                <article className="exp-item">
                  <div className="exp-head">
                    <div>
                      <h3>{job.role}</h3>
                      <div className="exp-company">
                        {job.company} · {job.location}
                      </div>
                    </div>
                    <span className="exp-period">{job.period}</span>
                  </div>
                  <p className="exp-summary">{job.summary}</p>
                  <ul className="exp-bullets">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </StickySection>
        </section>

        {/* Section 3 — skills */}
        <section className="section" style={{ paddingTop: 0 }}>
          <StickySection
            index="02"
            title="Skills"
            sub="Grouped by area — frontend first, with backend, data, auth, Web3 and testing to ship end to end."
          >
            {skills.map((group) => (
              <Reveal key={group.area}>
                <div className="skill-row">
                  <h3>{group.area}</h3>
                  <div className="skill-chips">
                    {group.items.map((s) => (
                      <SkillBadge key={s} name={s} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </StickySection>
        </section>

        {/* Section 4 — education */}
        <section className="section" style={{ paddingTop: 0 }}>
          <StickySection
            index="03"
            title="Education"
            sub="Degrees and certificates."
          >
            {education.map((e) => (
              <Reveal key={e.school}>
                <div className="edu-item">
                  <h3>{e.school}</h3>
                  <div className="edu-meta">
                    <span>{e.org}</span>
                    <span>·</span>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <p>{e.detail}</p>
                </div>
              </Reveal>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link href="/projects" className="btn btn-secondary btn-sm">
                See my works →
              </Link>
            </div>
          </StickySection>
        </section>
      </div>
      <div style={{ height: 8 }} />
    </div>
  );
}
