import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ReaderInsightsSection() {
  return (
    <>
      <section id="reader-types" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Кто уже читает эту книгу
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="bg-gray-900/80 border-gray-800 hover:border-book-blue transition-all">
              <CardContent className="p-8 space-y-4">
                <div className="text-5xl">🔬</div>
                <h3 className="text-2xl font-bold text-book-gold">Атеисты и агностики</h3>
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

      <section id="quotes" className="py-16 md:py-24 px-4 bg-black/30">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Цитаты, которые зацепили читателей
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
    </>
  );
}