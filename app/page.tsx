import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import ScrollToTop from "@/components/scroll-to-top";
import VisitorTracker from "./visitorTracker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#212428] text-white relative">
      <VisitorTracker />
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 animate-in fade-out">
        <Hero />
        <div className="mt-16 border-t border-gray-700 pt-8" id="about"></div>
        <AboutSection />
        <div
          className="mt-16 border-t border-gray-700 pt-8"
          id="experience"
        ></div>
        <ExperienceSection />
        <div className="mt-16 border-t border-gray-700 pt-8" id="skills"></div>
        <SkillsSection />
        <div
          className="mt-16 border-t border-gray-700 pt-8"
          id="portfolio"
        ></div>
        <PortfolioSection />
        <div className="mt-16 border-t border-gray-700 pt-8" id="contact"></div>
        <ContactSection />
      </div>
      {/* <Footer /> */}
      <ScrollToTop />
    </main>
  );
}
