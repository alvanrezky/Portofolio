"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/context/themecontext";
import { useLanguage } from "@/context/languagecontext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <span className="navbar-logo">alvan.dev</span>
        <button
          className="navbar-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div className={`navbar-links ${mobileOpen ? "navbar-links-open" : ""}`}>
        <Link href="/" onClick={() => setMobileOpen(false)}>{t.nav.home}</Link>
        <Link href="/about" onClick={() => setMobileOpen(false)}>{t.nav.about}</Link>
        <Link href="/projects" onClick={() => setMobileOpen(false)}>{t.nav.projects}</Link>
        <Link href="/experience" onClick={() => setMobileOpen(false)}>{t.nav.experience}</Link>
      </div>

      <div className={`navbar-controls ${mobileOpen ? "navbar-controls-open" : ""}`}>
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