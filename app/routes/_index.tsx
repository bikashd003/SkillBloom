import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Navbar from "~/components/home/Navbar";
import HeroSection from "~/components/home/HeroSection";
import FeaturesSection from "~/components/home/FeaturesSection";
import CoursesSection from "~/components/home/CoursesSection";
import ContactSection from "~/components/home/ContactSection";
import Footer from "~/components/common/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "SkillBloom" },
    { name: "description", content: "Welcome to SkillBloom!" },
  ];
};

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1C1C25] text-white overflow-x-hidden">
      <Navbar
        scrollY={scrollY}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen} 
      />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}



