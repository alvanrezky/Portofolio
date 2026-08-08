"use client";
import { useEffect, useRef } from "react";

function seedRandom(seed: number) {
  let s = seed;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function ContourBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const baseSvgRef = useRef<SVGSVGElement>(null);
  const glowSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const baseSvg = baseSvgRef.current;
    const glowSvg = glowSvgRef.current;
    if (!baseSvg || !glowSvg) return;

    const width = 1000;
    const height = 700;
    baseSvg.setAttribute("viewBox", "0 0 " + width + " " + height);
    glowSvg.setAttribute("viewBox", "0 0 " + width + " " + height);

    const ns = "http://www.w3.org/2000/svg";
    const defs = document.createElementNS(ns, "defs");
    defs.innerHTML =
      '<linearGradient id="contourGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="#38bdf8"/>' +
      '<stop offset="50%" stop-color="#818cf8"/>' +
      '<stop offset="100%" stop-color="#e879f9"/>' +
      "</linearGradient>";
    glowSvg.appendChild(defs);

    const rand = seedRandom(11);
    const rowCount = 16;

    for (let row = 0; row < rowCount; row++) {
      const y0 = (row * height) / rowCount + 10;
      const amp = 14 + rand() * 22;
      const freq = 1.2 + rand() * 1.6;
      const phase = rand() * Math.PI * 2;

      let d = "M0," + y0 + " ";
      for (let x = 0; x <= width; x += 25) {
        const y = y0 + amp * Math.sin((x / width) * Math.PI * 2 * freq + phase);
        d += "L" + x + "," + y.toFixed(1) + " ";
      }

      const basePath = document.createElementNS(ns, "path");
      basePath.setAttribute("d", d);
      basePath.setAttribute("fill", "none");
      basePath.setAttribute("stroke", "rgba(255,255,255,0.08)");
      basePath.setAttribute("stroke-width", "1.2");
      baseSvg.appendChild(basePath);

      const glowPath = document.createElementNS(ns, "path");
      glowPath.setAttribute("d", d);
      glowPath.setAttribute("fill", "none");
      glowPath.setAttribute("stroke", "url(#contourGrad)");
      glowPath.setAttribute("stroke-width", "1.4");
      glowSvg.appendChild(glowPath);
    }

    function handleMove(e: MouseEvent) {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const cx = (e.clientX / window.innerWidth) * 100;
      const cy = (e.clientY / window.innerHeight) * 100;
      wrap.style.setProperty("--cx", cx + "%");
      wrap.style.setProperty("--cy", cy + "%");
    }

    window.addEventListener("mousemove", handleMove);
    return function () {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="contour-bg" ref={wrapRef}>
      <svg ref={baseSvgRef} preserveAspectRatio="none" />
      <svg ref={glowSvgRef} className="contour-glow" preserveAspectRatio="none" />
    </div>
  );
}