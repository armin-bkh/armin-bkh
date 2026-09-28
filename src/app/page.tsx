import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { profile, projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export default async function Home() {
  const tSite = await getTranslations("Site");
  const tMeta = await getTranslations("Meta");
  const tHome = await getTranslations("Home");
  const tCommon = await getTranslations("Common");
  const selected = projects.slice(0, 4);

  return (
    <div className="container-x">
      {/* ---------- Hero ---------- */}
      <section className="pt-37.5 pb-10 max-md:pt-32.5">
        <Reveal>
          <div className="flex items-center gap-4.5">
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={profile.name}
                width={84}
                height={84}
                className="h-21 w-21 rounded-full border-[3px] border-white bg-surface-2 object-cover shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)]"
              />
            </div>
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
          <h1 className="mt-3 text-[clamp(40px,7vw,76px)] leading-[0.98] font-extrabold tracking-[-0.045em]">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-[clamp(20px,3.4vw,32px)] leading-[1.15] font-semibold tracking-[-0.03em] text-muted">
            <strong className="text-ink">{profile.role}</strong> —{" "}
            {profile.stack}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-5 max-w-160 text-[17px] leading-[1.65] text-muted">
            {tSite("summary")}
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="btn btn-primary">
              {tCommon("myWorks")}
            </Link>
            <a
              href={profile.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              {tCommon("bookACall")}
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-light">
              ✉ {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-line pt-6 text-sm text-muted">
            <span>
              {tMeta("based")} <b className="font-bold text-ink">{profile.location}</b>
            </span>
            <span>
              {tMeta("focus")}{" "}
              <b className="font-bold text-ink">{tMeta("focusValue")}</b>
            </span>
            <span>
              {tMeta("stack")}{" "}
              <b className="font-bold text-ink">TypeScript · React · Next.js</b>
            </span>
          </div>
        </Reveal>
      </section>

      {/* ---------- Selected works ---------- */}
      <section className="pt-18 pb-2" id="works">
        <Reveal>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <div className="eyebrow">{tHome("portfolioEyebrow")}</div>
              <h2 className="text-[clamp(30px,4.5vw,46px)] leading-[1.02] font-extrabold tracking-[-0.04em]">
                {tHome("selectedTitle")}
              </h2>
              <p className="mt-3 max-w-140 text-[16.5px] leading-relaxed text-muted">
                {tHome("selectedBody")}
              </p>
            </div>
            <Link href="/projects" className="link-more">
              {tCommon("allProjects")}
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5.5 md:grid-cols-2">
          {selected.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ---------- Currently strip ---------- */}
      <section className="pt-18 pb-2">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
            <div className="max-w-140">
              <div className="eyebrow">{tHome("currentlyEyebrow")}</div>
              <h2 className="text-[26px] tracking-[-0.03em]">
                {tHome("currentlyTitle")}
              </h2>
              <p className="mt-3 max-w-140 text-[16.5px] leading-relaxed text-muted">
                {tHome("currentlyBody")}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/resume" className="btn btn-secondary">
                {tCommon("viewResume")}
              </Link>
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                {tCommon("bookACall")}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
      <div className="h-2" />
    </div>
  );
}
