import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Armin Bakhshi",
  description: "Web3, CMS, E2E and B2B projects by Armin Bakhshi.",
};

export default function ProjectsPage() {
  return (
    <div className="container">
      <section className="page-hero">
        <Reveal>
          <div className="eyebrow">Portfolio</div>
          <h1>Projects</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Everything here shipped to real users — Web3 dashboards, headless
            CMS platforms, end-to-end commerce and B2B tools. Built with
            TypeScript, React and Next.js, integrated with backend services.
            Open any card for the full case study.
          </p>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="works-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <div style={{ height: 8 }} />
    </div>
  );
}
