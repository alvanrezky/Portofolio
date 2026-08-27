"use client";
import { useState } from "react";
import { ExperienceItem, jenisColor } from "@/data/experience";

const ROTATIONS = [-3, 2, -1.5, 2.5, -2, 1.5];

export default function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [open, setOpen] = useState(false);
  const rotation = ROTATIONS[index % ROTATIONS.length];
  const color = jenisColor[item.jenis];

  function handleProofClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  return (
    <div
      className={open ? "exp-card exp-card-open" : "exp-card"}
      style={{ transform: open ? "rotate(0deg)" : `rotate(${rotation}deg)` }}
      onClick={() => setOpen((o) => !o)}
    >
      <span className="exp-tag" style={{ background: color.bg, color: color.text }}>
        {item.jenis}
      </span>
      <div className="exp-card-title">{item.judul}</div>
      <div className="exp-card-desc">{item.deskripsiSingkat}</div>
      <div className="exp-card-caption">Semester {item.semester}</div>

      {open && (
        <div className="exp-card-detail">
          <p>{item.deskripsiLengkap}</p>

          {item.buktiLampiran && item.buktiUrl && (
            <a href={item.buktiUrl} target="_blank" rel="noopener noreferrer" className="exp-proof" onClick={handleProofClick}>
              📎 {item.buktiLampiran} ↗
            </a>
          )}

          {item.buktiLampiran && !item.buktiUrl && (
            <div className="exp-proof">📎 {item.buktiLampiran}</div>
          )}

          {!item.buktiLampiran && (
            <div className="exp-no-proof">Tidak ada lampiran bukti</div>
          )}
        </div>
      )}
    </div>
  );
}