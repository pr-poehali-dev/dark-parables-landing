import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface AudienceSectionsProps {
  scrollToSection?: (id: string) => void;
}

export default function AudienceSections({ scrollToSection }: AudienceSectionsProps = {}) {
  const handleScroll = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const topics = [
    "🔥 Эволюция и христианство — совместимо?",
    "🔥 Почему Бог не вмешался в грехопадение?",
    "🔥 Свобода воли vs всеведение Бога",
    "🔥 Правда ли, что в церкви — \"слепой ведёт слепого\"?",
    "🔥 Традиции — это \"труп веры\"?",
    "🔥 Можно ли быть христианином-изгоем?",
    "🔥 Духовные авторитеты: помощь или контроль?",
    "🔥 Вера без дел мертва — но как насчёт \"только веры\"?",
    "🔥 Почему \"правильные\" христиане часто далеки от Христа?"
  ];

  const chapters = [
    "Уважай старших, равняйся на лучших — О биологии иерархии",
    "Люби семью, защищай Родину — О козлах отпущения и насилии",
    "Храни традиции, знай своё место — О нетрадиционных ценностях Христа",
    "Терпи: страдания возвышают — О продавцах страдания",
    "Смирение и переворачивание иерархии — Ломая скрепы",
    "Заповедь предательства — Иисус и семейные ценности"
  ];

  const faqItems = [
    {
      question: "Это антихристианская книга?",
      answer: "Нет. Это книга о том, как отличить Евангелие от искажений, накопившихся за 2000 лет."
    },
    {
      question: "Нужно ли быть верующим, чтобы читать?",
      answer: "Абсолютно нет. Книга написана бывшей атеисткой и будет интересна людям любых взглядов."
    },
    {
      question: "Это академическая работа?",
      answer: "Нет, это публицистика с опорой на философию, психологию и биологию. Написано живым языком."
    },
    {
      question: "Книга только критикует?",
      answer: "Книга прежде всего раскрывает: настоящее Евангелие радикальнее, чем думают и атеисты, и верующие."
    },
    {
      question: "Как получить доступ в чат?",
      answer: "Купите книгу на любой площадке и начинайте обсуждать ее в чате."
    },
    {
      question: "Книга подходит для подарка?",
      answer: "Да, если вы дарите её думающему человеку, готовому к честному разговору о вере."
    }
  ];

  return (
    <>
      <section id="community" className="py-12 md:py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-6xl space-y-10 md:space-y-16">
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
              Прочитайте книгу и присоединяйтесь к общению думающих верующих и агностиков
            </h2>
          </div>
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-blue">
            <CardContent className="p-5 sm:p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-book-blue text-center">💬 В ЧАТЕ ЧИТАТЕЛЕЙ</h3>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-6">
                <div className="flex items-start gap-2">
                  <Icon name="MessageCircle" size={20} className="text-book-blue flex-shrink-0 hidden sm:block" />
                  <div>
                    <p className="text-xs sm:text-base md:text-lg text-gray-300">Обсуждения глав с автором</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Moon" size={20} className="text-book-gold flex-shrink-0 hidden sm:block" />
                  <div>
                    <p className="text-xs sm:text-base md:text-lg text-gray-300">Философские споры до 2 ночи</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Users" size={20} className="text-book-red flex-shrink-0 hidden sm:block" />
                  <div>
                    <p className="text-xs sm:text-base md:text-lg text-gray-300">Люди, которые понимают</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Heart" size={20} className="text-green-500 flex-shrink-0 hidden sm:block" />
                  <div>
                    <p className="text-xs sm:text-base md:text-lg text-gray-300">Место, где можно сомневаться</p>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('discussion-topics')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="discussion-topics" className="py-12 md:py-20 lg:py-32 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-10 md:space-y-16">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold uppercase px-2 leading-tight">
              ТЕМЫ, КОТОРЫЕ МЫ НЕ БОИМСЯ ОБСУЖДАТЬ
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 px-2">
              В этой книге и чате:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {topics.map((topic, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-book-red transition-all">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center space-y-4 md:space-y-6 pt-4 md:pt-6 px-2">
            <div className="space-y-2 md:space-y-3">
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-book-gold">НЕТ ТАБУИРОВАННЫХ ТЕМ</p>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-book-gold">НЕТ ГОТОВЫХ ОТВЕТОВ</p>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-book-red">ЕСТЬ ЧЕСТНЫЙ РАЗГОВОР</p>
            </div>
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-red/90 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 w-full sm:w-auto"
              onClick={() => handleScroll('formats')}
            >
              ПРИСОЕДИНИТЬСЯ
            </Button>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('structure')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="structure" className="py-12 md:py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl space-y-10 md:space-y-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center px-2">
            Структура книги
          </h2>
          <div className="space-y-3 md:space-y-4">
            {chapters.map((chapter, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-book-blue transition-all">
                <CardContent className="p-3 sm:p-5 md:p-6">
                  <div className="flex items-start gap-2 md:gap-4">
                    <Badge className="hidden sm:inline-flex bg-book-blue text-white font-bold text-base sm:text-lg px-2 sm:px-3 py-1 flex-shrink-0">{index + 1}</Badge>
                    <p className="text-xs sm:text-base md:text-lg text-gray-200 leading-relaxed flex-grow">{chapter}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pt-4 md:pt-6">
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-1 md:space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-book-gold">272</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">📖 стр.</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-1 md:space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-book-gold">6</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">📚 глав</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-1 md:space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-book-gold">50+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">🔖 цитат</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-4 sm:p-5 md:p-6 text-center space-y-1 md:space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-book-gold">100+</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">🧠 источ.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('faq')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="faq" className="py-12 md:py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-4xl space-y-10 md:space-y-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center px-2">
            Частые вопросы
          </h2>
          <div className="space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700">
                <CardContent className="p-4 sm:p-5 md:p-6 space-y-2 md:space-y-3">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-book-gold flex items-start gap-2 sm:gap-3">
                    <span className="flex-shrink-0 hidden sm:inline">❓</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed sm:pl-7 md:pl-9">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('final-cta')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="final-cta" className="py-12 md:py-20 lg:py-32 px-4 bg-gradient-to-b from-black/30 to-black">
        <div className="container mx-auto max-w-5xl space-y-10 md:space-y-16">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
              ХРИСТИАНСТВО — ЭТО НЕ КОМФОРТ
            </h2>
            <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-gray-300 leading-relaxed space-y-2 md:space-y-4 max-w-3xl mx-auto px-4">
              <p>Это вызов.</p>
              <p>Это риск.</p>
              <p>Это свобода.</p>
              <p className="pt-1 md:pt-4 text-xs sm:text-lg md:text-2xl">Это балансирование на лезвии бритвы между готовыми ответами и честными вопросами.</p>
              <p className="text-xs sm:text-lg md:text-2xl">Это выбор любви там, где легче выбрать правила.</p>
              <p className="text-xs sm:text-lg md:text-2xl">Это жизнь изгоя среди "правильных".</p>
              <p className="text-book-red font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl pt-2 md:pt-4">Это Христос вместо традиций.</p>
              <p className="text-book-gold font-bold text-lg sm:text-3xl md:text-4xl lg:text-5xl pt-3 md:pt-6">ГОТОВЫ?</p>
            </div>
          </div>

          <div className="text-center space-y-4 md:space-y-6 px-4">
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-red/90 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 animate-pulse w-full sm:w-auto"
              onClick={() => handleScroll('formats')}
            >
              КУПИТЬ КНИГУ
            </Button>
          </div>
        </div>
      </section>

      <section id="formats" className="py-12 md:py-20 px-3 bg-black/30">
        <div className="container mx-auto max-w-6xl">
            <div>
              <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-center mb-6 md:mb-12 px-1">
                Выберите формат
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-gold w-full">
                  <CardContent className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-5 md:space-y-6">
                    <div className="text-center space-y-2 md:space-y-4">
                      <div className="text-3xl sm:text-5xl md:text-6xl">📖</div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-book-gold">БУМАЖНАЯ КНИГА</h3>
                    </div>
                    <ul className="space-y-1 text-xs sm:text-base text-gray-300">
                      <li>• 272 страницы</li>
                      <li>• Твёрдый переплёт</li>
                      <li>• Доставка по России</li>
                    </ul>
                    <div className="space-y-2 pt-1 md:pt-4">
                      <Button 
                        className="w-full bg-book-red hover:bg-book-red/90 text-white font-bold text-xs sm:text-base md:text-lg py-3 sm:py-5 md:py-6"
                        onClick={() => window.open('https://wildberries.ru/catalog/0/search.aspx?search=WW268963', '_blank')}
                      >
                        КУПИТЬ НА WB
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-blue w-full">
                  <CardContent className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-5 md:space-y-6">
                    <div className="text-center space-y-2 md:space-y-4">
                      <div className="text-3xl sm:text-5xl md:text-6xl">📱</div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-book-blue">ЭЛЕКТРОННАЯ ВЕРСИЯ</h3>
                    </div>
                    <ul className="space-y-1 text-xs sm:text-base text-gray-300">
                      <li>• Моментальная доставка</li>
                      <li>• Чтение на любом устройстве</li>
                      <li>• Можно делать заметки</li>
                    </ul>
                    <div className="pt-1 md:pt-4">
                      <Button 
                        className="w-full bg-book-blue hover:bg-book-blue/90 text-white font-bold text-xs sm:text-base md:text-lg py-3 sm:py-5 md:py-6"
                        onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&keyword=chto-esli-dobro-kotoromu-vas-uchili-na-samom-dele-zlo&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
                      >
                        СКАЧАТЬ НА ЛИТРЕС
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="pt-4 md:pt-6 space-y-2 md:space-y-4">
              <p className="text-xs sm:text-base md:text-lg text-gray-400 text-center px-1">
                🔥 УЖЕ 70+ ЧИТАТЕЛЕЙ В ЧАТЕ
              </p>
              <div className="flex items-center justify-center gap-1 flex-wrap px-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm sm:text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-xs sm:text-sm md:text-base text-gray-300 text-center">4.9/5 на основе 70+ отзывов</span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm md:text-base text-gray-400 text-center px-2">
                <p>💬 "Читается запойно!" — Елена</p>
                <p>📚 "Книга важнейшая" — Михаил</p>
                <p>🔥 "Не могу оторваться!" — Сергей</p>
              </div>
            </div>

            <Card className="bg-red-950/30 border-book-red max-w-2xl mx-auto mt-4 md:mt-8">
              <CardContent className="p-3 sm:p-5 md:p-6 space-y-1 md:space-y-3">
                <p className="text-xs sm:text-base md:text-lg text-gray-300">
                  ⚠️ Предупреждение: после прочтения вы не сможете верить "как раньше"
                </p>
                <p className="text-sm sm:text-lg md:text-xl font-bold text-book-gold">
                  ✅ Но вы наконец начнёте дышать
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 max-w-3xl mx-auto pt-3 md:pt-6 px-2">
              <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center">⚡ Моментальная доставка</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center">📦 Доставка по России</p>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center">💬 Чат с автором</p>
            </div>
        </div>
      </section>
    </>
  );
}