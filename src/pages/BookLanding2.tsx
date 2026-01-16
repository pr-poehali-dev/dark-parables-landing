import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BookLanding2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-black text-white overflow-x-hidden">
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
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-book-blue/20 blur-3xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/3c7ed24e-e461-4d4a-8c66-243a8d39f07d/bucket/author.webp" 
                  alt="Дарья Серп"
                  className="relative w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <h3 className="text-3xl font-bold text-book-gold">Дарья Серп</h3>
              <p className="text-xl text-gray-400">христианский философ, блогер, бывшая атеистка</p>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>"Я была убеждённой атеисткой. Считала религию опиумом для народа.</p>
                <p>Но когда я действительно прочитала Евангелие — не в изложении церковных проповедников, а глазами современного человека, знакомого с философией и психологией, — я увидела нечто радикально иное.</p>
                <p>Христос — не защитник традиций и семейных ценностей. Он их ниспровергатель.</p>
                <p className="font-semibold text-white">Эта книга — попытка отделить Евангелие от того, что веками выдавали за христианство"</p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://vk.com/badbeliever" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  <span>📘</span>
                  <span>Группа ВКонтакте</span>
                </a>
                <a href="https://youtube.com/@DaryaSerp" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  <span>▶️</span>
                  <span>YouTube</span>
                </a>
                <a href="https://t.me/daryaserp" target="_blank" rel="noopener" className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  <span>📱</span>
                  <span>Telegram</span>
                </a>
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

      <section id="formats" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Выберите формат
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border-2 border-gray-700 hover:border-book-gold transition-all hover:scale-105">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-3xl font-bold">ЭЛЕКТРОННАЯ КНИГА</h3>
                <ul className="space-y-3 text-left">
                  {[
                    'Моментальная доставка',
                    'Чтение на любом устройстве',
                    'Можно делать заметки',
                    'Доступ в чат читателей'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-book-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-book-gold mb-6">от 299 ₽</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-book-gold hover:bg-book-red text-black hover:text-white font-bold text-lg py-6"
                    onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-chto-esli-dobro-kotoromu-vas-uchili-na-samom-dele-zlo-72154388/', '_blank')}
                  >
                    СКАЧАТЬ НА ЛИТРЕС →
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border-2 border-gray-700 hover:border-book-gold transition-all hover:scale-105">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-3xl font-bold">БУМАЖНАЯ КНИГА</h3>
                <ul className="space-y-3 text-left">
                  {[
                    '272 страницы',
                    'Твёрдый переплёт',
                    'Доставка по России',
                    'Доступ в чат читателей'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-book-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-book-gold mb-6">от 549 ₽</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-book-gold hover:bg-book-red text-black hover:text-white font-bold text-lg py-6"
                    onClick={() => window.open('https://www.wildberries.ru/catalog/219895925/detail.aspx', '_blank')}
                  >
                    КУПИТЬ НА WILDBERRIES →
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span>Уже 500+ читателей в чате</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 на основе 70+ отзывов</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span>"Читается запойно!" — Елена</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Это антихристианская книга?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Нет. Это книга о том, как отличить Евангелие от искажений, накопившихся за 2000 лет. Её читают и священники, и атеисты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Нужно ли быть верующим, чтобы читать?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Абсолютно нет. Книга написана бывшей атеисткой и будет интересна людям любых взглядов — от агностиков до воцерковлённых христиан.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Это сложная академическая работа?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Нет, это публицистика с опорой на философию, психологию и биологию. Написано живым языком. Читается как хороший эссе-лонгрид.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Как получить доступ в чат?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Купите книгу (бумажную или электронную) на любой площадке. Ссылка на чат будет на последней странице или придёт на email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Можно ли читать, если я не согласен с автором?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Конечно! Даже священники, которые не согласны с некоторыми тезисами, ставят книге 5 звёзд. Главное — честный разговор, а не навязывание мнений.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="final-cta" className="py-32 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Христианство — это не комфорт.<br />
            Это вызов. Это риск. Это свобода.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Это балансирование на лезвии бритвы между готовыми ответами и честными вопросами.
            Это выбор любви там, где легче выбрать правила.
            Это жизнь изгоя среди "правильных".
          </p>
          <p className="text-2xl md:text-3xl font-bold text-book-gold">
            Это Христос вместо традиций.
          </p>
          <p className="text-3xl font-semibold pt-6">
            Готовы?
          </p>
          <Button 
            size="lg" 
            className="bg-book-red hover:bg-book-gold text-white font-bold text-2xl px-16 py-8 mt-8 hover:scale-110 transition-all shadow-2xl"
            onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-chto-esli-dobro-kotoromu-vas-uchili-na-samom-dele-zlo-72154388/chitat-onlayn/', '_blank')}
          >
            НАЧАТЬ ЧИТАТЬ
          </Button>
          <div className="space-y-2 pt-6 text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <span className="text-yellow-500">⚠️</span>
              <span>Предупреждение: после прочтения вы не сможете верить "как раньше"</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Check" size={20} className="text-book-gold" />
              <span>Но вы наконец начнёте дышать</span>
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-book-gold">Контакты</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <a href="https://vk.com/badbeliever" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">📘 Группа «Меньше ада»</a>
                <a href="https://vk.ru/daryaserp" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">📘 Личный VK</a>
                <a href="https://youtube.com/@DaryaSerp" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">▶️ YouTube</a>
                <a href="https://t.me/daryaserp" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">📱 Канал о книгах</a>
                <a href="https://t.me/daryaserpbook" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">💬 Читательский чат</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-book-gold">Навигация</h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#problem" className="hover:text-book-blue transition-colors">Проблема</a>
                <a href="#solution" className="hover:text-book-blue transition-colors">Решение</a>
                <a href="#reviews" className="hover:text-book-blue transition-colors">Отзывы</a>
                <a href="#author" className="hover:text-book-blue transition-colors">Об авторе</a>
                <a href="#community" className="hover:text-book-blue transition-colors">Сообщество</a>
                <a href="#formats" className="hover:text-book-blue transition-colors">Купить</a>
                <a href="#faq" className="hover:text-book-blue transition-colors">FAQ</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-book-gold">Юридическая информация</h3>
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <a href="#" className="hover:text-book-blue transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-book-blue transition-colors">Договор оферты</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm space-y-2">
            <p>© 2025 Дарья Серп. Все права защищены.</p>
            <p>Индивидуальный предприниматель Косинцева Дарья Игоревна</p>
            <p>ОГРН 325774600668782 | ИНН 482421084121</p>
            <p>Реклама. ООО ЛИТРЕС, ИНН 7719571260, erid: 2VfnxyNkZrY</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
