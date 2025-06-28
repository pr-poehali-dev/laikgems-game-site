import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Game = () => {
  const [gems, setGems] = useState(0);
  const [clickPower, setClickPower] = useState(1);

  // Загрузка сохранённых данных при монтировании
  useEffect(() => {
    const savedGems = localStorage.getItem("gameGems");
    const savedClickPower = localStorage.getItem("gameClickPower");

    if (savedGems) setGems(parseInt(savedGems));
    if (savedClickPower) setClickPower(parseInt(savedClickPower));
  }, []);

  // Сохранение после каждого изменения
  useEffect(() => {
    localStorage.setItem("gameGems", gems.toString());
  }, [gems]);

  useEffect(() => {
    localStorage.setItem("gameClickPower", clickPower.toString());
  }, [clickPower]);

  const handleClick = () => {
    setGems((prev) => prev + clickPower);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ИГРА
            </h1>
            <p className="text-gray-400">Кликай и зарабатывай гемы!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Игровая зона */}
            <Card className="bg-black/40 border-cyan-500/20 p-8 text-center">
              <div className="mb-6">
                <div className="text-3xl font-orbitron font-bold text-cyan-400 mb-2">
                  {gems.toLocaleString()} GEMS
                </div>
                <div className="text-gray-400">Сила клика: +{clickPower}</div>
              </div>

              <Button
                onClick={handleClick}
                size="lg"
                className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 hover:from-cyan-300 hover:to-purple-500 text-black font-bold text-xl glow-effect glow-hover"
              >
                <Icon name="Gem" size={48} />
              </Button>
            </Card>

            {/* Улучшения */}
            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-4">
                Улучшения
              </h3>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-between border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  onClick={() => {
                    if (gems >= 10) {
                      setGems((prev) => prev - 10);
                      setClickPower((prev) => prev + 1);
                    }
                  }}
                  disabled={gems < 10}
                >
                  <span>Улучшить клик</span>
                  <span>10 GEMS</span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Game;
