"use client";
import { useLanguage } from "@/context/languagecontext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>© 2026 Alvan — {t.footer.text}</p>
    </footer>
  );
}