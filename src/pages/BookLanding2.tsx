import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroProblemsSection from "@/components/landing2/HeroProblemsSection";
import SocialProofSection from "@/components/landing2/SocialProofSection";
import ConversionSection from "@/components/landing2/ConversionSection";
import FooterSection from "@/components/landing2/FooterSection";

export default function BookLanding2() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black text-white overflow-x-hidden">
      <Navigation scrolled={scrolled} scrollToSection={scrollToSection} />
      <HeroProblemsSection isVisible={isVisible} scrollToSection={scrollToSection} />
      <SocialProofSection scrollToSection={scrollToSection} />
      <ConversionSection scrollToSection={scrollToSection} />
      <FooterSection />
    </div>
  );
}