import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Armin Bakhshi",
  description: "Web3, CMS, E2E and B2B projects by Armin Bakhshi.",
};

export default function ProjectsPage() {
  return (
    <div className="container-x">
      <section className="pt-[150px] pb-2 max-md:pt-[130px]">
        <Reveal>
          <div className="eyebrow">Portfolio</div>
          <h1 className="text-[clamp(38px,6vw,64px)] leading-none font-extrabold tracking-[-0.04em]">
            Projects
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-[14px] max-w-[640px] text-[17px] leading-[1.65] text-muted">
            Everything here shipped to real users — Web3 dashboards, headless
            CMS platforms, end-to-end commerce and B2B tools. Built with
            TypeScript, React and Next.js, integrated with backend services.
            Open any card for the full case study.
          </p>
        </Reveal>
      </section>

      <section className="pt-8 pb-2">
        <div className="grid gap-[22px] md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <div className="h-2" />
    </div>
  );
}
