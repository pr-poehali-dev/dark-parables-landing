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
    "Почему послушание считается добродетелью, если именно оно делает возможными геноциды?",
    "Почему мы восхищаемся успешными и презираем неудачников — и при чём здесь Бог?",
    "Почему \"хорошие люди\" закрывают глаза на насилие в семье?",
    "Почему Христос критиковал не грешников, а праведников?",
    "Почему традиционные ценности часто оправдывают жестокость?",
    "Почему \"магическое христианство\" (свечку поставил = хороший христианин) вытесняет настоящее Евангелие?"
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

  const bookTopics = [
    {
      title: "Почему «традиционные ценности» — это заповеди зла",
      description: "Как семейственность становится кумовством, патриотизм — ксенофобией, а послушание — соучастием в преступлениях."
    },
    {
      title: "Архитектор Холокоста был образцовым семьянином",
      description: "История Адольфа Эйхмана и концепция \"банальности зла\" Ханны Арендт: как обычные люди творят чудовищное."
    },
    {
      title: "Ницше vs Христос: два взгляда на мораль",
      description: "Ницше проклинает христианство за любовь к слабым. Но именно поэтому его философия — лучшее доказательство правоты Евангелия."
    },
    {
      title: "Богатые злее бедных — научные доказательства",
      description: "Эксперименты показывают: власть и деньги буквально делают людей жестокими. И это объясняет евангельские проклятия богатству."
    },
    {
      title: "Смирение как инструмент насилия",
      description: "Как превращённое в покорность смирение поддерживает иерархию и позволяет сильным безнаказанно угнетать слабых."
    },
    {
      title: "\"Продавцы страдания\" и стокгольмский синдром",
      description: "Почему религия часто оправдывает страдание и учит жертв любить мучителей."
    }
  ];

  return (
    <>
      <section id="questions" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Вы когда-нибудь задумывались...
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-800 hover:border-book-red transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0">📌</span>
                    <p className="text-lg leading-relaxed">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12 space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Эта книга не даёт утешительных ответов.<br />
              Она показывает, как мораль служит не добру, а власти.
            </p>
            <button className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold">
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Евангелие через призму Ницше,<br className="hidden md:block" />
            психологии нацизма и эволюционной биологии
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-5xl mx-auto">🧬</div>
              <h3 className="text-2xl font-bold">БИОЛОГИЯ</h3>
              <p className="text-gray-300 leading-relaxed">
                Почему "эволюционное добро" — это верность стае и любовь к сильному.
              </p>
              <p className="text-gray-400 leading-relaxed">
                И почему животным не нужны заповеди для морального поведения.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl mx-auto">⚡</div>
              <h3 className="text-2xl font-bold">ФИЛОСОФИЯ</h3>
              <p className="text-gray-300 leading-relaxed">
                Что общего у христианских «традиционных ценностей» с идеями Ницше о господстве сильных над слабыми.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl mx-auto">🔬</div>
              <h3 className="text-2xl font-bold">ПСИХОЛОГИЯ</h3>
              <p className="text-gray-300 leading-relaxed">
                Как «нормальные люди» становятся соучастниками зла — от домашнего насилия до Холокоста.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-red p-8 md:p-12">
            <CardContent className="space-y-8 p-0">
              <blockquote className="text-2xl md:text-3xl leading-relaxed font-quote space-y-4">
                <p>
                  Христос пришёл <span className="text-book-red font-bold">НЕ</span> учить любви к своим —<br className="hidden md:block" />
                  это умеют даже курицы.
                </p>
                <p>
                  Он учил <span className="text-book-gold font-bold">безумной любви к врагам</span>.<br className="hidden md:block" />
                  И это единственное, что отличает человека от животного.
                </p>
              </blockquote>
              <div className="pt-6 border-t border-gray-700 space-y-4">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Верность семье, уважение к старшим, послушание власти, патриотизм — всё это есть у шимпанзе и работает по принципу «порядка клевания».
                </p>
                <p className="text-xl md:text-2xl font-bold text-book-gold">
                  Евангелие не про это.
                </p>
              </div>
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
            Что вы узнаете
          </h2>
          <div className="space-y-4">
            {bookTopics.map((topic, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-800 hover:border-book-gold transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 font-bold text-book-gold">{index + 1}️⃣</span>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-book-gold transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}