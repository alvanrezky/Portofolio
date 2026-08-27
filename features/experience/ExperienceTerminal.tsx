"use client";
import { useLanguage } from "@/context/languagecontext";

export default function ExperienceTerminal({ semester, count }: { semester: number; count: number }) {
  const { t } = useLanguage();

  return (
    <div className="exp-terminal">
      <div className="exp-terminal-top">
        <span className="frame-dot dot-red" />
        <span className="frame-dot dot-yellow" />
        <span className="frame-dot dot-green" />
        <span className="exp-terminal-filename">semester-{semester}.log</span>
      </div>
      <div className="exp-terminal-line">
        <span className="exp-terminal-user">alvan@dev</span>
        <span className="exp-terminal-prompt">:~$</span> {t.experience.terminalPrefix} semester-{semester}{" "}
        <span className="exp-terminal-comment">// {count} {t.experience.terminalActivities}</span>
      </div>
    </div>
  );
}