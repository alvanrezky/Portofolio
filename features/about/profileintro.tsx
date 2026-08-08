"use client";
import { useLanguage } from "@/context/languagecontext";

export default function ProfileIntro() {
  const { t } = useLanguage();

  return (
    <div className="profile-intro">
      <p className="section-label">{t.about.label}</p>
      <h1>Alvan Priandana Adi</h1>
      <p className="bio-text">{t.about.bio}</p>
      <blockquote>"{t.about.quote}"</blockquote>
    </div>
  );
}