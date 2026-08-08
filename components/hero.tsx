"use client";
import AnimatedText from "@/components/animations/animatedtext";
import { useLanguage } from "@/context/languagecontext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero hero-full">
      <motion.p
        className="hero-role"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t.hero.role}
      </motion.p>

      <h1 className="hero-title">
        <AnimatedText text={`${t.hero.greeting} Alvan`} />
      </h1>

      <motion.p
        className="hero-welcome"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        {t.hero.welcome}
      </motion.p>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.8 }, y: { repeat: Infinity, duration: 1.8 } }}
      >
        {t.hero.scrollHint}
      </motion.div>
    </section>
  );
}