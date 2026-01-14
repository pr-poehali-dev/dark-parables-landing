import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AuthorAndStatsSectionProps {
  scrollToSection?: (id: string) => void;
}

export default function AuthorAndStatsSection({ scrollToSection }: AuthorAndStatsSectionProps = {}) {
  const handleScroll = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section id="author" className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
              <div className="relative">
                <div className="absolute inset-0 bg-book-gold/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/4F5A0545-118.jpg" 
                  alt="Дарья Серп" 
                  className="relative w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-book-gold mb-2">ДАРЬЯ СЕРП</h2>
                <p className="text-xl text-gray-400">Христианский философ, блогер, бывшая атеистка</p>
              </div>
              <div className="space-y-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
                <p>
                  «Я была убеждённой атеисткой. Считала религию опиумом для народа и инструментом контроля.
                </p>
                <p>
                  Но когда я действительно прочитала Евангелие — не в изложении церковных проповедников, а глазами современного человека, знакомого с философией и психологией, — я увидела нечто радикально иное.
                </p>
                <p className="text-book-gold font-semibold">
                  Христос — не защитник традиций и семейных ценностей. Он их ниспровергатель.
                </p>
                <p>
                  Эта книга — попытка отделить Евангелие от того, что веками выдавали за христианство».
                </p>
              </div>
              <div className="pt-4">
                <Button 
                  className="bg-book-blue hover:bg-book-blue/90 text-white font-bold"
                  onClick={() => window.open('https://t.me/daryaserpbook/2', '_blank')}
                >
                  Подписаться на канал
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('stats')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 md:py-32 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Что говорят читатели</h2>
            <p className="text-2xl md:text-3xl text-gray-400">
              Книга собрала десятки 5-звёздочных отзывов и вызвала бурные обсуждения
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8 space-y-3">
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-4xl font-bold text-book-gold">4.9/5</p>
                <p className="text-gray-400">на WildBerries</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8 space-y-3">
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-4xl font-bold text-book-gold">4.8/5</p>
                <p className="text-gray-400">на Литрес</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-8 space-y-3">
                <div className="flex gap-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-4xl font-bold text-book-gold">5/5</p>
                <p className="text-gray-400">на LiveLib</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-8">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-2">
                <p className="text-3xl font-bold text-book-blue">📚 70+</p>
                <p className="text-gray-400">отзывов за первый месяц</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-2">
                <p className="text-3xl font-bold text-book-blue">💬 71</p>
                <p className="text-gray-400">читатель в закрытом чате</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('reviews')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>
    </>
  );
}