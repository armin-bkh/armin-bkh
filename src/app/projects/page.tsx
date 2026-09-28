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
      <section className="pt-37.5 pb-2 max-md:pt-32.5">
        <Reveal>
          <div className="eyebrow">Portfolio</div>
          <h1 className="text-[clamp(38px,6vw,64px)] leading-none font-extrabold tracking-[-0.04em]">
            Projects
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-3.5 max-w-160 text-[17px] leading-[1.65] text-muted">
            Everything here shipped to real users — a Web3 game, a trading
            app, a CMS-driven site and a cross-platform climate app. Built
            with TypeScript, React and Next.js. Open any card for the full
            case study.
          </p>
        </Reveal>
      </section>

      <section className="pt-8 pb-2">
        <div className="grid gap-5.5 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <div className="h-2" />
    </div>
  );
}
