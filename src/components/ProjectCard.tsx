import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Project } from "@/data/portfolio";
import { cardGradient } from "@/lib/cover";
import Reveal from "./Reveal";
import SkillBadge from "./SkillBadge";

export default async function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const t = await getTranslations(`ProjectContent.${project.slug}`);
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Link href={`/projects/${project.slug}`} className="group flex flex-col">
        <div
          className="relative flex h-55 items-center justify-center overflow-hidden rounded-[20px]"
          style={
            project.cover
              ? undefined
              : {
                  background: cardGradient(project.hue),
                }
          }
        >
          {project.cover ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.cover}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background: cardGradient(project.hue),
                }}
              />
              <div className="cover-grid absolute inset-0" />
            </>
          ) : (
            <>
              <div className="cover-grid absolute inset-0" />
              <span className="text-[110px] font-extrabold tracking-tighter text-white/90 [text-shadow:0_4px_30px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-[1.08] group-hover:-rotate-2">
                {project.title.charAt(0)}
              </span>
            </>
          )}
          <span className="year-tag absolute top-3.5 right-3.5">
            {project.year}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 px-1 pt-5 pb-1.5">
          <span className="text-[12.5px] font-bold tracking-[0.08em] text-faint uppercase">
            {project.category}
          </span>
          <h3 className="text-[22px] leading-[1.15] font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-[15px] leading-relaxed text-muted">
            {t("tagline")}
          </p>
          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="skill-chips flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((s) => (
                <SkillBadge key={s} name={s} size="sm" />
              ))}
            </div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-lg text-white shadow-[0_10px_20px_-10px_rgba(11,11,12,0.6)] transition-transform duration-300 group-hover:-rotate-45">
              →
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
