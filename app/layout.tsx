import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Marquee from "@/components/animations/marquee";
import ContourBackground from "@/components/animations/counturbackground";
import { ThemeProvider } from "@/context/themecontext";
import { LanguageProvider } from "@/context/languagecontext";

export const metadata = {
  title: "Alvan Priandana Adi | Portfolio",
  description: "Portfolio Sistem Informasi & Data Analyst/Scientist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ContourBackground />
            <Navbar />
            {children}
            <Marquee text=" Alvan Priandana Adi  •  Sistem Informasi  • Universitas Gunadarma • Portfolio " />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}