import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface BuySectionProps {
  scrollToSection: (id: string) => void;
}

export default function BuySection({ scrollToSection }: BuySectionProps) {
  return (
    <>
      <section id="buy" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Форматы и покупка</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <Icon name="BookOpen" size={48} className="mx-auto text-book-blue" />
                <h3 className="text-2xl font-bold">Бумажная</h3>
                <p className="text-gray-400">Классический формат для вдумчивого чтения</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <Icon name="Smartphone" size={48} className="mx-auto text-book-blue" />
                <h3 className="text-2xl font-bold">Электронная</h3>
                <p className="text-gray-400">Читайте на любом устройстве</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <Icon name="Headphones" size={48} className="mx-auto text-book-blue" />
                <h3 className="text-2xl font-bold">Аудио</h3>
                <p className="text-gray-400">Слушайте в дороге</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-book-gold hover:bg-book-gold/90 text-black font-bold text-lg px-8"
              onClick={() => scrollToSection('buy')}
            >
              КУПИТЬ КНИГУ
            </Button>
          </div>
          <p className="text-gray-400 text-sm">
            Узнать, где проходит граница между добром и злом
          </p>
        </div>
      </section>

      <section id="cta" className="py-20 md:py-32 px-4 bg-gradient-to-b from-black/30 to-black">
        <div className="container mx-auto max-w-4xl text-center space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            ХРИСТИАНСТВО — ЭТО НЕ КОМФОРТ
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed space-y-2">
            <span className="block">Это вызов.</span>
            <span className="block">Это риск.</span>
            <span className="block">Это свобода.</span>
            <span className="block text-book-red font-bold">Это Христос вместо традиций.</span>
          </p>
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-red/90 text-white font-bold text-xl px-12 py-8 animate-pulse"
              onClick={() => scrollToSection('buy')}
            >
              КУПИТЬ КНИГУ И ВЫБРАТЬ КРАСНУЮ ТАБЛЕТКУ
            </Button>
          </div>
          <div className="flex items-center justify-center gap-3 pt-4 text-lg text-gray-400">
            <Icon name="Flame" size={24} className="text-book-red" />
            <span>УЖЕ 500+ ЧИТАТЕЛЕЙ В ЧАТЕ</span>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl text-center text-gray-500 text-sm">
          <p>© 2026 "Заповеди зла" — Книга для тех, кто не боится думать</p>
        </div>
      </footer>
    </>
  );
}