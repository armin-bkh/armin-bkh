import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { projects } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";
import SkillBadge from "@/components/SkillBadge";
import HorizontalGallery from "@/components/HorizontalGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const t = await getTranslations(`ProjectContent.${slug}`);
  const description = t("tagline");
  const images = project.cover ? [{ url: `${siteUrl}${project.cover}` }] : undefined;
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description,
      url: `/projects/${slug}`,
      type: "article",
      images,
    },
    twitter: { card: "summary_large_image", title: project.title, description, images },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations("ProjectDetail");
  const tc = await getTranslations(`ProjectContent.${slug}`);
  const description = tc.raw("description") as string[];
  const highlights = tc.raw("highlights") as string[];

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
            {t("backToAll")}
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
                { label: t("role"), value: project.role },
                { label: t("timeline"), value: project.timeline },
                {
                  label: t("stack"),
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
                  {t("links")}
                </span>
                <b className="text-[15px]">
                  {project.links && project.links.length > 0 ? (
                    project.links.map((l, i) => (
                      <span key={l.href}>
                        {i > 0 && " · "}
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2"
                        >
                          {l.label} ↗
                        </a>
                      </span>
                    ))
                  ) : (
                    <>
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2"
                        >
                          {project.liveUrl.includes("x.com") ||
                          project.liveUrl.includes("twitter.com")
                            ? t("x")
                            : t("live")}
                        </a>
                      )}
                      {project.liveUrl !== "#" &&
                        project.repoUrl !== "#" &&
                        " · "}
                      {project.repoUrl !== "#" && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline underline-offset-2"
                        >
                          {t("code")}
                        </a>
                      )}
                      {project.liveUrl === "#" &&
                        project.repoUrl === "#" &&
                        (project.status === "offline" ? (
                          <span className="font-normal">
                            <span className="opacity-70">{t("offline")}</span>
                            {project.gallery &&
                              project.gallery.length > 0 && (
                                <>
                                  {" · "}
                                  <a
                                    href="#screens"
                                    className="underline underline-offset-2"
                                  >
                                    {t("demos")}
                                  </a>
                                </>
                              )}
                          </span>
                        ) : (
                          <span className="font-normal opacity-70">
                            {t("private")}
                          </span>
                        ))}
                    </>
                  )}
                </b>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5.5 grid gap-5.5 md:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.05}>
            <div className="py-2">
              <h2 className="mb-4 text-[22px] tracking-[-0.02em]">
                {t("overview")}
              </h2>
              {description.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 text-[15.5px] leading-[1.7] text-muted last:mb-0"
                >
                  {para}
                </p>
              ))}
              <h2 className="mt-7 mb-4 text-[22px] tracking-[-0.02em]">
                {t("techStack")}
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
                {t("highlights")}
              </h2>
              <ul className="flex list-none flex-col gap-3">
                {highlights.map((h) => (
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
                  {t("nextProject", { year: next.year })}
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
