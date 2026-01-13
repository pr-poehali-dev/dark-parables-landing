import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import BuySection from "@/components/BuySection";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
      setParallaxOffset(scrollY * 0.3);
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
      <HeroSection isVisible={isVisible} parallaxOffset={parallaxOffset} scrollToSection={scrollToSection} />
      <ContentSections scrollToSection={scrollToSection} />
      <BuySection />
    </div>
  );
}