import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ReviewsSections() {
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

  return (
    <>
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

      <section id="reader-types" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Кто уже читает эту книгу
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl">🔬</div>
                <h3 className="text-2xl font-bold text-book-gold">Бывшие атеисты</h3>
                <p className="text-gray-300 leading-relaxed italic">
                  «Я атеистка, но очень рада, что купила.<br />
                  Интереснейший текст. Автор полемизирует<br />
                  с учёными и философами, которые считают,<br />
                  что христианство не нужно».
                </p>
                <p className="text-sm text-gray-500">— Анастасия, Литрес</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl">⛪</div>
                <h3 className="text-2xl font-bold text-book-gold">Воцерковлённые христиане</h3>
                <p className="text-gray-300 leading-relaxed italic">
                  «Выросла в воцерковлённой семье. Но книга<br />
                  очень хорошо отрезвляет и напоминает,<br />
                  в чём именно заключается главная заповедь<br />
                  Евангелия. Даёт надежду».
                </p>
                <p className="text-sm text-gray-500">— Ирина, WildBerries</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl">📿</div>
                <h3 className="text-2xl font-bold text-book-gold">Выпускники духовных учебных заведений</h3>
                <p className="text-gray-300 leading-relaxed italic">
                  «Закончил духовную семинарию. Вы большая умница —<br />
                  очень много пищи для размышления, поводов<br />
                  для переосмысления своих ценностей и представлений<br />
                  о Христе».
                </p>
                <p className="text-sm text-gray-500">— Литрес</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl">🕊️</div>
                <h3 className="text-2xl font-bold text-book-gold">Даже священнослужители</h3>
                <p className="text-gray-300 leading-relaxed italic">
                  «Я священник РПЦ. Автор прекрасно знает Евангелие.<br />
                  Разумеется, с некоторыми тезисами я не согласен.<br />
                  Но это не повод занижать оценку».
                </p>
                <p className="text-sm text-gray-500">— Литрес</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="insights" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Реальные инсайты читателей
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Эта книга взрывает мозг
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-book-gold/20 to-gray-900 border-book-gold">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl">💡</div>
                <h3 className="text-2xl font-bold text-book-gold uppercase">"ПАЗЛ НАКОНЕЦ СЛОЖИЛСЯ"</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  "Христос ломает вообще всю концепцию:<br />
                  не имеет значения, сколько поклонов ты сделал –<br />
                  имеют значение лишь реальные дела!
                </p>
                <p className="text-lg text-gray-200 leading-relaxed font-semibold">
                  Христианство – это о практике.<br />
                  Не о бла-бла-бла."
                </p>
                <p className="text-sm text-gray-400 pt-2">— Оленька, читательница</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-book-blue/20 to-gray-900 border-book-blue">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl">🌬️</div>
                <h3 className="text-2xl font-bold text-book-blue uppercase">"КАК ОТКРЫТЬ ОКНО ЗИМОЙ"</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  "Чтение этой книги похоже на открытие окна зимой<br />
                  в душном помещении. Свежего морозного воздуха<br />
                  так много, что становится холодновато.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed font-semibold">
                  Ортодоксальным ортодоксам держать на полочке<br />
                  пол-литровый пузырёк корвалола."
                </p>
                <p className="text-sm text-gray-400 pt-2">— Paulus, рецензент</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-book-red/20 to-gray-900 border-book-red">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl">🏠</div>
                <h3 className="text-2xl font-bold text-book-red uppercase">"НАКОНЕЦ ПОЧУВСТВОВАЛА ДОМ"</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  "Из книги светится мысль, что изгоем быть можно,<br />
                  это не порок. Сам Бог был изгоем и ученики его.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed font-semibold">
                  Эта мысль даёт мне чувство дома.<br />
                  Спасибо."
                </p>
                <p className="text-sm text-gray-400 pt-2">— Афина, читательница</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/20 to-gray-900 border-purple-500">
              <CardContent className="p-8 space-y-4">
                <div className="text-4xl">⚡</div>
                <h3 className="text-2xl font-bold text-purple-400 uppercase">"ХРИСТИАНСТВО — ЭТО РАДИКАЛЬНО"</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  "На 56-й странице усилилось ощущение,<br />
                  что став христианином я ввязался во что-то<br />
                  действительно радикальное –
                </p>
                <p className="text-lg text-gray-200 leading-relaxed font-semibold">
                  на много более тру радикальное,<br />
                  чем whitepowerblackmetall"
                </p>
                <p className="text-sm text-gray-400 pt-2">— Григорий, читатель</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center pt-6">
            <Button size="lg" className="bg-book-gold hover:bg-book-gold/90 text-black font-bold text-lg px-10 py-6">
              ПОЛУЧИТЬ СВОЙ ИНСАЙТ → Откройте книгу
            </Button>
          </div>
        </div>
      </section>

      <section id="discussions" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold uppercase">
              ПОСЛЕ ПРОЧТЕНИЯ ЧИТАТЕЛИ<br />
              НЕ МОГУТ МОЛЧАТЬ
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              В читательском чате за неделю — 200+ сообщений<br />
              глубоких философских споров
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-book-blue font-semibold text-sm md:text-base">
            {["#эволюция_и_христианство", "#свобода_воли", "#грехопадение", "#куриная_мораль", "#Бог_изгой", "#традиции_vs_вера", "#где_найти_Христа", "#отсечение_воли", "#практика_не_слова", "#духовные_авторитеты"].map((tag, i) => (
              <Badge key={i} variant="outline" className="px-4 py-2 border-book-blue text-book-blue hover:bg-book-blue/10 cursor-pointer transition-all">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-900/80 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-book-gold">💬 ДИСКУССИЯ О ПАРАДОКСАХ ВЕРЫ</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-book-blue">Tatiana K.:</span> "Получается, Бог знал что так будет,<br />
                    а всё равно дал людям свободу воли...<br />
                    И даже тем, кто воспользуется ею плохо"
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-book-blue">Михаил:</span> "Без свободы невозможна истинная Любовь.<br />
                    Богу нужны не куклы на верёвочках.<br />
                    Он хочет, чтобы мы сами выбрали любить Его.<br /><br />
                    Короче, всё ради любви 😁"
                  </p>
                  <p className="text-sm text-gray-500">[350+ реакций, 2 часа обсуждения]</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-book-gold">💬 ПРО "ТРУП ВЕРЫ"</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-book-blue">Афина:</span> «культура, приличия и традиции» –<br />
                    это труп веры. Богато украшенная мумия.<br />
                    «И восковых фигур прекрасен вид!»
                  </p>
                  <p className="text-sm text-gray-500">[Лайки: 💯💯💯💯]</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/80 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-book-gold">💬 КОГДА ПОНЯЛ, ЧТО НИЧЕГО НЕ ПОНЯЛ</h3>
                <div className="space-y-3 text-gray-300">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-book-blue">Сергей:</span> "Чем старше становлюсь,<br />
                    тем чаще говорю 'не знаю'.<br /><br />
                    А лет 20 назад казалось — вот-вот узнаю<br />
                    ответы на все основные вопросы"
                  </p>
                  <p className="text-sm text-gray-500">[Реакции: 🤝👍💯]</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/50 border-book-blue">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center text-book-blue">📊 ЗА 1 НЕДЕЛЮ В ЧАТЕ:</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-book-gold">200+</p>
                  <p className="text-gray-400">сообщений глубоких обсуждений</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-book-gold">15+</p>
                  <p className="text-gray-400">философских споров</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-book-gold">50+</p>
                  <p className="text-gray-400">личных инсайтов</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-book-gold">8</p>
                  <p className="text-gray-400">человек признались: "Теперь всё по-другому вижу"</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-book-gold">3 часа</p>
                  <p className="text-gray-400">средняя длина вечерней дискуссии</p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-book-gold">до 2 ночи</p>
                  <p className="text-gray-400">время последнего сообщения</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center pt-6">
            <Button size="lg" className="bg-book-red hover:bg-book-red/90 text-white font-bold text-lg px-10 py-6">
              ПРИСОЕДИНИТЬСЯ К ОБСУЖДЕНИЮ<br />
              ↓<br />
              КУПИТЬ И ВСТУПИТЬ В ЧАТ ЧИТАТЕЛЕЙ
            </Button>
          </div>
        </div>
      </section>

      <section id="quotes" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Цитаты, которые взорвали чат
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              То, что читатели сохраняют себе в заметки
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-gold">
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-book-gold text-black font-bold">📌 СОХРАНЕНО В ЗАМЕТКИ</Badge>
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                  "Правильность и смирение находятся<br />
                  по ту сторону добра и зла.<br /><br />
                  Они не связаны с духовностью<br />
                  и не подразумевают ни выбора, ни свободы.<br /><br />
                  Это просто комплекс механизмов приспособления."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-gold">
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-book-gold text-black font-bold">📌 СОХРАНЕНО В ЗАМЕТКИ</Badge>
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                  "Приятно и легко выбирать добро,<br />
                  когда оно полезно и одобряется окружающими.<br /><br />
                  Но как выбрать добро,<br />
                  если оно позорно, опасно и осуждается?"
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-red">
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-book-red text-white font-bold">📌 ПРОЦИТИРОВАНО 50+ РАЗ</Badge>
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                  "Евангелие — история о том,<br />
                  как любовь, истину и добро дискредитируют<br /><br />
                  во имя традиций,<br />
                  общественного спокойствия<br />
                  и для пользы уважаемых людей"
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-book-blue">
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-book-blue text-white font-bold">📌 ВЫЗВАЛО СПОР НА 100 СООБЩЕНИЙ</Badge>
                <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed italic">
                  "Нет ничего удивительного, что образ Бога —<br />
                  карающего суперальфа-самца — является ведущим.<br /><br />
                  Евангельский Бог,<br />
                  не похожий на властителя, —<br />
                  это парадокс и исключение"
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="warning" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="bg-gradient-to-br from-red-950/50 to-black border-4 border-book-red">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="text-center space-y-4">
                <div className="text-5xl">⚠️</div>
                <h2 className="text-3xl md:text-5xl font-bold text-book-red uppercase">ВНИМАНИЕ</h2>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-200">Эта книга может:</h3>
                <div className="space-y-3 text-lg text-gray-300">
                  <p>❌ Разрушить привычные представления о вере</p>
                  <p>❌ Вызвать когнитивный диссонанс</p>
                  <p>❌ Заставить пересмотреть "правильность"</p>
                  <p>❌ Лишить сна (читатели пишут до 2 ночи)</p>
                  <p>❌ Породить неудобные вопросы</p>
                </div>
                <p className="text-2xl font-bold text-book-gold">
                  ✅ Но если вы готовы — она даст СВОБОДУ
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-red-400">❌ КОМУ ТОЧНО НЕ ПОДОЙДЁТ:</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>🚫 Тем, кто ищет готовые ответы</p>
                    <p>🚫 Кто хочет "правил на все случаи"</p>
                    <p>🚫 Кому комфортно в "красивом гробу традиций"</p>
                    <p>🚫 Тем, для кого вера = набор ритуалов</p>
                    <p>🚫 Ищете подтверждение своей правоты</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-book-gold">✅ КОМУ ОСОБЕННО НУЖНА:</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>✨ "Задыхаюсь в традиционной церкви"</p>
                    <p>✨ "Ищу Христа среди икон и правил"</p>
                    <p>✨ "Чувствую себя изгоем в церковной среде"</p>
                    <p>✨ "Хочу практики, а не бла-бла-бла"</p>
                    <p>✨ "Надоело бесконечно смиряться'"</p>
                    <p>✨ "Готов к радикальному христианству"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="target-audience-extended" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Для кого эта книга
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-green-950/30 to-gray-900 border-2 border-green-600">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-green-400">✅ ЭТА КНИГА ДЛЯ ВАС, ЕСЛИ:</h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>✓ "Бог в храме есть, а Христа не вижу<br />
                     &nbsp;&nbsp;&nbsp;среди икон и старцев"</p>
                  <p>✓ "Устал от магического христианства:<br />
                     &nbsp;&nbsp;&nbsp;свечку поставил = хороший христианин"</p>
                  <p>✓ "Чувствую себя белой вороной в церкви"</p>
                  <p>✓ "Хочу не соблюдать правила,<br />
                     &nbsp;&nbsp;&nbsp;а ПОНИМАТЬ суть"</p>
                  <p>✓ "Задыхаюсь от 'завиноватить'<br />
                     &nbsp;&nbsp;&nbsp;в христианской среде"</p>
                  <p>✓ "Спорю с атеистами и понимаю их вопросы"</p>
                  <p>✓ "Ищу радикальное христианство,<br />
                     &nbsp;&nbsp;&nbsp;а не комфортную религию"</p>
                  <p>✓ "Хочу дискуссий на равных,<br />
                     &nbsp;&nbsp;&nbsp;а не церковной иерархии"</p>
                  <p>✓ "Готов к тому, что вера —<br />
                     &nbsp;&nbsp;&nbsp;это балансирование на лезвии бритвы"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-950/30 to-gray-900 border-2 border-red-600">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-red-400">❌ НЕ ДЛЯ ВАС, ЕСЛИ:</h3>
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <p>✗ Вы устали от поверхностных ответов<br />
                     &nbsp;&nbsp;&nbsp;на глубокие вопросы</p>
                  <p>✗ Ищете утешительные сказки</p>
                  <p>✗ Хотите спокойствия и уверенности в ритуалах</p>
                  <p>✗ Вам достаточно "так положено"</p>
                  <p>✗ Не готовы к неудобным вопросам</p>
                  <p>✗ Держите Библию на полке для почтения,<br />
                     &nbsp;&nbsp;&nbsp;но не читаете</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}