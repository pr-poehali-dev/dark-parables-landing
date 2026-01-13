import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ContentSections() {
  const painPoints = [
    "Почему послушание делает возможными геноциды?",
    "Почему мы восхищаемся успешными и презираем неудачников?",
    "Почему Христос критиковал праведников, а не грешников?",
    "Почему традиционные ценности оправдывают жестокость?",
    "Почему «хорошие люди» молчат о зле?",
    "Почему церковь боится свободы больше, чем греха?"
  ];

  const reviews = [
    { text: "Читается запойно. Перевернуло мои представления о вере", rating: 5, source: "Wildberries" },
    { text: "Без елея и банальностей. Наконец-то честная книга", rating: 5, source: "Ozon" },
    { text: "Это не утешение, это вызов. И это прекрасно", rating: 5, source: "LiveLib" },
    { text: "Автор говорит то, о чем все боятся думать", rating: 5, source: "Литрес" },
    { text: "Книга для тех, кто устал от фальши в религии", rating: 5, source: "Wildberries" },
    { text: "Провокационно, но аргументированно. Рекомендую", rating: 4, source: "Ozon" },
    { text: "Написано простым языком о сложных вещах", rating: 5, source: "LiveLib" },
    { text: "Эта книга меняет взгляд на христианство", rating: 5, source: "Литрес" }
  ];

  const forYou = [
    '"Бог в храме есть, а Христа не вижу"',
    '"Устал от магического христианства"',
    '"Хочу понимать суть, а не соблюдать правила"',
    '"Чувствую себя белой вороной среди верующих"',
    '"Задыхаюсь от лицемерия в церкви"'
  ];

  const notForYou = [
    'Ищете готовые ответы и утешение',
    'Хотите спокойствия в привычных ритуалах',
    'Не готовы пересматривать убеждения',
    'Нужна религия как социальный статус',
    'Предпочитаете не задавать вопросов'
  ];

  const topics = [
    { icon: "Flame", text: "Эволюция и христианство — совместимо?" },
    { icon: "Skull", text: "Традиции — это «труп веры»?" },
    { icon: "Crown", text: "Можно ли быть христианином-изгоем?" },
    { icon: "Shield", text: "Патриотизм vs Евангелие" },
    { icon: "Heart", text: "Любовь к врагам — безумие или суть?" },
    { icon: "Brain", text: "Психология послушания и нацизм" },
    { icon: "Cross", text: "Христос против семейных ценностей?" },
    { icon: "BookOpen", text: "Ницше и Евангелие: точки пересечения" },
    { icon: "Zap", text: "Почему праведность опаснее греха?" }
  ];

  return (
    <>
      <section id="questions" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Вопросы, которые <span className="text-book-red">запрещено</span> задавать
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-800 hover:border-book-red transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="AlertCircle" size={24} className="text-book-red flex-shrink-0 mt-1 group-hover:animate-pulse" />
                    <p className="text-lg leading-relaxed">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">О чём книга?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Icon name="Dna" size={48} className="mx-auto text-book-blue" />
              <h3 className="text-2xl font-bold">БИОЛОГИЯ</h3>
              <p className="text-gray-400">Эволюционная природа морали и альтруизма</p>
            </div>
            <div className="space-y-4">
              <Icon name="Zap" size={48} className="mx-auto text-book-gold" />
              <h3 className="text-2xl font-bold">ФИЛОСОФИЯ</h3>
              <p className="text-gray-400">Ницше, Достоевский и евангельская этика</p>
            </div>
            <div className="space-y-4">
              <Icon name="Brain" size={48} className="mx-auto text-book-red" />
              <h3 className="text-2xl font-bold">ПСИХОЛОГИЯ</h3>
              <p className="text-gray-400">Механизмы послушания и деструкции</p>
            </div>
          </div>
          <div className="mt-12 pt-12 border-t border-gray-800">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-quote">
              Евангелие через призму Ницше, психологии нацизма и эволюционной биологии
            </p>
          </div>
        </div>
      </section>

      <section id="thesis" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-red p-8 md:p-12">
            <CardContent className="space-y-6 p-0">
              <h2 className="text-3xl md:text-4xl font-bold text-center">Ключевой тезис</h2>
              <blockquote className="text-xl md:text-2xl leading-relaxed font-quote text-center border-l-4 border-book-red pl-6">
                "Христос пришёл <span className="text-book-red font-bold">НЕ</span> учить любви к своим — это умеют даже курицы.
                Он учил <span className="text-book-gold">безумной любви к врагам</span>. 
                И это единственное, что отличает человека от животного."
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Что говорят читатели
          </h2>
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-900/80 border-gray-800 h-full">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                      <p className="text-gray-300 flex-grow italic">"{review.text}"</p>
                      <Badge variant="outline" className="w-fit text-book-blue border-book-blue">
                        {review.source}
                      </Badge>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      <section id="warning" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-red-950/50 border-2 border-book-red">
            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="flex items-center gap-3 justify-center">
                <Icon name="AlertTriangle" size={32} className="text-book-red" />
                <h2 className="text-2xl md:text-3xl font-bold">ВНИМАНИЕ</h2>
              </div>
              <p className="text-xl text-center leading-relaxed">
                Эта книга может:
              </p>
              <ul className="space-y-3 text-lg max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <Icon name="X" size={24} className="text-book-red flex-shrink-0 mt-1" />
                  <span>Разрушить привычные представления о добре и зле</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" size={24} className="text-book-red flex-shrink-0 mt-1" />
                  <span>Вызвать когнитивный диссонанс и внутренний конфликт</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="X" size={24} className="text-book-red flex-shrink-0 mt-1" />
                  <span>Лишить сна и привычного комфорта</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <span className="font-bold">Но если готовы — даст СВОБОДУ</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="audience" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Для кого эта книга?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-950/30 border-green-700">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size={32} className="text-green-500" />
                  <h3 className="text-2xl font-bold">ДЛЯ ВАС</h3>
                </div>
                <ul className="space-y-4">
                  {forYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle" size={20} className="text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-red-950/30 border-red-700">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Icon name="X" size={32} className="text-book-red" />
                  <h3 className="text-2xl font-bold">НЕ ДЛЯ ВАС</h3>
                </div>
                <ul className="space-y-4">
                  {notForYou.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="XCircle" size={20} className="text-book-red flex-shrink-0 mt-1" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="community" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">
            Вступите в сообщество
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Прочитайте книгу — получите билет в клуб думающих верующих и агностиков
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-3">
                <Icon name="MessageCircle" size={32} className="mx-auto text-book-blue" />
                <p className="text-gray-300">Обсуждения с автором</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-3">
                <Icon name="Moon" size={32} className="mx-auto text-book-gold" />
                <p className="text-gray-300">Философские споры до 2 ночи</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-3">
                <Icon name="Users" size={32} className="mx-auto text-book-red" />
                <p className="text-gray-300">Люди, которые понимают</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="topics" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Темы без табу
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-800 hover:border-book-gold transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name={topic.icon} size={28} className="text-book-gold flex-shrink-0 group-hover:animate-pulse" />
                  <p className="text-base leading-snug">{topic.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
