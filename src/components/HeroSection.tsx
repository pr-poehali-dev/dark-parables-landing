import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  isVisible: boolean;
  parallaxOffset: number;
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ isVisible, parallaxOffset, scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center px-4 py-12 md:py-20 pt-24 md:pt-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-8 md:space-y-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15]">
              <span className="animate-word mr-4">Что</span>
              <span className="animate-word mr-4">если</span>
              <span className="text-book-gold animate-word">«добро»<span className="mr-4">,</span></span>
              <span className="animate-word mr-4">которому</span>
              <span className="animate-word mr-4">вас</span>
              <span className="animate-word">учили<span className="mr-4">,</span></span>
              <br className="hidden md:block" />
              <span className="animate-word mr-4">на</span>
              <span className="animate-word mr-4">самом</span>
              <span className="animate-word mr-4">деле</span>
              <span className="text-book-red animate-word mr-2">зло</span>
              <span className="animate-word">?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-slide-up">
              Почему послушные граждане становятся палачами,<br className="hidden md:block" /> а евангельский Христос — враг семейных ценностей<br className="hidden md:block" /> и патриотизма
            </p>
            <div className="space-y-6 animate-fade-in">
              <Button 
                size="lg" 
                className="bg-book-red hover:bg-book-gold text-white font-bold text-xl px-12 py-7 transition-all hover:scale-105 shadow-lg hover:shadow-book-red/50"
                onClick={() => scrollToSection('formats')}
              >
                УЗНАТЬ →
              </Button>
              <p className="text-lg md:text-xl text-gray-300 flex items-center gap-3">
                <Icon name="Zap" size={24} className="text-book-gold flex-shrink-0" />
                <span>Книга, которая заставит пересмотреть всё,<br className="hidden md:block" /> что вы считали очевидным</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-base text-gray-300 animate-fade-in pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <span className="text-gray-500">|</span>
              <span>70+ отзывов</span>
              <span className="text-gray-500">|</span>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-book-blue" />
                <span>71 участник в чате</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-book-gold/30 blur-3xl rounded-full scale-110"></div>
              <div 
                className="relative"
                style={{
                  transform: `translateY(-${parallaxOffset}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img 
                  src="https://cdn.poehali.dev/files/photo_2025-11-06_13-35-24 (3).jpg" 
                  alt="Заповеди зла - обложка книги" 
                  className="w-full h-auto rounded-lg shadow-2xl border-2 border-gray-700/50 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}