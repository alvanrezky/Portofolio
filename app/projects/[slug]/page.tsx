import { projects } from "@/data/project";
import { notFound } from "next/navigation";
import Timeline from "@/components/animations/timeline";
import Coverflow from "@/components/animations/coverflow";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="project-detail">
      <span className={`track-badge track-${project.track}`}>
        {project.track === "A" ? "Web App" : "Data"}
      </span>
      <h1>{project.title}</h1>
      <p className="project-detail-summary">{project.summary}</p>

      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="detail-thumbnail"
        />
      )}

      {project.background && (
        <section className="detail-section detail-background">
          <h2>Latar Belakang</h2>
          <p>{project.background}</p>
        </section>
      )}

      <div className="detail-links">
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" className="btn-gradient">
            {project.demoLabel || "Live Demo"}
          </a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" className="btn-outline">
            Source Code
          </a>
        )}
      </div>

      <section className="detail-section">
        <h2>Masalah</h2>
        <p>{project.documentation.problem}</p>
      </section>
      <section className="detail-section">
        <h2>Pendekatan</h2>
        <p>{project.documentation.approach}</p>
      </section>
      <section className="detail-section">
        <h2>Insight</h2>
        <p>{project.documentation.insights}</p>
      </section>
      <section className="detail-section">
        <h2>Tantangan</h2>
        <p>{project.documentation.challenges}</p>
      </section>

      {project.timeline && project.timeline.length > 0 && (
        <section className="detail-section">
          <h2>Timeline Pembuatan</h2>
          <Timeline steps={project.timeline} />
        </section>
      )}

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="detail-section">
          <h2>Tampilan Aplikasi</h2>
          <Coverflow slides={project.screenshots} />
        </section>
      )}

      <div className="tech-tags">
        {project.techStack.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </main>
  );
}