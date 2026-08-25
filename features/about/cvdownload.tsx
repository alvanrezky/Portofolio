"use client";
import { useLanguage } from "@/context/languagecontext";

export default function CvDownload() {
  const { t } = useLanguage();

  return (
    <div className="cv-download">
      <a href="/Alvan_Priandana_Adi_CV.pdf" download className="btn-gradient">
        {t.about.downloadCv}
      </a>
    </div>
  );
}