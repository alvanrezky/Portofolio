"use client";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block", marginRight: "0.3em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}