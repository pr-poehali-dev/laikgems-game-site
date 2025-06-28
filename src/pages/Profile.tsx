import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ПРОФИЛЬ
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-4">
                Статистика
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Всего заработано:</span>
                  <span className="text-cyan-400 font-bold">2,500 GEMS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Уровень:</span>
                  <span className="text-cyan-400 font-bold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Дней в игре:</span>
                  <span className="text-cyan-400 font-bold">12</span>
                </div>
              </div>
            </Card>

            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-4">
                Достижения
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Trophy" className="text-yellow-400" size={20} />
                  <span className="text-gray-300">Первые 100 GEMS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Star" className="text-purple-400" size={20} />
                  <span className="text-gray-300">Недельная серия</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
