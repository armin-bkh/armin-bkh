import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SkillBadge from "@/components/SkillBadge";

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
    <div className="container">
      <div className="detail-wrap">
        <Reveal>
          <Link href="/projects" className="detail-back">
            ← All projects
          </Link>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="detail-hero"
            style={{
              background: `linear-gradient(135deg, hsl(${project.hue} 45% 18%) 0%, hsl(${project.hue} 55% 36%) 55%, hsl(${(project.hue + 40) % 360} 65% 48%) 100%)`,
            }}
          >
            <div className="work-cover-grid" />
            <span className="detail-cat">
              {project.category} · {project.year}
            </span>
            <h1>{project.title}</h1>
            <div className="detail-meta-grid">
              <div>
                <span>Role</span>
                <b>{project.role}</b>
              </div>
              <div>
                <span>Timeline</span>
                <b>{project.timeline}</b>
              </div>
              <div>
                <span>Stack</span>
                <b>{project.stack.slice(0, 3).join(" · ")}</b>
              </div>
              <div>
                <span>Links</span>
                <b>
                  <a href={project.liveUrl} style={{ textDecoration: "underline" }}>
                    Live ↗
                  </a>{" "}
                  ·{" "}
                  <a href={project.repoUrl} style={{ textDecoration: "underline" }}>
                    Code ↗
                  </a>
                </b>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="detail-body">
          <Reveal delay={0.05}>
            <div className="detail-card">
              <h2>Overview</h2>
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <h2 style={{ marginTop: 28 }}>Tech stack</h2>
              <div className="skill-chips">
                {project.stack.map((s) => (
                  <SkillBadge key={s} name={s} size="sm" />
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="detail-card">
              <h2>Highlights</h2>
              <ul className="highlight-list">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div style={{ marginTop: 28 }}>
                <Link href={`/projects/${next.slug}`} className="btn btn-secondary btn-sm">
                  Next project: {next.year} →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div style={{ height: 8 }} />
    </div>
  );
}
