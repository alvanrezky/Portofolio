"use client";
import Link from "next/link";
import { useTheme } from "@/context/themecontext";
import { useLanguage } from "@/context/languagecontext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="navbar">
      <span className="navbar-logo">alvan.dev</span>
      <div className="navbar-links">
        <Link href="/">{t.nav.home}</Link>
        <Link href="/about">{t.nav.about}</Link>
        <Link href="/projects">{t.nav.projects}</Link>
      </div>
      <div className="navbar-controls">
        <button onClick={toggleLang} className="toggle-btn" aria-label="Ganti bahasa">
          {lang === "id" ? "EN" : "ID"}
        </button>
        <button onClick={toggleTheme} className="toggle-btn" aria-label="Ganti tema">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}