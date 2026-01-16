import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface HeroSectionProps {
  isVisible: boolean;
  scrollToSection: (id: string) => void;
}

export default function HeroProblemsSection({ isVisible, scrollToSection }: HeroSectionProps) {
  return (
    <>
      <section id="hero" className={`min-h-screen flex items-center justify-center px-4 py-12 md:py-20 lg:py-24 pt-20 md:pt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 flex justify-center">
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
                    {[
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/3.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/4.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/5.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/6.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/7.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/8.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/2.webp",
                      "https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/1.webp"
                    ].map((image, index) => (
                      <CarouselItem key={index}>
                        <img 
                          src={image} 
                          alt={`Заповеди зла - фото ${index + 1}`}
                          className="w-full h-auto rounded-lg shadow-2xl border-2 border-gray-700/50"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-4 sm:space-y-6 md:space-y-8 animate-slide-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Почему <span className="text-book-gold">«хорошие люди»</span> становятся палачами — <br />
                и как не стать одним из них
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                Книга о том, как отличить настоящее Евангелие от морали послушания, семейных ценностей и патриотизма
              </p>
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="bg-book-red hover:bg-book-gold text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6 transition-all hover:scale-105 shadow-lg hover:shadow-book-red/50 w-full sm:w-auto"
                  onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/chitat-onlayn/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
                >
                  ЧИТАТЬ ПЕРВУЮ ГЛАВУ БЕСПЛАТНО
                </Button>
                <p className="text-xs sm:text-sm text-gray-400">Без регистрации. Откроется в новой вкладке</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 pt-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <span className="font-semibold">4.9/5</span>
                </div>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span>70+ отзывов</span>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-book-blue" />
                  <span>70+ читателей в чате</span>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 animate-bounce pt-2 sm:pt-4">
                <Icon name="ArrowDown" size={20} className="flex-shrink-0" />
                <span>Узнайте, почему священники и атеисты читают эту книгу</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-12 md:py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Вас тоже учили, что...
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12">
            {[
              'Послушание — добродетель',
              'Надо уважать старших (даже если они не правы)',
              'Семья — главное (даже если в ней насилие)',
              'Патриотизм — святая обязанность',
              'Страдания возвышают душу',
              'Нужно терпеть и смиряться'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 rounded-lg border border-gray-800">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-red flex items-center justify-center">
                  <Icon name="Check" size={16} />
                </div>
                <span className="text-sm sm:text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4 sm:space-y-6 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-book-gold">
              А что если всё это — НЕ христианство?
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
              className="bg-book-red hover:bg-book-gold text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 mt-6 sm:mt-8 w-full sm:w-auto"
              onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/chitat-onlayn/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
            >
              СКАЧАТЬ ГЛАВУ И РАЗОБРАТЬСЯ
            </Button>
          </div>
        </div>
      </section>

      <section id="solution" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
            Что вы узнаете из этой книги
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
            {[
              { icon: '🧬', title: 'БИОЛОГИЯ', text: 'Почему мораль — это инструмент выживания стаи, а не путь к добру' },
              { icon: '⚡', title: 'ФИЛОСОФИЯ', text: 'Что общего у Ницше и «традиционных ценностей» — и почему Христос их противоположность' },
              { icon: '🔬', title: 'ПСИХОЛОГИЯ', text: 'Как нормальные люди творят зло: от домашнего насилия до Холокоста' }
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-xl border border-gray-800 hover:border-book-gold transition-colors">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-book-gold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3 md:space-y-4 lg:space-y-6">
            {[
              { title: 'Архитектор Холокоста был образцовым семьянином', text: 'История Адольфа Эйхмана и концепция "банальности зла"' },
              { title: 'Богатые злее бедных — научные доказательства', text: 'Исследования показывают: власть буквально делает людей жестокими' },
              { title: 'Смирение как инструмент насилия', text: 'Как покорность позволяет сильным угнетать слабых' },
              { title: 'Ницше vs Христос', text: 'Почему философия сверхчеловека — лучшее доказательство правоты Евангелия' },
              { title: '"Продавцы страдания"', text: 'Как религия учит жертв любить мучителей' },
              { title: 'Заповедь предательства', text: 'Почему Христос — враг семейных ценностей' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg border border-gray-700 hover:border-book-gold transition-colors">
                <div className="flex-shrink-0 text-xl sm:text-2xl">📌</div>
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-book-gold">{item.title}</h4>
                  <p className="text-sm sm:text-base text-gray-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-gold text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 w-full sm:w-auto"
              onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/chitat-onlayn/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
            >
              НАЧАТЬ ЧИТАТЬ →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}