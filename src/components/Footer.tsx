import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerLinks = {
    Игры: ["Кликер", "Мини-игры", "Инвестиции", "Майнинг"],
    Пользователям: ["Профиль", "Вывод средств", "Рейтинг", "FAQ"],
    Поддержка: [
      "Связаться с нами",
      "Техподдержка",
      "Правила",
      "Конфиденциальность",
    ],
  };

  const socialLinks = [
    { icon: "MessageCircle", href: "#", label: "Telegram" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Youtube", href: "#", label: "YouTube" },
    { icon: "Github", href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-black/50 border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Gem" className="text-black" size={20} />
              </div>
              <h3 className="text-xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                LAIKGEMS
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Игровая платформа нового поколения для заработка и развлечений в
              виртуальном мире.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-200 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Активных игроков", value: "12,547" },
              { label: "Выплачено сегодня", value: "₽847,392" },
              { label: "Завершено игр", value: "2,156,843" },
              { label: "Среднее время игры", value: "2.5 часа" },
            ].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-lg font-orbitron font-bold text-cyan-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © 2024 LAIKGEMS. Все права защищены.
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center">
              <Icon name="Shield" className="mr-1" size={12} />
              Безопасные платежи
            </span>
            <span className="flex items-center">
              <Icon name="Clock" className="mr-1" size={12} />
              24/7 поддержка
            </span>
            <span className="flex items-center">
              <Icon name="Star" className="mr-1" size={12} />
              Лицензированная платформа
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
