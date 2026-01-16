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
      <section id="formats" className="pt-20 pb-12 md:pt-28 md:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
            Выберите формат
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="p-3 xs:p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border-2 border-gray-700 hover:border-book-gold transition-all hover:scale-105">
              <div className="text-center space-y-4 xs:space-y-6">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">ЭЛЕКТРОННАЯ КНИГА</h3>
                <ul className="space-y-2 xs:space-y-3 text-left">
                  {[
                    'Моментальная доставка',
                    'Чтение на любом устройстве',
                    'Можно делать заметки'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 xs:gap-3">
                      <Icon name="Check" size={16} className="text-book-gold flex-shrink-0 xs:w-5 xs:h-5" />
                      <span className="text-sm xs:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 sm:pt-4">
                  <p className="text-2xl sm:text-3xl font-bold text-book-gold mb-4 sm:mb-6">299 ₽</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-book-gold hover:bg-book-red text-black hover:text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base py-4 sm:py-5 px-2 xs:px-3 sm:px-4 leading-tight"
                    onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
                  >
                    СКАЧАТЬ НА ЛИТРЕС →
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-3 xs:p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border-2 border-gray-700 hover:border-book-gold transition-all hover:scale-105">
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">📖</div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold">БУМАЖНАЯ КНИГА</h3>
                <ul className="space-y-2 xs:space-y-3 text-left">
                  {[
                    '272 страницы',
                    'Твёрдый переплёт',
                    'Доставка по России'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 xs:gap-3">
                      <Icon name="Check" size={16} className="text-book-gold flex-shrink-0 xs:w-5 xs:h-5" />
                      <span className="text-sm xs:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 sm:pt-4">
                  <p className="text-2xl sm:text-3xl font-bold text-book-gold mb-4 sm:mb-6">до 999 ₽</p>
                  <Button 
                    size="lg" 
                    className="w-full bg-book-gold hover:bg-book-red text-black hover:text-white font-bold text-[10px] xs:text-xs sm:text-sm md:text-base py-4 sm:py-5 px-2 xs:px-3 sm:px-4 leading-tight"
                    onClick={() => window.open('https://wildberries.ru/catalog/0/search.aspx?search=WW271423', '_blank')}
                  >
                    <span className="hidden xs:inline">КУПИТЬ НА WILDBERRIES →</span>
                    <span className="xs:hidden">КУПИТЬ НА WB →</span>
                  </Button>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 sm:mt-3">зависит от ваших персональных скидок на WB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-3 sm:gap-6 md:gap-8 text-[10px] xs:text-xs sm:text-sm md:text-base">
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl flex-shrink-0">🔥</span>
              <span>70+ в чате</span>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl flex-shrink-0">⭐</span>
              <span>4.9/5</span>
            </div>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl flex-shrink-0">💬</span>
              <span>"Запойно!" — Елена</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="pt-20 pb-12 md:pt-28 md:pb-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="bg-white/5 rounded-lg border border-gray-800 px-3 xs:px-4 sm:px-6">
              <AccordionTrigger className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:text-book-gold">
                ❓ Это антихристианская книга?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed pt-3 sm:pt-4">
                Нет. Это книга о том, как отличить Евангелие от искажений, накопившихся за 2000 лет. Её читают и священники, и атеисты.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/5 rounded-lg border border-gray-800 px-3 xs:px-4 sm:px-6">
              <AccordionTrigger className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:text-book-gold">
                ❓ Нужно ли быть верующим, чтобы читать?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed pt-3 sm:pt-4">
                Абсолютно нет. Книга написана бывшей атеисткой и будет интересна людям любых взглядов — от агностиков до воцерковлённых христиан.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/5 rounded-lg border border-gray-800 px-3 xs:px-4 sm:px-6">
              <AccordionTrigger className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:text-book-gold">
                ❓ Это сложная академическая работа?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed pt-3 sm:pt-4">
                Нет, это публицистика с опорой на философию, психологию и биологию. Написано живым языком. Читается как хороший эссе-лонгрид.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/5 rounded-lg border border-gray-800 px-3 xs:px-4 sm:px-6">
              <AccordionTrigger className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:text-book-gold">
                ❓ Как получить доступ в чат?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed pt-3 sm:pt-4">
                Купите книгу (бумажную или электронную) на любой площадке. Ссылка на чат будет на последней странице или придёт на email.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/5 rounded-lg border border-gray-800 px-3 xs:px-4 sm:px-6">
              <AccordionTrigger className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:text-book-gold">
                ❓ Можно ли читать, если я не согласен с автором?
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed pt-3 sm:pt-4">
                Конечно! Даже священники, которые не согласны с некоторыми тезисами, ставят книге 5 звёзд. Главное — честный разговор, а не навязывание мнений.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="final-cta" className="py-12 sm:py-16 md:py-20 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-4 sm:space-y-6 md:space-y-8">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight">
            Христианство —<br className="xs:hidden" /> это не комфорт.<br className="hidden sm:block" />
            Это вызов. Это риск.<br className="xs:hidden" /> Это свобода.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Это балансирование на лезвии бритвы между готовыми ответами и честными вопросами.
            Это выбор любви там, где легче выбрать правила.
            Это жизнь изгоя среди "правильных".
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-book-gold">
            Это Христос вместо традиций.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold pt-4 sm:pt-6">
            Готовы?
          </p>
          <Button 
            size="lg" 
            className="bg-book-red hover:bg-book-gold text-white font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-4 xs:px-6 sm:px-10 md:px-16 py-4 sm:py-6 md:py-8 mt-6 sm:mt-8 hover:scale-110 transition-all shadow-2xl w-full sm:w-auto"
            onClick={() => window.open('https://www.litres.ru/book/darya-serp/zapovedi-zla-bog-protiv-tradicionnyh-cennostey-72952082/chitat-onlayn/?utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=06d2a99e&advcake_params=&utm_term=&erid=2VfnxyNkZrY&advcake_method=1&m=1', '_blank')}
          >
            НАЧАТЬ ЧИТАТЬ
          </Button>
          <div className="space-y-2 pt-4 sm:pt-6 text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-400 px-2">
            <p className="flex items-center justify-center gap-1.5 xs:gap-2">
              <span className="text-yellow-500 flex-shrink-0 text-sm xs:text-base">⚠️</span>
              <span>Предупреждение: после прочтения вы не сможете верить "как раньше"</span>
            </p>
            <p className="flex items-center justify-center gap-1.5 xs:gap-2">
              <Icon name="Check" size={14} className="text-book-gold flex-shrink-0 xs:w-4 xs:h-4" />
              <span>Но вы наконец начнёте дышать</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}