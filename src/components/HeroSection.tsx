import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HeroSectionProps {
  isVisible: boolean;
  parallaxOffset: number;
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
  const bookImages = [
    "https://cdn.poehali.dev/files/3.webp",
    "https://cdn.poehali.dev/files/4.webp",
    "https://cdn.poehali.dev/files/5.webp",
    "https://cdn.poehali.dev/files/6.webp",
    "https://cdn.poehali.dev/files/7.webp",
    "https://cdn.poehali.dev/files/8.webp",
    "https://cdn.poehali.dev/files/2.webp",
    "https://cdn.poehali.dev/files/1.webp"
  ];
  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center px-4 py-16 md:py-24 pt-20 md:pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-8 md:space-y-10">
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="animate-word mr-1 sm:mr-4">Что</span>
              <span className="animate-word mr-1 sm:mr-4">если</span>
              <span className="text-book-gold animate-word">«добро»<span className="mr-1 sm:mr-4">,</span></span>
              <span className="animate-word mr-1 sm:mr-4">которому</span>
              <span className="animate-word mr-1 sm:mr-4">вас</span>
              <span className="animate-word">учили<span className="mr-1 sm:mr-4">,</span></span>
              <br className="hidden md:block" />
              <span className="animate-word mr-1 sm:mr-4">на</span>
              <span className="animate-word mr-1 sm:mr-4">самом</span>
              <span className="animate-word mr-1 sm:mr-4">деле</span>
              <span className="text-book-red animate-word mr-1">зло</span>
              <span className="animate-word">?</span>
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl text-gray-200 leading-relaxed animate-slide-up">
              Почему послушные граждане становятся палачами, а евангельский Христос — враг семейных ценностей и патриотизма
            </p>
            <div className="space-y-4 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-book-red hover:bg-book-gold text-white font-bold text-sm sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-7 transition-all hover:scale-105 shadow-lg hover:shadow-book-red/50 w-full sm:w-auto"
                onClick={() => scrollToSection('questions')}
              >
                УЗНАТЬ →
              </Button>
              <p className="text-xs sm:text-lg md:text-xl text-gray-300 flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-book-gold flex-shrink-0 hidden sm:inline" />
                <span>Книга, которая заставит пересмотреть всё, что вы считали очевидным</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-300 animate-fade-in pt-2">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-base">⭐</span>
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span>70+ отзывов</span>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <div className="flex items-center gap-1 sm:gap-2">
                <Icon name="Users" size={16} className="text-book-blue" />
                <span>71 участник</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-book-gold/30 blur-3xl rounded-full scale-110"></div>
              <Carousel 
                className="w-full" 
                opts={{ loop: true }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {bookImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Заповеди зла - фото ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-2xl border-2 border-gray-700/50"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}