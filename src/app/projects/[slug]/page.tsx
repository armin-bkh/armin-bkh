import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SkillBadge from "@/components/SkillBadge";
import HorizontalGallery from "@/components/HorizontalGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="container-x">
      <div className="pt-37.5 pb-2 max-md:pt-32.5">
        <Reveal>
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
          >
            ← All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="relative overflow-hidden rounded-[28px] p-[clamp(28px,5vw,56px)] text-white"
            style={{
              background: `linear-gradient(135deg, hsl(${project.hue} 45% 18%) 0%, hsl(${project.hue} 55% 36%) 55%, hsl(${(project.hue + 40) % 360} 65% 48%) 100%)`,
            }}
          >
            {project.cover && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.cover}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: `linear-gradient(135deg, hsl(${project.hue} 45% 18%) 0%, hsl(${project.hue} 55% 36%) 55%, hsl(${(project.hue + 40) % 360} 65% 48%) 100%)`,
                  }}
                />
              </>
            )}
            <div className="cover-grid absolute inset-0" />
            <span className="relative mb-3.5 inline-block text-[13px] font-bold tracking-widest uppercase opacity-85">
              {project.category} · {project.year}
            </span>
            <h1 className="relative text-[clamp(32px,5vw,56px)] leading-[1.02] font-extrabold tracking-[-0.04em]">
              {project.title}
            </h1>
            <div className="relative mt-8 grid grid-cols-2 gap-4 border-t border-white/25 pt-6 md:grid-cols-4">
              {[
                { label: "Role", value: project.role },
                { label: "Timeline", value: project.timeline },
                {
                  label: "Stack",
                  value: project.stack.slice(0, 3).join(" · "),
                },
              ].map((m) => (
                <div key={m.label}>
                  <span className="mb-1.5 block text-[12px] tracking-widest uppercase opacity-70">
                    {m.label}
                  </span>
                  <b className="text-[15px]">{m.value}</b>
                </div>
              ))}
              <div>
                <span className="mb-1.5 block text-[12px] tracking-widest uppercase opacity-70">
                  Links
                </span>
                <b className="text-[15px]">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2"
                    >
                      {project.liveUrl.includes("x.com") ||
                      project.liveUrl.includes("twitter.com")
                        ? "X ↗"
                        : "Live ↗"}
                    </a>
                  )}
                  {project.liveUrl !== "#" && project.repoUrl !== "#" && " · "}
                  {project.repoUrl !== "#" && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2"
                    >
                      Code ↗
                    </a>
                  )}
                  {project.liveUrl === "#" && project.repoUrl === "#" && (
                    project.status === "offline" ? (
                      <span className="font-normal">
                        <span className="opacity-70">Offline</span>
                        {project.gallery && project.gallery.length > 0 && (
                          <>
                            {" · "}
                            <a href="#screens" className="underline underline-offset-2">
                              Demos ↓
                            </a>
                          </>
                        )}
                      </span>
                    ) : (
                      <span className="font-normal opacity-70">Private</span>
                    )
                  )}
                </b>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5.5 grid gap-5.5 md:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.05}>
            <div className="py-2">
              <h2 className="mb-4 text-[22px] tracking-[-0.02em]">Overview</h2>
              {project.description.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 text-[15.5px] leading-[1.7] text-muted last:mb-0"
                >
                  {para}
                </p>
              ))}
              <h2 className="mt-7 mb-4 text-[22px] tracking-[-0.02em]">
                Tech stack
              </h2>
              <div className="skill-chips flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <SkillBadge key={s} name={s} size="sm" />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="py-2">
              <h2 className="mb-4 text-[22px] tracking-[-0.02em]">
                Highlights
              </h2>
              <ul className="flex list-none flex-col gap-3">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[15px] leading-[1.55] text-[#333333] before:shrink-0 before:font-extrabold before:content-['→']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link
                  href={`/projects/${next.slug}`}
                  className="btn btn-secondary btn-sm"
                >
                  Next project: {next.year} →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <HorizontalGallery images={project.gallery} title={project.title} />
        )}
      </div>
      <div className="h-2" />
    </div>
  );
}
