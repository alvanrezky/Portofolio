"use client";
import { projects } from "@/data/project";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/languagecontext";

export default function ProjectsSection() {
  const { t } = useLanguage();
  const dataProjects = projects.filter(function (p) {
    return p.track === "B";
  });
  const appProjects = projects.filter(function (p) {
    return p.track === "A";
  });

  return (
    <section className="projects-section">
      <h2>{t.projects.heading}</h2>
      <div className="projects-columns">
        <div className="projects-column">
          <p className="column-label">{t.projects.columnData}</p>
          {dataProjects.map(function (project) {
            return <ProjectCard key={project.slug} project={project} />;
          })}
        </div>
        <div className="projects-column">
          <p className="column-label">{t.projects.columnApp}</p>
          {appProjects.map(function (project) {
            return <ProjectCard key={project.slug} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}