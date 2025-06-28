import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Leaderboard = () => {
  const topPlayers = [
    { name: "Player1", gems: 15420, rank: 1 },
    { name: "Player2", gems: 12350, rank: 2 },
    { name: "Player3", gems: 10890, rank: 3 },
    { name: "Player4", gems: 9540, rank: 4 },
    { name: "Player5", gems: 8720, rank: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              РЕЙТИНГ ИГРОКОВ
            </h1>
            <p className="text-gray-400">Топ игроков по заработанным GEMS</p>
          </div>

          <Card className="bg-black/40 border-cyan-500/20 p-6">
            <div className="space-y-4">
              {topPlayers.map((player) => (
                <div
                  key={player.rank}
                  className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-cyan-500/10"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold
                      ${player.rank === 1 ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-black" : ""}
                      ${player.rank === 2 ? "bg-gradient-to-br from-gray-300 to-gray-500 text-black" : ""}
                      ${player.rank === 3 ? "bg-gradient-to-br from-amber-600 to-amber-800 text-white" : ""}
                      ${player.rank > 3 ? "bg-gradient-to-br from-cyan-400 to-purple-600 text-black" : ""}
                    `}
                    >
                      {player.rank === 1 && <Icon name="Crown" size={20} />}
                      {player.rank === 2 && <Icon name="Medal" size={20} />}
                      {player.rank === 3 && <Icon name="Award" size={20} />}
                      {player.rank > 3 && player.rank}
                    </div>

                    <div>
                      <div className="font-bold text-white">{player.name}</div>
                      <div className="text-sm text-gray-400">
                        Ранг #{player.rank}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-orbitron font-bold text-cyan-400">
                      {player.gems.toLocaleString()} GEMS
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
