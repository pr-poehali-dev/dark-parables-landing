import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavigationProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrolled, scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { label: "О книге", id: "solution" },
    { label: "Отзывы", id: "reviews" },
    { label: "Об авторе", id: "author" },
    { label: "Частые вопросы", id: "faq" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-base sm:text-lg md:text-2xl font-bold text-book-red hover:text-book-gold transition-colors cursor-pointer"
          >
            ЗАПОВЕДИ ЗЛА
          </button>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-semibold text-gray-300 hover:text-book-red transition-colors cursor-pointer uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-book-red hover:bg-book-red/90 text-white font-bold"
              onClick={() => scrollToSection('formats')}
            >
              КУПИТЬ
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="text-white">
                  <Icon name="Menu" size={28} className="text-book-red" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-gray-800">
                <SheetHeader>
                  <SheetTitle className="text-book-red text-xl">МЕНЮ</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className="text-left text-lg font-semibold text-gray-300 hover:text-book-red transition-colors uppercase tracking-wider"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    size="lg" 
                    className="bg-book-red hover:bg-book-red/90 text-white font-bold mt-4"
                    onClick={() => {
                      scrollToSection('formats');
                      setMobileMenuOpen(false);
                    }}
                  >
                    КУПИТЬ КНИГУ
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}