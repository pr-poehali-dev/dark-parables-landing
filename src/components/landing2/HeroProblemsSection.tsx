import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  isVisible: boolean;
  scrollToSection: (id: string) => void;
}

export default function HeroProblemsSection({ isVisible, scrollToSection }: HeroSectionProps) {
  return (
    <>
      <section id="hero" className={`min-h-screen flex items-center justify-center px-4 py-16 md:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-book-gold/30 blur-3xl rounded-full scale-110"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/3.webp" 
                  alt="Заповеди зла - обложка книги"
                  className="relative w-full h-auto rounded-lg shadow-2xl border-2 border-gray-700/50"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Почему <span className="text-book-gold">«хорошие люди»</span> становятся палачами — <br />
                и как не стать одним из них
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Книга о том, как отличить настоящее Евангелие от морали послушания, семейных ценностей и патриотизма
              </p>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-book-red hover:bg-book-gold text-white font-bold text-lg md:text-xl px-10 py-7 transition-all hover:scale-105 shadow-lg hover:shadow-book-red/50 w-full sm:w-auto"
                  onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-chto-esli-dobro-kotoromu-vas-uchili-na-samom-dele-zlo-72154388/chitat-onlayn/', '_blank')}
                >
                  ЧИТАТЬ ПЕРВУЮ ГЛАВУ БЕСПЛАТНО
                </Button>
                <p className="text-sm text-gray-400">Без регистрации. Откроется в новой вкладке</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                </div>
                <span className="text-gray-500">|</span>
                <span>70+ отзывов</span>
                <span className="text-gray-500">|</span>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-book-blue" />
                  <span>500+ читателей в чате</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400 animate-bounce pt-4">
                <Icon name="ArrowDown" size={24} />
                <span>Узнайте, почему священники и атеисты читают эту книгу</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Вас тоже учили, что...
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Послушание — добродетель',
              'Надо уважать старших (даже если они не правы)',
              'Семья — главное (даже если в ней насилие)',
              'Патриотизм — святая обязанность',
              'Страдания возвышают душу',
              'Нужно терпеть и смиряться'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-gray-800">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-red flex items-center justify-center">
                  <Icon name="Check" size={16} />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-book-gold">
              А что если всё это — НЕ христианство?
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <p>
                Эти «ценности» есть у животных. У волков есть уважение к вождю стаи. 
                У шимпанзе — семейственность и агрессия к чужакам. 
                У кур — «порядок клевания».
              </p>
              <p>
                Христос пришёл НЕ учить тому, что и так заложено эволюцией.
                Он учил безумию любви к врагам. И это единственное, что отличает человека от животного.
              </p>
              <p className="font-semibold text-white">
                Эта книга покажет, как «традиционные ценности» подменили Евангелие.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-gold text-white font-bold text-xl px-12 py-7 mt-8"
              onClick={() => scrollToSection('solution')}
            >
              СКАЧАТЬ ГЛАВУ И РАЗОБРАТЬСЯ
            </Button>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Что вы узнаете из этой книги
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '🧬', title: 'БИОЛОГИЯ', text: 'Почему мораль — это инструмент выживания стаи, а не путь к добру' },
              { icon: '⚡', title: 'ФИЛОСОФИЯ', text: 'Что общего у Ницше и «традиционных ценностей» — и почему Христос их противоположность' },
              { icon: '🔬', title: 'ПСИХОЛОГИЯ', text: 'Как нормальные люди творят зло: от домашнего насилия до Холокоста' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-gray-800 hover:border-book-gold transition-colors">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-book-gold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {[
              { title: 'Архитектор Холокоста был образцовым семьянином', text: 'История Адольфа Эйхмана и концепция "банальности зла"' },
              { title: 'Богатые злее бедных — научные доказательства', text: 'Исследования показывают: власть буквально делает людей жестокими' },
              { title: 'Смирение как инструмент насилия', text: 'Как покорность позволяет сильным угнетать слабых' },
              { title: 'Ницше vs Христос', text: 'Почему философия сверхчеловека — лучшее доказательство правоты Евангелия' },
              { title: '"Продавцы страдания"', text: 'Как религия учит жертв любить мучителей' },
              { title: 'Заповедь предательства', text: 'Почему Христос — враг семейных ценностей' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-gray-700 hover:border-book-gold transition-colors">
                <div className="flex-shrink-0 text-2xl">📌</div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-book-gold">{item.title}</h4>
                  <p className="text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-gold text-white font-bold text-xl px-12 py-7"
              onClick={() => scrollToSection('reviews')}
            >
              НАЧАТЬ ЧИТАТЬ →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
