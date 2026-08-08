"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function LanyardCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <div className="lanyard-wrapper">
      <motion.div
        className="lanyard-card"
        style={{ x, y, rotate }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragElastic={0.6}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
        whileTap={{ scale: 1.05 }}
      >
        <div className="lanyard-clip" />
        <div className="lanyard-photo">
          <img src="/foto-alvan.jpg" alt="Foto Alvan" draggable={false} />
        </div>
        <div className="lanyard-info">
          <p className="lanyard-name">Alvan Priandana Adi</p>
          <p className="lanyard-role">Sistem Informasi</p>
        </div>
      </motion.div>
    </div>
  );
}