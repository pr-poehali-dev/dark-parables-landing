import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function AudienceSections() {
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

  return (
    <>
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

      <section id="audience" className="py-16 md:py-24 px-4 bg-black/30">
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

      <section id="community" className="py-16 md:py-24 px-4">
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
