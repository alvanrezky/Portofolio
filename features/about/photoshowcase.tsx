"use client";
import { motion } from "framer-motion";
import LanyardCard from "./lanyardcard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};
const fadeOnly = {
  hidden: { opacity: 0 },
  show: { opacity: 0.85, transition: { duration: 0.6 } },
};

export default function PhotoShowcase() {
  return (
    <motion.div
      className="photo-showcase"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="deco-ring"
        variants={fadeOnly}
        animate={{ opacity: 0.5, rotate: 360 }}
        transition={{ rotate: { repeat: Infinity, duration: 20, ease: "linear" }, opacity: { duration: 0.6 } }}
      />
      <motion.div className="deco-shape ds-1" variants={fadeUp} animate={{ y: [0, -12, 0] }} transition={{ y: { repeat: Infinity, duration: 3 } }} />
      <motion.div className="deco-shape ds-2" variants={fadeUp} animate={{ y: [0, -10, 0] }} transition={{ y: { repeat: Infinity, duration: 3.4 } }} />
      <motion.div className="deco-shape ds-3" variants={fadeUp} animate={{ y: [0, -8, 0] }} transition={{ y: { repeat: Infinity, duration: 2.8 } }} />
      <motion.div className="deco-blur" variants={fadeOnly} />
      <motion.div className="deco-chip dc-1" variants={fadeUp}>Web App</motion.div>
      <motion.div className="deco-chip dc-2" variants={fadeUp}>Data Analyst</motion.div>
      <motion.div className="deco-chip dc-3" variants={fadeUp}>Sistem Informasi</motion.div>

      <motion.div variants={fadeUp} className="photo-inner">
        <LanyardCard />
      </motion.div>
    </motion.div>
  );
}