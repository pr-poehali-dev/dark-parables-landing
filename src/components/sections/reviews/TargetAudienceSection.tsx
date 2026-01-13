import { Card, CardContent } from "@/components/ui/card";

export default function TargetAudienceSection() {
  return (
    <>
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
