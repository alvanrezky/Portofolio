"use client";
import { createContext, useContext, useState } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  t: typeof translations["id"];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("id");
  const toggleLang = () => setLang((prev) => (prev === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage harus dipakai di dalam LanguageProvider");
  return context;
}