import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-green-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-orbitron font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent pulse-glow">
              LAIKGEMS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Игровая платформа нового поколения
          </p>
        </div>

        {/* Features Icons */}
        <div className="flex justify-center space-x-8 mb-8">
          {[
            { icon: "MousePointer", color: "text-cyan-400" },
            { icon: "Coins", color: "text-purple-400" },
            { icon: "TrendingUp", color: "text-green-400" },
            { icon: "Zap", color: "text-yellow-400" },
          ].map((item, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full border-2 border-current ${item.color} flex items-center justify-center glow-hover animate-bounce`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Icon name={item.icon} size={24} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <p className="text-lg text-gray-400 mb-6">
            Зарабатывайте виртуальную валюту, участвуйте в мини-играх и стройте
            свою империю
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg glow-effect glow-hover"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать играть
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg"
            >
              <Icon name="Info" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: "10K+", label: "Игроков" },
            { value: "₽50M", label: "Выплачено" },
            { value: "24/7", label: "Поддержка" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-orbitron font-bold text-cyan-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
