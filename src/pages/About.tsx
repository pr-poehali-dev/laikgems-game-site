import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              О ПРОЕКТЕ LAIKGEMS
            </h1>
            <p className="text-xl text-gray-400">
              Революционная игровая платформа для заработка
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <div className="flex items-center mb-4">
                <Icon name="Target" className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-orbitron font-bold text-cyan-400">
                  Наша цель
                </h3>
              </div>
              <p className="text-gray-300">
                Создать честную и прозрачную игровую экосистему, где каждый
                может зарабатывать реальные деньги, играя в увлекательные
                мини-игры.
              </p>
            </Card>

            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <div className="flex items-center mb-4">
                <Icon
                  name="Shield"
                  className="text-purple-400 mr-3"
                  size={24}
                />
                <h3 className="text-xl font-orbitron font-bold text-purple-400">
                  Безопасность
                </h3>
              </div>
              <p className="text-gray-300">
                Все транзакции защищены современными методами шифрования. Ваши
                средства в полной безопасности.
              </p>
            </Card>
          </div>

          <Card className="bg-black/40 border-cyan-500/20 p-8 text-center">
            <h3 className="text-2xl font-orbitron font-bold text-cyan-400 mb-6">
              Как это работает?
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto glow-effect">
                  <Icon name="Play" className="text-black" size={24} />
                </div>
                <h4 className="font-bold text-cyan-400">1. Играйте</h4>
                <p className="text-gray-400 text-sm">
                  Участвуйте в мини-играх и кликерах
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto glow-effect">
                  <Icon name="Gem" className="text-black" size={24} />
                </div>
                <h4 className="font-bold text-purple-400">2. Зарабатывайте</h4>
                <p className="text-gray-400 text-sm">
                  Получайте GEMS за активность
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto glow-effect">
                  <Icon name="Wallet" className="text-black" size={24} />
                </div>
                <h4 className="font-bold text-green-400">3. Выводите</h4>
                <p className="text-gray-400 text-sm">
                  Обменивайте GEMS на реальные деньги
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
