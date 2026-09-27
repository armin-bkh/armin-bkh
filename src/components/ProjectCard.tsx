import Link from "next/link";
import type { Project } from "@/data/portfolio";
import Reveal from "./Reveal";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Link href={`/projects/${project.slug}`} className="work-card">
        <div
          className="work-cover"
          style={{
            background: `linear-gradient(135deg, hsl(${project.hue} 45% 22%) 0%, hsl(${project.hue} 60% 42%) 55%, hsl(${(project.hue + 40) % 360} 70% 55%) 100%)`,
          }}
        >
          <div className="work-cover-grid" />
          <span className="work-cover-letter">
            {project.title.charAt(0)}
          </span>
          <span className="year-tag">{project.year}</span>
        </div>
        <div className="work-body">
          <span className="work-cat">{project.category}</span>
          <h3 className="work-title">{project.title}</h3>
          <p className="work-desc">{project.tagline}</p>
          <div className="work-foot">
            <div className="skill-chips">
              {project.stack.slice(0, 3).map((s) => (
                <SkillBadge key={s} name={s} size="sm" />
              ))}
            </div>
            <span className="work-arrow">→</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
