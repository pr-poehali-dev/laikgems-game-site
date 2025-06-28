import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const GameFeatures = () => {
  const features = [
    {
      icon: "MousePointer",
      title: "Кликер-игра",
      description:
        "Накапливайте виртуальную валюту простыми кликами. Улучшайте множители и автоматизируйте процесс.",
      color: "from-cyan-500 to-blue-600",
      glowColor: "rgba(0, 255, 255, 0.3)",
    },
    {
      icon: "Trophy",
      title: "Мини-игры",
      description:
        "Участвуйте в турнирах и мини-играх с призовым фондом. Докажите свое мастерство и выиграйте награды.",
      color: "from-purple-500 to-pink-600",
      glowColor: "rgba(139, 92, 246, 0.3)",
    },
    {
      icon: "TrendingUp",
      title: "Инвестиции",
      description:
        "Стратегическая игра с инвестированием. Покупайте активы, управляйте портфелем и получайте прибыль.",
      color: "from-green-500 to-emerald-600",
      glowColor: "rgba(0, 255, 136, 0.3)",
    },
    {
      icon: "CheckSquare",
      title: "Казуальные задания",
      description:
        "Выполняйте простые ежедневные задания и получайте вознаграждения. Идеально для новичков.",
      color: "from-orange-500 to-red-600",
      glowColor: "rgba(249, 115, 22, 0.3)",
    },
    {
      icon: "Zap",
      title: "Крипто-майнинг",
      description:
        "Симулятор майнинга криптовалют. Покупайте оборудование, оптимизируйте процессы и зарабатывайте.",
      color: "from-yellow-500 to-amber-600",
      glowColor: "rgba(234, 179, 8, 0.3)",
    },
    {
      icon: "Users",
      title: "Командные битвы",
      description:
        "Объединяйтесь в команды, участвуйте в PvP-сражениях и захватывайте территории вместе с друзьями.",
      color: "from-indigo-500 to-purple-600",
      glowColor: "rgba(99, 102, 241, 0.3)",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Игровые возможности
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Множество способов заработка и развлечений в одной экосистеме
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="game-card rounded-xl p-6 glow-hover group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    boxShadow: `0 0 20px ${feature.glowColor}`,
                  }}
                >
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-orbitron font-semibold mb-3 text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Action Button */}
              <Button
                variant="ghost"
                size="sm"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 h-auto font-medium"
              >
                Подробнее
                <Icon name="ArrowRight" className="ml-1" size={16} />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-12 py-4 text-lg glow-effect"
          >
            <Icon name="Rocket" className="mr-2" size={20} />
            Начать зарабатывать
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
