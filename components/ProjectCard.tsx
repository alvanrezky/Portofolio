"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Project } from "@/data/project";
import { useLanguage } from "@/context/languagecontext";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { t } = useLanguage();

  const rotateX = useSpring(useTransform(y, [-50, 50], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="project-card"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
    >
      <div className="project-frame">
        <div className="frame-bar">
          <span className="frame-dot dot-red" />
          <span className="frame-dot dot-yellow" />
          <span className="frame-dot dot-green" />
        </div>

        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="frame-thumbnail"
          />
        ) : (
          <div className="frame-placeholder" />
        )}

        {project.logo && (
          <img src={project.logo} alt="" className="project-logo-badge" />
        )}
      </div>

      <div className="project-body">
        <span className={`track-badge track-${project.track}`}>
          {project.track === "A" ? t.projects.appLabel : t.projects.dataLabel}
        </span>

        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="tech-tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="btn-outline">
              {project.demoLabel || "Live Demo"}
            </a>
          )}
          <Link href={`/projects/${project.slug}`} className="btn-gradient-sm">
            {t.projects.documentation}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}