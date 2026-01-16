import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SocialProofSectionProps {
  scrollToSection: (id: string) => void;
}

export default function SocialProofSection({ scrollToSection }: SocialProofSectionProps) {
  return (
    <>
      <section id="reviews" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Что говорят читатели
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16">
            Книга собрала 70+ пятизвёздочных отзывов за первый месяц
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { stars: 5, text: 'Прочла запойно. С одной стороны, хочется читать медленно и вдумчиво. С другой — взгляд скользит дальше, настолько увлекательно', author: 'Елена, WildBerries' },
              { stars: 5, text: 'Ожидал мемчики, а увидел настоящее богословие. Всем думающим и ищущим очень рекомендую', author: 'Дмитрий, атеист' },
              { stars: 5, text: 'Я священник РПЦ. Автор прекрасно знает Евангелие. С некоторыми тезисами не согласен, но это не повод занижать оценку', author: 'Священнослужитель, Литрес' },
              { stars: 5, text: 'Выросла в воцерковлённой семье. Книга очень хорошо отрезвляет и напоминает, в чём заключается главная заповедь', author: 'Ирина' },
              { stars: 5, text: 'Смог наконец сформулировать то, что раньше чувствовал смутно. Книга очень чётко говорит о настоящем христианстве', author: 'Сергей' },
              { stars: 5, text: 'Я атеистка, но очень рада, что купила. Интереснейший текст. Автор полемизирует с учёными и философами', author: 'Анастасия' }
            ].map((review, i) => (
              <div key={i} className="p-6 bg-white/5 rounded-lg border border-gray-800 space-y-4">
                <div className="flex gap-1">
                  {[...Array(review.stars)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">"{review.text}"</p>
                <p className="text-sm text-gray-500">— {review.author}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Book" size={24} className="text-book-gold" />
              <span>70+ отзывов</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <Icon name="Star" size={24} className="text-yellow-400" />
              <span>4.9/5</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" size={24} className="text-book-blue" />
              <span>500+ человек в чате</span>
            </div>
          </div>
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-book-gold text-book-gold hover:bg-book-gold hover:text-black font-bold text-lg px-10 py-6"
              onClick={() => window.open('https://www.wildberries.ru/catalog/219895925/detail.aspx', '_blank')}
            >
              ЧИТАТЬ ВСЕ ОТЗЫВЫ НА WILDBERRIES →
            </Button>
          </div>
        </div>
      </section>

      <section id="author" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Об авторе
          </h2>
          <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">
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
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-book-gold mb-2">ДАРЬЯ СЕРП</h3>
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
        </div>
      </section>

      <section id="community" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Прочитайте книгу и присоединяйтесь к обсуждению
          </h2>
          <p className="text-2xl text-center text-gray-400 mb-12">
            💬 В закрытом чате читателей:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Обсуждения глав с автором',
              'Философские споры до 2 ночи',
              'Люди, которые понимают',
              'Место, где можно сомневаться'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-lg border border-gray-800">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-book-blue flex items-center justify-center">
                  <Icon name="Check" size={16} />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Темы, которые обсуждают:</h3>
            <div className="space-y-4">
              {[
                'Эволюция и христианство — совместимо?',
                'Свобода воли vs всеведение Бога',
                'Традиции — это "труп веры"?',
                'Можно ли быть христианином-изгоем?'
              ].map((topic, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gradient-to-r from-book-red/20 to-transparent rounded-lg">
                  <span className="text-2xl">🔥</span>
                  <span className="text-lg">{topic}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xl text-center text-gray-300 mb-8">
            Нет табуированных тем. Нет готовых ответов. Есть честный разговор.
          </p>
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-book-blue hover:bg-book-gold text-white font-bold text-xl px-12 py-7"
              onClick={() => scrollToSection('formats')}
            >
              КУПИТЬ КНИГУ И ВОЙТИ В ЧАТ
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}