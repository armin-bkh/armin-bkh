import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { profile, projects, experience, skills, education } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export const metadata = {
  title: "Profile — Armin Bakhshi",
  description:
    "Everything about Armin Bakhshi in one place: profile, experience, projects, skills, education and contact.",
};

export default async function AboutPage() {
  const tSite = await getTranslations("Site");
  const tMeta = await getTranslations("Meta");
  const tCommon = await getTranslations("Common");
  const tProfile = await getTranslations("Profile");
  const tExp = await getTranslations("Experience");
  const tEdu = await getTranslations("Education");

  return (
    <div className="container-x">
      {/* ---------- Profile ---------- */}
      <section className="pt-37.5 pb-2 max-md:pt-32.5">
        <Reveal>
          <div className="flex items-center gap-4.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar}
              alt={profile.name}
              width={84}
              height={84}
              className="h-21 w-21 rounded-full border-[3px] border-white bg-surface-2 object-cover shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)]"
            />
            <span className="pill">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {tSite("availability")}
            </span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="eyebrow mt-6">Profile</div>
          <h1 className="text-[clamp(38px,6vw,64px)] leading-none font-extrabold tracking-[-0.04em]">
            {profile.name} —<br />
            {profile.role}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-3.5 max-w-160 text-[17px] leading-[1.65] text-muted">
            {tSite("tagline")} {tSite("summary")}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              ✉ {profile.email}
            </a>
            <a
              href={profile.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              {tCommon("bookACall")}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              {tCommon("github")}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-light"
            >
              {tCommon("linkedIn")}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-line pt-6 text-sm text-muted">
            <span>
              {tMeta("based")}{" "}
              <b className="font-bold text-ink">{profile.location}</b>
            </span>
            <span>
              {tMeta("status")}{" "}
              <b className="font-bold text-ink">{tSite("availability")}</b>
            </span>
            <span>
              {tMeta("stack")}{" "}
              <b className="font-bold text-ink">TypeScript · React · Next.js</b>
            </span>
          </div>
        </Reveal>
      </section>

      {/* ---------- Experience ---------- */}
      <section className="pt-18 pb-2">
        <Reveal>
          <div className="eyebrow">{tProfile("experienceEyebrow")}</div>
          <h2 className="text-[clamp(30px,4.5vw,46px)] leading-[1.02] font-extrabold tracking-[-0.04em]">
            {tProfile("experienceTitle")}
          </h2>
        </Reveal>
        <div className="mt-7 flex flex-col divide-y divide-line border-y border-line">
          {experience.map((job) => {
            const bullets = tExp.raw(`${job.key}.bullets`) as string[];
            return (
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
                    {tExp(`${job.key}.summary`)}
                  </p>
                  <ul className="mt-3 ml-4.5 flex flex-col gap-2 text-[15px] leading-[1.6] text-muted">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <section className="pt-18 pb-2">
        <Reveal>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <div className="eyebrow">{tProfile("workEyebrow")}</div>
              <h2 className="text-[clamp(30px,4.5vw,46px)] leading-[1.02] font-extrabold tracking-[-0.04em]">
                {tProfile("projectsTitle")}
              </h2>
            </div>
            <Link href="/projects" className="link-more">
              {tCommon("allProjects")}
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5.5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- Skills ---------- */}
      <section className="pt-18 pb-2">
        <Reveal>
          <div className="eyebrow">{tProfile("skillsEyebrow")}</div>
          <h2 className="text-[clamp(30px,4.5vw,46px)] leading-[1.02] font-extrabold tracking-[-0.04em]">
            {tProfile("skillsTitle")}
          </h2>
        </Reveal>
        <div className="mt-7 flex flex-col divide-y divide-line border-y border-line">
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
      </section>

      {/* ---------- Education ---------- */}
      <section className="pt-18 pb-2">
        <Reveal>
          <div className="eyebrow">{tProfile("educationEyebrow")}</div>
          <h2 className="text-[clamp(30px,4.5vw,46px)] leading-[1.02] font-extrabold tracking-[-0.04em]">
            {tProfile("educationTitle")}
          </h2>
        </Reveal>
        <div className="mt-7 flex flex-col divide-y divide-line border-y border-line">
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
                  {tEdu(`${e.key}.detail`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="pt-18 pb-2">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
            <div className="max-w-140">
              <div className="eyebrow">{tProfile("contactEyebrow")}</div>
              <h2 className="text-[26px] tracking-[-0.03em]">
                {tProfile("contactTitle")}
              </h2>
              <p className="mt-3 max-w-140 text-[16.5px] leading-relaxed text-muted">
                {tProfile("contactBody")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {tCommon("bookACall")}
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-secondary">
                ✉ {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
      <div className="h-2" />
    </div>
  );
}
