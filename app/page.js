import Navbar from "@/components/ui/Navbar";
import AboutMe from "./_components/AboutMe";
import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import ProjectsSection from "./_components/ProjectSection";
import SkillsSection from "./_components/SkillsSection";
import WithLove from "./_components/WithLove";

export default function Home() {
  return (
    <div className="p-6 pb-[112px] text-white sm:pb-40 flex flex-col max-w-[1000px] m-auto gap-12">
      <HeroSection />
      <AboutMe />
      <ProjectsSection />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillsSection />
        <ContactSection />
        <WithLove />
      </div>
      <Navbar />
    </div>
  );
}
