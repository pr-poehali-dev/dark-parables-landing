export default function BuySection() {
  return (
    <>
      <footer className="py-12 px-4 border-t border-gray-800 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-book-gold">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email для вопросов</p>
                <div className="flex flex-col gap-2">
                  <a href="#" className="hover:text-book-blue transition-colors">📱 Telegram</a>
                  <a href="#" className="hover:text-book-blue transition-colors">📘 VK</a>
                  <a href="#" className="hover:text-book-blue transition-colors">▶️ YouTube</a>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-book-gold">Навигация</h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <a href="#about" className="hover:text-book-blue transition-colors">О книге</a>
                <a href="#author" className="hover:text-book-blue transition-colors">Об авторе</a>
                <a href="#reviews" className="hover:text-book-blue transition-colors">Отзывы</a>
                <a href="#faq" className="hover:text-book-blue transition-colors">FAQ</a>
                <a href="#buy" className="hover:text-book-blue transition-colors">Купить</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-book-gold">Юридическая информация</h3>
              <div className="flex flex-col gap-2 text-gray-400 text-sm">
                <a href="#" className="hover:text-book-blue transition-colors">Политика конфиденциальности</a>
                <a href="#" className="hover:text-book-blue transition-colors">Договор оферты</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Дарья Серп. Все права защищены.</p>
            <p className="mt-2">"Заповеди зла" — Книга для тех, кто не боится думать</p>
          </div>
        </div>
      </footer>
    </>
  );
}