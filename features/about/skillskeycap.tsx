"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/languagecontext";

const skills = [
  { name: "Next.js", cls: "k-nextjs" },
  { name: "TypeScript", cls: "k-ts" },
  { name: "Python", cls: "k-py" },
  { name: "SQL", cls: "k-sql" },
  { name: "Figma", cls: "k-figma" },
  { name: "Git", cls: "k-git" },
];

const icons: Record<string, React.ReactNode> = {
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.6" />
      <path
        d="M8 8L16 16M16 8V15"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24">
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="white"
      >
        TS
      </text>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24">
      <path
        d="M8 4c-2 0-3 1-3 3v2h5v1H4c-1.5 0-2.5 1-2.5 3.5S3 17 4.5 17H6v-2.2c0-1.8 1.5-3.3 3.3-3.3H14c1.4 0 2.5-1.1 2.5-2.5V7c0-1.8-3-3-6-3z"
        fill="#4B8BBE"
      />
      <path
        d="M16 20c2 0 3-1 3-3v-2h-5v-1h6c1.5 0 2.5-1 2.5-3.5S19 7 17.5 7H16v2.2c0 1.8-1.5 3.3-3.3 3.3H8c-1.4 0-2.5 1.1-2.5 2.5V17c0 1.8 3 3 6 3z"
        fill="#FFD43B"
      />
    </svg>
  ),
  SQL: (
    <svg viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="white" strokeWidth="1.5" />
      <path
        d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 24 24">
      <circle cx="9" cy="6" r="3" fill="#F24E1E" />
      <circle cx="9" cy="12" r="3" fill="#A259FF" />
      <circle cx="9" cy="18" r="3" fill="#0ACF83" />
      <circle cx="15" cy="6" r="3" fill="#FF7262" />
      <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="7" cy="6" r="2" stroke="white" strokeWidth="1.6" />
      <circle cx="7" cy="18" r="2" stroke="white" strokeWidth="1.6" />
      <circle cx="17" cy="12" r="2" stroke="white" strokeWidth="1.6" />
      <path
        d="M7 8v8M9 12h6M9 6h4a4 4 0 014 4"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export default function SkillsKeycap() {
  const { t } = useLanguage();

  return (
    <div className="skills-layout">
      <div className="skills-intro">
        <p className="section-label">{t.about.skillsTitle}</p>
        <h2 className="skills-heading">{t.about.skillsHeading}</h2>
        <p className="skills-desc">{t.about.skillsDesc}</p>
      </div>

      <div className="keyboard-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="keycap-wrap">
            <div className="keycap-base" />
            <motion.div
              className={`keycap ${skill.cls}`}
              whileHover={{ y: 6 }}
              whileTap={{ y: 8 }}
              transition={{ duration: 0.1 }}
            >
              <div className="keycap-top">{icons[skill.name]}</div>
              <div className="keycap-front">{skill.name}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}