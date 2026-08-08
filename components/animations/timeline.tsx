"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type TimelineStep = { label: string; title: string; desc: string };

export default function Timeline({ steps }: { steps: TimelineStep[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="timeline">
      {steps.map((step, i) => (
        <div
          key={i}
          className="tl-item"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          <motion.div
            className="tl-dot"
            animate={{
              scale: hovered === i ? 1.3 : 1,
              boxShadow: hovered === i ? "0 0 14px rgba(99,102,241,0.85)" : "0 0 0px rgba(99,102,241,0)",
              backgroundColor: hovered === i ? "#6366f1" : "#1a1a24",
            }}
            transition={{ duration: 0.25 }}
          />
          <div className="tl-year">{step.label}</div>
          <motion.div
            className="tl-title"
            animate={{ color: hovered === i ? "#a5b4fc" : "var(--color-text)" }}
            transition={{ duration: 0.2 }}
          >
            {step.title}
          </motion.div>
          <motion.div
            className="tl-desc"
            initial={false}
            animate={{
              height: hovered === i ? "auto" : 0,
              opacity: hovered === i ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            {step.desc}
          </motion.div>
        </div>
      ))}
    </div>
  );
}