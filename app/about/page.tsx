import ProfileIntro from "@/features/about/profileintro";
import SkillsKeycap from "@/features/about/skillskeycap";
import ContactSection from "@/features/about/contactsection";
import FadeInSection from "@/components/animations/fadeinsections";
import PhotoShowcase from "@/features/about/photoshowcase";

export default function AboutPage() {
  return (
    <main className="about-page">
      <section id="tentang" className="about-section about-hero-section">
        <FadeInSection>
          <ProfileIntro />
        </FadeInSection>
        <PhotoShowcase />
      </section>

      <section id="skills" className="about-section">
        <FadeInSection>
          <SkillsKeycap />
        </FadeInSection>
      </section>

      <section id="kontak" className="about-section">
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
      </section>
    </main>
  );
}