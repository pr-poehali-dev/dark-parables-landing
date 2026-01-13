import { Card, CardContent } from "@/components/ui/card";

interface PhilosophySectionsProps {
  scrollToSection?: (id: string) => void;
}

export default function PhilosophySections({ scrollToSection }: PhilosophySectionsProps = {}) {
  const handleScroll = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const painPoints = [
    "Почему послушание считается добродетелью, если именно оно делает возможными геноциды?",
    "Почему мы восхищаемся успешными и презираем неудачников — и при чём здесь Бог?",
    "Почему \"хорошие люди\" закрывают глаза на насилие в семье?",
    "Почему Христос критиковал не грешников, а праведников?",
    "Почему традиционные ценности часто оправдывают жестокость?",
    "Почему \"магическое христианство\" (свечку поставил = хороший христианин) вытесняет настоящее Евангелие?"
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
            <button 
              onClick={() => handleScroll('about')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
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
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('thesis')}
              className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
            >
              Читать дальше ↓
            </button>
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
          <div className="text-center mt-12">
            <button 
              onClick={() => handleScroll('topics')}
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