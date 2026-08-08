"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Slide = { src: string; label: string };

export default function Coverflow({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(Math.floor(slides.length / 2));

  return (
    <div className="coverflow-wrap">
      {slides.map((slide, i) => {
        const offset = i - active;
        const isActive = offset === 0;
        return (
          <motion.div
            key={i}
            className={`cf-card ${isActive ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
            animate={{
              x: offset * 95,
              scale: isActive ? 1 : 0.8,
              rotateY: offset * -28,
              opacity: isActive ? 1 : 0.4,
              filter: isActive ? "brightness(1)" : "brightness(0.55)",
              zIndex: 10 - Math.abs(offset),
            }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <img src={slide.src} alt={slide.label} />
            <div className="cf-label">{slide.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}