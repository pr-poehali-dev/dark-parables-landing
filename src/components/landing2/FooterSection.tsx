export default function FooterSection() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 px-4 border-t border-gray-800 bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-book-gold">Контакты</h3>
            <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <a href="https://vk.com/badbeliever" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">📘 Группа «Меньше ада»</a>
              <a href="https://vk.ru/daryaserp" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">📘 Личный VK</a>
              <a href="https://youtube.com/@DaryaSerp" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">▶️ YouTube</a>
              <a href="https://t.me/daryaserp" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">📱 Канал о книгах</a>
              <a href="https://t.me/daryaserpbook" target="_blank" rel="noopener" className="hover:text-book-blue transition-colors block">💬 Читательский чат</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-book-gold">Навигация</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-xs sm:text-sm">
              <a href="#solution" className="hover:text-book-blue transition-colors">О книге</a>
              <a href="#reviews" className="hover:text-book-blue transition-colors">Отзывы</a>
              <a href="#author" className="hover:text-book-blue transition-colors">Об авторе</a>
              <a href="#faq" className="hover:text-book-blue transition-colors">Частые вопросы</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-book-gold">Юридическая информация</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-xs sm:text-sm">
              <a href="#" className="hover:text-book-blue transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-book-blue transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm space-y-2">
          <p>© 2025 Дарья Серп. Все права защищены.</p>
          <p>Индивидуальный предприниматель Косинцева Дарья Игоревна</p>
          <p>ОГРН 325774600668782 | ИНН 482421084121</p>
          <p>Реклама. ООО ЛИТРЕС, ИНН 7719571260, erid: 2VfnxyNkZrY</p>
        </div>
      </div>
    </footer>
  );
}