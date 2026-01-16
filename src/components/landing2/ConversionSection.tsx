import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ConversionSectionProps {
  scrollToSection: (id: string) => void;
}

export default function ConversionSection({ scrollToSection }: ConversionSectionProps) {
  return (
    <>
      <section id="formats" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Выберите формат
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border-2 border-gray-700 hover:border-book-gold transition-all hover:scale-105">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-3xl font-bold">ЭЛЕКТРОННАЯ КНИГА</h3>
                <ul className="space-y-3 text-left">
                  {[
                    'Моментальная доставка',
                    'Чтение на любом устройстве',
                    'Можно делать заметки'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-book-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-book-gold mb-6">299 ₽</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-book-gold hover:bg-book-red text-black hover:text-white font-bold text-lg py-6"
                    onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
                  >
                    СКАЧАТЬ НА ЛИТРЕС →
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border-2 border-gray-700 hover:border-book-gold transition-all hover:scale-105">
              <div className="text-center space-y-6">
                <div className="text-6xl mb-4">📖</div>
                <h3 className="text-3xl font-bold">БУМАЖНАЯ КНИГА</h3>
                <ul className="space-y-3 text-left">
                  {[
                    '272 страницы',
                    'Твёрдый переплёт',
                    'Доставка по России'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-book-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <p className="text-3xl font-bold text-book-gold mb-6">до 999 ₽</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-book-gold hover:bg-book-red text-black hover:text-white font-bold text-lg py-6"
                    onClick={() => window.open('https://wildberries.ru/catalog/0/search.aspx?search=WW271423', '_blank')}
                  >
                    КУПИТЬ НА WILDBERRIES →
                  </Button>
                  <p className="text-sm text-gray-400 mt-3">зависит от ваших персональных скидок на WB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <span>Уже 70+ читателей в чате</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 на основе 70+ отзывов</span>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span>"Читается запойно!" — Елена</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Это антихристианская книга?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Нет. Это книга о том, как отличить Евангелие от искажений, накопившихся за 2000 лет. Её читают и священники, и атеисты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Нужно ли быть верующим, чтобы читать?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Абсолютно нет. Книга написана бывшей атеисткой и будет интересна людям любых взглядов — от агностиков до воцерковлённых христиан.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Это сложная академическая работа?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Нет, это публицистика с опорой на философию, психологию и биологию. Написано живым языком. Читается как хороший эссе-лонгрид.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Как получить доступ в чат?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Купите книгу (бумажную или электронную) на любой площадке. Ссылка на чат будет на последней странице или придёт на email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/5 rounded-lg border border-gray-800 px-6">
              <AccordionTrigger className="text-xl font-semibold hover:text-book-gold">
                ❓ Можно ли читать, если я не согласен с автором?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-300 leading-relaxed pt-4">
                Конечно! Даже священники, которые не согласны с некоторыми тезисами, ставят книге 5 звёзд. Главное — честный разговор, а не навязывание мнений.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="final-cta" className="py-32 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Христианство — это не комфорт.<br />
            Это вызов. Это риск. Это свобода.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Это балансирование на лезвии бритвы между готовыми ответами и честными вопросами.
            Это выбор любви там, где легче выбрать правила.
            Это жизнь изгоя среди "правильных".
          </p>
          <p className="text-2xl md:text-3xl font-bold text-book-gold">
            Это Христос вместо традиций.
          </p>
          <p className="text-3xl font-semibold pt-6">
            Готовы?
          </p>
          <Button 
            size="lg" 
            className="bg-book-red hover:bg-book-gold text-white font-bold text-2xl px-16 py-8 mt-8 hover:scale-110 transition-all shadow-2xl"
            onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/chitat-onlayn/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
          >
            НАЧАТЬ ЧИТАТЬ
          </Button>
          <div className="space-y-2 pt-6 text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <span className="text-yellow-500">⚠️</span>
              <span>Предупреждение: после прочтения вы не сможете верить "как раньше"</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Check" size={20} className="text-book-gold" />
              <span>Но вы наконец начнёте дышать</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}