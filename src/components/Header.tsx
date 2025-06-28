import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "/", icon: "Home" },
    { name: "Игра", href: "/game", icon: "Gamepad2" },
    { name: "Профиль", href: "/profile", icon: "User" },
    { name: "Вывод", href: "/withdraw", icon: "Wallet" },
    { name: "О проекте", href: "/about", icon: "Info" },
    { name: "Рейтинг", href: "/leaderboard", icon: "Trophy" },
    { name: "Поддержка", href: "/support", icon: "HelpCircle" },
    { name: "FAQ", href: "/faq", icon: "MessageCircle" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center glow-effect">
              <Icon name="Gem" className="text-black" size={24} />
            </div>
            <h1 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              LAIKGEMS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Icon name={item.icon} size={16} />
                <span className="text-sm">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-cyan-500/20">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon name={item.icon} size={16} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
