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
      <section id="community" className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Прочитайте книгу —<br />
              и присоединяйтесь к общению думающих и готовых к диалогу верующих и агностиков
            </h2>
          </div>
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-blue">
            <CardContent className="p-8 md:p-12 space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-book-blue text-center">💬 В ЧАТЕ ЧИТАТЕЛЕЙ</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" size={32} className="text-book-blue flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-300">Обсуждения глав с автором</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Moon" size={32} className="text-book-gold flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-300">Философские споры до 2 ночи</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Users" size={32} className="text-book-red flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-300">Люди, которые понимают</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Heart" size={32} className="text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-gray-300">Место, где можно сомневаться</p>
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

      <section id="discussion-topics" className="py-20 md:py-32 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              ТЕМЫ, КОТОРЫЕ МЫ НЕ БОИМСЯ ОБСУЖДАТЬ
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              В этой книге и чате:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-book-red transition-all">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-200 leading-relaxed">{topic}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center space-y-6 pt-6">
            <div className="space-y-3">
              <p className="text-2xl font-bold text-book-gold">НЕТ ТАБУИРОВАННЫХ ТЕМ</p>
              <p className="text-2xl font-bold text-book-gold">НЕТ ГОТОВЫХ ОТВЕТОВ</p>
              <p className="text-2xl font-bold text-book-red">ЕСТЬ ЧЕСТНЫЙ РАЗГОВОР</p>
            </div>
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-red/90 text-white font-bold text-lg px-10 py-6"
              onClick={() => handleScroll('formats')}
            >
              ПРИСОЕДИНИТЬСЯ К РАЗГОВОРУ
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

      <section id="structure" className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-5xl space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Структура книги
          </h2>
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 hover:border-book-blue transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Badge className="bg-book-blue text-white font-bold text-lg px-3 py-1">{index + 1}</Badge>
                    <p className="text-lg text-gray-200 leading-relaxed flex-grow">{chapter}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-6 text-center space-y-2">
                <p className="text-4xl font-bold text-book-gold">272</p>
                <p className="text-gray-400">📖 страницы</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-6 text-center space-y-2">
                <p className="text-4xl font-bold text-book-gold">6</p>
                <p className="text-gray-400">📚 больших глав</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-6 text-center space-y-2">
                <p className="text-4xl font-bold text-book-gold">50+</p>
                <p className="text-gray-400">🔖 библейских цитат</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-book-gold">
              <CardContent className="p-6 text-center space-y-2">
                <p className="text-4xl font-bold text-book-gold">100+</p>
                <p className="text-gray-400">🧠 научных источников</p>
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

      <section id="faq" className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Частые вопросы
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700">
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-book-gold flex items-start gap-3">
                    <span className="flex-shrink-0">❓</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed pl-9">
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

      <section id="final-cta" className="py-20 md:py-32 px-4 bg-gradient-to-b from-black/30 to-black">
        <div className="container mx-auto max-w-5xl space-y-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              ХРИСТИАНСТВО — ЭТО НЕ КОМФОРТ
            </h2>
            <div className="text-2xl md:text-3xl text-gray-300 leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>Это вызов.</p>
              <p>Это риск.</p>
              <p>Это свобода.</p>
              <p className="pt-4">Это балансирование на лезвии бритвы<br />между готовыми ответами и честными вопросами.</p>
              <p>Это выбор любви там,<br />где легче выбрать правила.</p>
              <p>Это жизнь изгоя среди "правильных".</p>
              <p className="text-book-red font-bold text-4xl pt-4">Это Христос вместо традиций.</p>
              <p className="text-book-gold font-bold text-5xl pt-6">ГОТОВЫ?</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <Button 
              size="lg" 
              className="bg-book-red hover:bg-book-red/90 text-white font-bold text-xl px-12 py-8 animate-pulse"
              onClick={() => handleScroll('formats')}
            >
              КУПИТЬ КНИГУ И ВЫБРАТЬ КРАСНУЮ ТАБЛЕТКУ
            </Button>
          </div>
        </div>
      </section>

      <section id="formats" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                Выберите формат
              </h2>
              <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-gold">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">📖</div>
                      <h3 className="text-2xl font-bold text-book-gold">БУМАЖНАЯ КНИГА</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• 272 страницы</li>
                      <li>• Твёрдый переплёт</li>
                      <li>• Доставка по России</li>
                    </ul>
                    <div className="space-y-3 pt-4">
                      <Button 
                        className="w-full bg-book-red hover:bg-book-red/90 text-white font-bold text-lg py-6"
                        onClick={() => window.open('https://wildberries.ru/catalog/0/search.aspx?search=WW268963', '_blank')}
                      >
                        КУПИТЬ НА WILDBERRIES
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-blue">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">📱</div>
                      <h3 className="text-2xl font-bold text-book-blue">ЭЛЕКТРОННАЯ ВЕРСИЯ</h3>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Моментальная доставка</li>
                      <li>• Чтение на любом устройстве</li>
                      <li>• Можно делать заметки</li>
                    </ul>
                    <div className="pt-4">
                      <Button 
                        className="w-full bg-book-blue hover:bg-book-blue/90 text-white font-bold text-lg py-6"
                        onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/', '_blank')}
                      >
                        СКАЧАТЬ НА ЛИТРЕС
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="pt-6 space-y-3">
              <p className="text-xl text-gray-400 flex items-center justify-center gap-3">
                <Icon name="Flame" size={24} className="text-book-red" />
                <span>УЖЕ 500+ ЧИТАТЕЛЕЙ В ЧАТЕ</span>
              </p>
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
                <span className="text-xl text-gray-300 ml-2">4.9/5 на основе 300+ отзывов</span>
              </div>
              <div className="space-y-2 text-lg text-gray-400">
                <p>💬 "Читается запойно!" — Елена</p>
                <p>📚 "Книга важнейшая" — Михаил</p>
                <p>🔥 "Не могу оторваться!" — Сергей</p>
              </div>
            </div>

            <Card className="bg-red-950/30 border-book-red max-w-2xl mx-auto mt-8">
              <CardContent className="p-6 space-y-3">
                <p className="text-lg text-gray-300">
                  ⚠️ Предупреждение: после прочтения<br />
                  вы не сможете верить "как раньше"
                </p>
                <p className="text-xl font-bold text-book-gold">
                  ✅ Но вы наконец начнёте дышать
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6">
              <p className="text-gray-400">⚡ Моментальная доставка электронной версии</p>
              <p className="text-gray-400">📦 Доставка бумажной книги по всей России</p>
              <p className="text-gray-400">💬 Вступайте в чат и общайтесь с автором</p>
            </div>
        </div>
      </section>
    </>
  );
}