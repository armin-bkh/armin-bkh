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
    <div className="container-x">
      <section className="pt-37.5 pb-2 max-md:pt-32.5">
        <Reveal>
          <div className="eyebrow">Resume</div>
          <h1 className="text-[clamp(38px,6vw,64px)] leading-none font-extrabold tracking-[-0.04em]">
            {profile.name} —<br />
            {profile.role}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3.5 max-w-160 text-[17px] leading-[1.65] text-muted">
            {profile.summary}
          </p>
        </Reveal>
      </section>

      <div className="mt-8 flex flex-col gap-5.5">
        {/* Section 1 — summary + contact */}
        <section className="pt-0 pb-2">
          <Reveal>
            <div className="py-2">
              <h2 className="text-[clamp(22px,3vw,30px)] tracking-[-0.03em]">
                Summary &amp; contact
              </h2>
              <p className="mt-1.5 mb-7 text-[15.5px] text-muted">
                Frontend developer, deep in TypeScript, React and Next.js — with
                backend-service experience across Web3, DeFi and mobile
                products.
              </p>
              <div className="flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-muted">
                <span>
                  Email: <b className="font-bold text-ink">{profile.email}</b>
                </span>
                <span>
                  Location:{" "}
                  <b className="font-bold text-ink">{profile.location}</b>
                </span>
                <span>
                  Status:{" "}
                  <b className="font-bold text-ink">{profile.availability}</b>
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-primary btn-sm"
                >
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
        <section className="pt-0 pb-2">
          <StickySection
            index="01"
            title="Experience"
            sub="Where I've worked, my role, dates and what I did there."
          >
            <div className="flex flex-col divide-y divide-line">
              {experience.map((job) => (
                <Reveal key={job.company}>
                  <article className="py-6.5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[19px] tracking-[-0.02em]">
                          {job.role}
                        </h3>
                        <div className="mt-1 text-[14.5px] text-muted">
                          {job.company} · {job.location}
                        </div>
                      </div>
                      <span className="exp-period">{job.period}</span>
                    </div>
                    <p className="mt-3 text-[15.5px] leading-[1.6]">
                      {job.summary}
                    </p>
                    <ul className="mt-3 ml-4.5 flex flex-col gap-2 text-[15px] leading-[1.6] text-muted">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </StickySection>
        </section>

        {/* Section 3 — skills */}
        <section className="pt-0 pb-2">
          <StickySection
            index="02"
            title="Skills"
            sub="Grouped by area — frontend first, with backend, data, auth, Web3 and testing to ship end to end."
          >
            <div className="flex flex-col divide-y divide-line">
              {skills.map((group) => (
                <Reveal key={group.area}>
                  <div className="grid items-start gap-4.5 py-5.5 max-md:grid-cols-1 md:grid-cols-[140px_1fr]">
                    <h3 className="pt-1.75 text-[13px] tracking-widest uppercase max-md:p-0">
                      {group.area}
                    </h3>
                    <div className="skill-chips flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <SkillBadge key={s} name={s} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </StickySection>
        </section>

        {/* Section 4 — education */}
        <section className="pt-0 pb-2">
          <StickySection
            index="03"
            title="Education"
            sub="Degrees and certificates."
          >
            <div className="flex flex-col divide-y divide-line">
              {education.map((e) => (
                <Reveal key={e.school}>
                  <div className="py-5">
                    <h3 className="text-[17px]">{e.school}</h3>
                    <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[13.5px] text-muted">
                      <span>{e.org}</span>
                      <span>·</span>
                      <span className="exp-period">{e.period}</span>
                    </div>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-muted">
                      {e.detail}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/projects" className="btn btn-secondary btn-sm">
                See my works →
              </Link>
            </div>
          </StickySection>
        </section>
      </div>
      <div className="h-2" />
    </div>
  );
}
