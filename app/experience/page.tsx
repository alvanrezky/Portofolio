"use client";
import { useState } from "react";
import { experienceData } from "@/data/experience";
import { useLanguage } from "@/context/languagecontext";
import ExperienceTabs from "@/features/experience/ExperienceTabs";
import ExperienceTerminal from "@/features/experience/ExperienceTerminal";
import ExperienceCard from "@/features/experience/ExperienceCard";
import FadeInSection from "@/components/animations/fadeinsections";

const semesters = Array.from(new Set(experienceData.map((d) => d.semester))).sort((a, b) => a - b);

export default function ExperiencePage() {
  const { t } = useLanguage();
  const [activeSem, setActiveSem] = useState(semesters[0]);
  const items = experienceData.filter((d) => d.semester === activeSem);

  return (
    <main className="exp-page">
      <div className="exp-hero">
        <p className="exp-path-label">{t.experience.label}</p>
        <h1 className="exp-title">{t.experience.heading}</h1>
        <p className="exp-subtitle">{t.experience.description}</p>
      </div>

      <ExperienceTabs semesters={semesters} active={activeSem} onChange={setActiveSem} />

      <FadeInSection key={activeSem}>
        <ExperienceTerminal semester={activeSem} count={items.length} />
        <div className="exp-card-grid">
          {items.map((item, i) => (
            <ExperienceCard key={item.judul} item={item} index={i} />
          ))}
        </div>
      </FadeInSection>
    </main>
  );
}