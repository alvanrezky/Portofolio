"use client";
import Link from "next/link";
import { projects } from "@/data/project";
import { useLanguage } from "@/context/languagecontext";
import Counter from "@/components/animations/counter";
import TiltCard from "@/components/animations/tiltcard";
import FadeInSection from "@/components/animations/fadeinsections";

const uniqueTechCount = new Set(projects.flatMap((p) => p.techStack)).size;

export default function HomeSummary() {
  const { t } = useLanguage();

  const summaryCards = [
    { path: "~/about", icon: "👤", title: t.home.aboutTitle, desc: t.home.aboutDesc, tags: ["Web App", "Data"], href: "/about#tentang", cta: t.home.aboutLink },
    { path: "~/projects", icon: "🗂️", title: t.home.projectsTitle, desc: t.home.projectsDesc, tags: ["Next.js", "Python"], href: "/projects", cta: t.home.projectsLink },
    { path: "~/skills", icon: "⚡", title: t.home.skillsTitle, desc: t.home.skillsDesc, tags: ["TypeScript", "SQL"], href: "/about#skills", cta: t.home.skillsLink },
    { path: "~/contact", icon: "✉️", title: t.home.contactTitle, desc: t.home.contactDesc, tags: ["Email", "LinkedIn", "instagram"], href: "/about#kontak", cta: t.home.contactLink },
  ];

  return (
    <section className="home-summary-section">
      <div className="summary-blob b1" />
      <div className="summary-blob b2" />

      <FadeInSection>
        <div className="summary-header">
          <div>
            <div className="summary-eyebrow">{t.projects.heading}</div>
            <h2 className="summary-heading">{t.home.heading} <span className="accent">{t.home.headingAccent}</span></h2>
          </div>
          <div className="status-pill"><span className="status-dot" /> {t.home.statusPill}</div>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="stats-row">
          <div className="stat-block"><Counter value={projects.length} suffix="+" /><div className="stat-label">{t.home.statProjects}</div></div>
          <div className="stat-block"><Counter value={uniqueTechCount} /><div className="stat-label">{t.home.statTech}</div></div>
          <div className="stat-block"><Counter value={2} /><div className="stat-label">{t.home.statTrack}</div></div>
        </div>
      </FadeInSection>

      <div className="home-summary">
        {summaryCards.map((card, i) => (
          <FadeInSection key={card.title} delay={i * 0.1}>
            <TiltCard className="summary-card">
              <div className="summary-card-topbar">
                <span className="frame-dot dot-red" /><span className="frame-dot dot-yellow" /><span className="frame-dot dot-green" />
                <span className="path">{card.path}</span>
              </div>
              <div className="summary-card-body">
                <div className="summary-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="summary-card-tags">{card.tags.map((tag) => <span key={tag} className="tech-tag">{tag}</span>)}</div>
                <Link href={card.href} className="summary-card-cta">{card.cta} <span className="arrow">→</span></Link>
              </div>
            </TiltCard>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}