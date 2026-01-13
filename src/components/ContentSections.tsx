import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

  const detailedReviews = [
    {
      title: "Читается запойно",
      text: "Прочла запойно 50 страниц. С одной стороны, хочется читать медленно и вдумчиво. С другой, взгляд скользит дальше, так как написано не только глубоко, но и увлекательно",
      author: "Елена",
      source: "WildBerries",
      rating: 5
    },
    {
      title: "Без елея",
      text: "Автор излагает тему религии просто, смело, без \"церковно-канцеляритских подкатов\". В этой книге вас никто не попытается отмиссионерить и делать выбор за вас",
      author: "Тамара",
      source: "Ozon",
      rating: 5
    },
    {
      title: "Перевернуло представления",
      text: "Когда прочтёте до конца, увидите, что то, что вы называли добром, не такое уж и добро. Евангелие про то, что Бог пришёл и стал слабым",
      author: "Мария",
      source: "LiveLib",
      rating: 5
    },
    {
      title: "Помогла сформулировать",
      text: "Смог наконец сформулировать то, что раньше чувствовал смутно. Книга очень чётко говорит о настоящем — о христианстве подлинном",
      author: "Сергей",
      source: "Литрес",
      rating: 5
    },
    {
      title: "Ожидал мемчики, получил богословие",
      text: "Ожидал мемчики, а увидел Настоящее Богословие. Всем думающим и ищущим очень рекомендую",
      author: "Дмитрий",
      source: "WildBerries",
      rating: 5
    },
    {
      title: "Отрезвляет и даёт надежду",
      text: "Очень хорошо отрезвляет и напоминает, в чём именно заключается главная заповедь. Книга не вгоняет в уныние, а даёт надежду",
      author: "Ирина",
      source: "WildBerries",
      rating: 5
    },
    {
      title: "Для думающих людей",
      text: "Христос принёс поистине неземную идею о любви к чужому. Убийственная идея, которая обрекает её носителя на Крестную смерть",
      author: "Мария",
      source: "LiveLib",
      rating: 5
    },
    {
      title: "Провокационно, но аргументированно",
      text: "Автор готов отстаивать наивную чистоту и величие Христа. Получилось ёмко, аргументированно, остро и изящно",
      author: "Ольга",
      source: "Литрес",
      rating: 5
    }
  ];

  const positiveReviews = [
    { text: "Не могу оторваться, слишком животрепещущие темы. Книга важнейшая", author: "Михаил, Литрес" },
    { text: "Книга не имеет аналогов среди текстов русскоговорящих авторов. Большое уважение и благодарность автору", author: "Ozon" },
    { text: "Три достоинства: юмор, глубина и высота. Буду черпать формулировки для дискуссий", author: "Андрей, Самара" }
  ];

  const criticalReviews = [
    { text: "Много Ницше; пока не решил, насколько это оправдано", author: "Священнослужитель, WildBerries (⭐⭐⭐⭐⭐)" },
    { text: "Подумал-подумал, и решил, что лучше святых отцов почитаю", author: "Александр (2 звезды)" },
    { text: "С некоторыми тезисами не согласен. Но это не повод занижать оценку. Автор прекрасно знает Евангелие", author: "Священник РПЦ, Литрес (⭐⭐⭐⭐)" }
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

      <section id="author" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-10 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3">
              <div className="relative">
                <div className="absolute inset-0 bg-book-gold/20 blur-2xl rounded-full"></div>
                <img 
                  src="https://cdn.poehali.dev/files/author-photo.jpg" 
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
              <div className="space-y-4 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  «Я 20 лет была убеждённой атеисткой. Считала религию опиумом для народа и инструментом контроля.
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
                <Button className="bg-book-blue hover:bg-book-blue/90 text-white font-bold">
                  Подписаться на канал
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Что говорят читатели</h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Книга собрала сотни 5-звёздочных отзывов и вызвала бурные обсуждения
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto pt-6">
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-2">
                <p className="text-3xl font-bold text-book-blue">📚 300+</p>
                <p className="text-gray-400">отзывов за первый месяц</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/80 border-gray-800">
              <CardContent className="p-6 space-y-2">
                <p className="text-3xl font-bold text-book-blue">💬 500+</p>
                <p className="text-gray-400">читателей в закрытом чате</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {detailedReviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-white border-gray-200 h-full">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{review.title}</h3>
                      <p className="text-gray-700 flex-grow leading-relaxed">"{review.text}"</p>
                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm text-gray-600">— {review.author}</p>
                        <Badge variant="outline" className="w-fit mt-2 text-book-blue border-book-blue">
                          {review.source}
                        </Badge>
                      </div>
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

      <section id="opinions" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Эта книга не оставляет равнодушными
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Даже критики признают: здесь есть о чём подумать
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-green-950/30 border-green-700">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💚</span>
                  <h3 className="text-2xl font-bold text-green-400">ВОСТОРГ</h3>
                </div>
                <div className="space-y-4">
                  {positiveReviews.map((review, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                      <p className="text-gray-300 leading-relaxed mb-2">💬 {review.text}</p>
                      <p className="text-sm text-gray-500">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-950/30 border-yellow-700">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💭</span>
                  <h3 className="text-2xl font-bold text-yellow-400">СОМНЕНИЯ</h3>
                </div>
                <div className="space-y-4">
                  {criticalReviews.map((review, index) => (
                    <div key={index} className="border-l-4 border-yellow-500 pl-4 py-2">
                      <p className="text-gray-300 leading-relaxed mb-2">💬 {review.text}</p>
                      <p className="text-sm text-gray-500">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center max-w-3xl mx-auto space-y-4 pt-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Книга задевает за живое. Именно поэтому одни называют её «важнейшей», а другие говорят: «Лучше святых отцов почитаю».
            </p>
            <p className="text-xl font-semibold text-book-gold">
              Но даже критики не могут отрицать: здесь поднимаются вопросы, которые нельзя игнорировать.
            </p>
          </div>
        </div>
      </section>

      <section id="warning" className="py-16 md:py-24 px-4">
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
    </>
  );
}