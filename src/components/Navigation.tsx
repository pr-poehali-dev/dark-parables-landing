import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ scrolled, scrollToSection }: NavigationProps) {
  const navItems = [
    { label: "О книге", id: "about" },
    { label: "Отзывы", id: "reviews" },
    { label: "Для кого?", id: "audience" },
    { label: "Купить", id: "buy" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-xl md:text-2xl font-bold text-book-red hover:text-book-gold transition-colors cursor-pointer"
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
              onClick={() => scrollToSection('buy')}
            >
              КУПИТЬ
            </Button>
          </div>
          <button 
            onClick={() => scrollToSection('buy')}
            className="md:hidden"
          >
            <Icon name="ShoppingCart" size={24} className="text-book-red" />
          </button>
        </div>
      </div>
    </nav>
  );
}
