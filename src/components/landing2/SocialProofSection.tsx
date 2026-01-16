import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SocialProofSectionProps {
  scrollToSection: (id: string) => void;
}

export default function SocialProofSection({ scrollToSection }: SocialProofSectionProps) {
  return (
    <>
      <section id="reviews" className="py-12 md:py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center mb-6">
            Что говорят читатели
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 text-center mb-8 md:mb-12 lg:mb-16">
            Книга собрала 70+ пятизвёздочных отзывов за первый месяц
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { stars: 5, text: 'Прочла запойно. С одной стороны, хочется читать медленно и вдумчиво. С другой — взгляд скользит дальше, настолько увлекательно', author: 'Елена, WildBerries' },
              { stars: 5, text: 'Ожидал мемчики, а увидел настоящее богословие. Всем думающим и ищущим очень рекомендую', author: 'Дмитрий, атеист' },
              { stars: 5, text: 'Я священник РПЦ. Автор прекрасно знает Евангелие. С некоторыми тезисами не согласен, но это не повод занижать оценку', author: 'Священнослужитель, Литрес' },
              { stars: 5, text: 'Выросла в воцерковлённой семье. Книга очень хорошо отрезвляет и напоминает, в чём заключается главная заповедь', author: 'Ирина' },
              { stars: 5, text: 'Смог наконец сформулировать то, что раньше чувствовал смутно. Книга очень чётко говорит о настоящем христианстве', author: 'Сергей' },
              { stars: 5, text: 'Я атеистка, но очень рада, что купила. Интереснейший текст. Автор полемизирует с учёными и философами', author: 'Анастасия' }
            ].map((review, i) => (
              <div key={i} className="p-3 xs:p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg border border-gray-800 space-y-2 xs:space-y-3 sm:space-y-4">
                <div className="flex gap-0.5 sm:gap-1">
                  {[...Array(review.stars)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm xs:text-base sm:text-lg md:text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">"{review.text}"</p>
                <p className="text-xs xs:text-sm text-gray-500">— {review.author}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8">
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <Icon name="Book" size={16} className="text-book-gold flex-shrink-0 xs:w-5 xs:h-5" />
              <span>70+ отзывов</span>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <Icon name="Star" size={16} className="text-yellow-400 flex-shrink-0 xs:w-5 xs:h-5" />
              <span>4.9/5</span>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <Icon name="MessageCircle" size={16} className="text-book-blue flex-shrink-0 xs:w-5 xs:h-5" />
              <span>70+ в чате</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-book-gold text-book-gold hover:bg-book-gold hover:text-black font-bold text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 w-full sm:w-auto leading-tight"
              onClick={() => window.open('https://www.wildberries.ru/catalog/599313256/feedbacks?imtId=619713962&size=816459879', '_blank')}
            >
              <span className="hidden sm:inline">ЧИТАТЬ ВСЕ ОТЗЫВЫ НА WILDBERRIES →</span>
              <span className="sm:hidden">ОТЗЫВЫ НА WB →</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-book-gold text-book-gold hover:bg-book-gold hover:text-black font-bold text-[9px] xs:text-[10px] sm:text-xs md:text-sm lg:text-base px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 w-full sm:w-auto leading-tight"
              onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/otzivi/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
            >
              <span className="hidden sm:inline">ЧИТАТЬ ОТЗЫВЫ НА LITRES →</span>
              <span className="sm:hidden">ОТЗЫВЫ LITRES →</span>
            </Button>
          </div>
        </div>
      </section>

      <section id="author" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
            Об авторе
          </h2>
          <div className="grid md:grid-cols-10 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="md:col-span-3">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-book-gold/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/4F5A0545-118.webp" 
                  alt="Дарья Серп"
                  className="relative w-full h-auto rounded-lg shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-7 space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-book-gold mb-2">ДАРЬЯ СЕРП</h3>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">Христианский философ,<br className="xs:hidden" /> блогер, бывшая атеистка</p>
              </div>
              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
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
              <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-gray-300">
                  <a href="https://vk.com/badbeliever" target="_blank" rel="noopener" className="block hover:text-book-gold transition-colors">
                    <strong>vk.com/badbeliever</strong> — группа «Меньше ада» Вконтакте, с которой всё когда-то началось: сейчас там мемы про котиков и религию, а также записи подкастов Дарьи Серп.
                  </a>
                  <a href="https://vk.ru/daryaserp" target="_blank" rel="noopener" className="block hover:text-book-gold transition-colors">
                    <strong>vk.ru/daryaserp</strong> — личный Вк Дарьи Серп с фото и новостями.
                  </a>
                  <a href="https://youtube.com/@DaryaSerp" target="_blank" rel="noopener" className="block hover:text-book-gold transition-colors">
                    <strong>youtube.com/@DaryaSerp</strong> — тут выкладываются видео подкастов, эфиров, интервью с Дарьей
                  </a>
                  <a href="https://t.me/daryaserp" target="_blank" rel="noopener" className="block hover:text-book-gold transition-colors">
                    <strong>t.me/daryaserp</strong> — канал про проекты и книги Дарьи, заметки на горячие темы (пока не вошедшие в книги).
                  </a>
                  <a href="https://t.me/daryaserpbook" target="_blank" rel="noopener" className="block hover:text-book-gold transition-colors">
                    <strong>t.me/daryaserpbook</strong> — здесь читательский чат для обсуждения книг Дарьи Серп и околорелигиозного флуда.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-12 md:py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 leading-tight">
            Прочитайте книгу и<br className="md:hidden" /> присоединяйтесь к обсуждению
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-400 mb-8 md:mb-12">
            💬 В закрытом чате читателей:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              'Обсуждения глав с автором',
              'Философские споры до 2 ночи',
              'Люди, которые понимают',
              'Место, где можно сомневаться'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-3 xs:p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg border border-gray-800">
                <div className="hidden xs:flex flex-shrink-0 w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-book-blue items-center justify-center">
                  <Icon name="Check" size={14} className="xs:w-4 xs:h-4" />
                </div>
                <span className="text-xs xs:text-sm sm:text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="mb-8 md:mb-12">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">Темы, которые обсуждают:</h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                'Эволюция и христианство — совместимо?',
                'Свобода воли vs всеведение Бога',
                'Традиции — это "труп веры"?',
                'Можно ли быть христианином-изгоем?'
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gradient-to-r from-book-red/20 to-transparent rounded-lg">
                  <span className="text-lg xs:text-xl sm:text-2xl flex-shrink-0">🔥</span>
                  <span className="text-xs xs:text-sm sm:text-base md:text-lg">{topic}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-center text-gray-300 mb-6 sm:mb-8">
            Нет табуированных тем.<br className="xs:hidden" /> Нет готовых ответов.<br className="xs:hidden" /> Есть честный разговор.
          </p>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-book-blue hover:bg-book-gold text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg px-2 xs:px-4 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 w-full sm:w-auto leading-tight"
              onClick={() => scrollToSection('formats')}
            >
              КУПИТЬ КНИГУ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}