import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DetailedReviewsSectionProps {
  scrollToSection?: (id: string) => void;
}

export default function DetailedReviewsSection({ scrollToSection }: DetailedReviewsSectionProps = {}) {
  const handleScroll = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
      <section id="reviews" className="py-20 md:py-32 px-4">
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
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('opinions')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>

      <section id="opinions" className="py-12 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold px-2">
              Эта книга не оставляет равнодушными
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 px-2">
              Даже критики признают: здесь есть о чём подумать
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-green-950/30 border-green-700">
              <CardContent className="p-5 sm:p-6 md:p-8 space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                  <span className="text-2xl sm:text-3xl">💚</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-green-400">ВОСТОРГ</h3>
                </div>
                <div className="space-y-4 md:space-y-5">
                  {positiveReviews.map((review, index) => (
                    <div key={index} className="py-2 border-b border-green-900/30 last:border-0">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-2">💬 {review.text}</p>
                      <p className="text-xs sm:text-sm text-gray-500">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-yellow-950/30 border-yellow-700">
              <CardContent className="p-5 sm:p-6 md:p-8 space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                  <span className="text-2xl sm:text-3xl">💭</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">СОМНЕНИЯ</h3>
                </div>
                <div className="space-y-4 md:space-y-5">
                  {criticalReviews.map((review, index) => (
                    <div key={index} className="py-2 border-b border-yellow-900/30 last:border-0">
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-2">💬 {review.text}</p>
                      <p className="text-xs sm:text-sm text-gray-500">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4 pt-6 md:pt-8 px-4">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Книга задевает за живое. Именно поэтому одни называют её «важнейшей», а другие говорят: «Лучше святых отцов почитаю».
            </p>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-book-gold">
              Но даже критики не могут отрицать: здесь поднимаются вопросы, которые нельзя игнорировать.
            </p>
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('reader-types')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
          </div>
        </div>
      </section>
    </>
  );
}