"use client";
import { useLanguage } from "@/context/languagecontext";
import SocialLinks from "./sociallinks";
import CvDownload from "./cvdownload";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="contact-section-inner">
      <p className="section-label">{t.about.contactTitle}</p>
      <h2 className="contact-heading">{t.about.contactHeading}</h2>
      <p className="contact-desc">{t.about.contactDesc}</p>

      <SocialLinks />
      <CvDownload />
    </div>
  );
}