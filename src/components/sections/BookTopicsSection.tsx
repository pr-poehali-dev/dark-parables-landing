import { Card, CardContent } from "@/components/ui/card";

interface BookTopicsSectionProps {
  scrollToSection?: (id: string) => void;
}

export default function BookTopicsSection({ scrollToSection }: BookTopicsSectionProps = {}) {
  const handleScroll = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
    <section id="book-topics" className="py-12 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10">
          Что вы узнаете
        </h2>
        <div className="space-y-4 md:space-y-6">
          {bookTopics.map((topic, index) => (
            <Card key={index} className="bg-gray-900/80 border-gray-800 hover:border-book-gold transition-all duration-300 cursor-pointer group">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-book-blue bg-book-blue/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">{index + 1}</span>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-book-gold transition-colors leading-tight">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed pl-0">
                    {topic.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => handleScroll('author')}
            className="text-book-gold hover:text-book-red transition-colors text-lg font-semibold"
          >
            Читать дальше ↓
          </button>
        </div>
      </div>
    </section>
  );
}