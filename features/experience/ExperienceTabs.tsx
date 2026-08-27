"use client";

export default function ExperienceTabs({
  semesters,
  active,
  onChange,
}: {
  semesters: number[];
  active: number;
  onChange: (s: number) => void;
}) {
  return (
    <div className="exp-crumbbar">
      {semesters.map((s, i) => (
        <span key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {i > 0 && <span className="exp-crumb-sep">·</span>}
          <button
            className={active === s ? "exp-crumb-btn exp-crumb-active" : "exp-crumb-btn"}
            onClick={() => onChange(s)}
          >
            ~/semester-{s}
          </button>
        </span>
      ))}
    </div>
  );
}