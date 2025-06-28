import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Profile = () => {
  const [gems, setGems] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [daysPlayed, setDaysPlayed] = useState(0);
  const [level, setLevel] = useState(1);
  const [userInfo, setUserInfo] = useState({
    name: "Космический Игрок",
    email: "player@space.game",
    avatar: "",
  });
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Загрузка данных из localStorage
    const savedGems = localStorage.getItem("gameGems");
    const savedTotalEarned = localStorage.getItem("totalEarned") || "0";
    const savedDaysPlayed = localStorage.getItem("daysPlayed") || "1";
    const savedLevel = localStorage.getItem("playerLevel") || "1";
    const savedUserInfo = localStorage.getItem("userInfo");
    const savedNotifications = localStorage.getItem("notifications");
    const savedSound = localStorage.getItem("soundEnabled");

    if (savedGems) setGems(parseInt(savedGems));
    setTotalEarned(parseInt(savedTotalEarned));
    setDaysPlayed(parseInt(savedDaysPlayed));
    setLevel(parseInt(savedLevel));

    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
    }

    if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
    if (savedSound) setSoundEnabled(JSON.parse(savedSound));
  }, []);

  const handleSaveSettings = () => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("notifications", JSON.stringify(notifications));
    localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled));
    alert("Настройки сохранены!");
  };

  const transactions = [
    { date: "2024-01-15", type: "Заработок", amount: "+500 GEMS" },
    { date: "2024-01-10", type: "Вывод", amount: "-200 GEMS" },
    { date: "2024-01-05", type: "Заработок", amount: "+300 GEMS" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ПРОФИЛЬ
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Информация об аккаунте */}
            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6">
                Аккаунт
              </h3>

              <div className="text-center mb-6">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={userInfo.avatar} />
                  <AvatarFallback className="bg-cyan-500/20 text-cyan-400 text-xl">
                    {userInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-bold text-white">
                  {userInfo.name}
                </h4>
                <p className="text-gray-400">{userInfo.email}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-cyan-400">Имя пользователя</Label>
                  <Input
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    className="bg-black/60 border-cyan-500/30 text-white mt-1"
                  />
                </div>
                <div>
                  <Label className="text-cyan-400">Email</Label>
                  <Input
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    className="bg-black/60 border-cyan-500/30 text-white mt-1"
                  />
                </div>
              </div>
            </Card>

            {/* Статистика */}
            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6">
                Статистика
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Текущий баланс:</span>
                  <span className="text-cyan-400 font-bold">
                    {gems.toLocaleString()} GEMS
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Всего заработано:</span>
                  <span className="text-cyan-400 font-bold">
                    {totalEarned.toLocaleString()} GEMS
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Уровень:</span>
                  <span className="text-cyan-400 font-bold">{level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Дней в игре:</span>
                  <span className="text-cyan-400 font-bold">{daysPlayed}</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-bold text-cyan-400 mb-4">
                  Достижения
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Trophy" className="text-yellow-400" size={20} />
                    <span className="text-gray-300">Первые 100 GEMS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" className="text-purple-400" size={20} />
                    <span className="text-gray-300">Недельная серия</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Zap" className="text-cyan-400" size={20} />
                    <span className="text-gray-300">Быстрый клик</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Настройки и история */}
            <div className="space-y-8">
              {/* Настройки */}
              <Card className="bg-black/40 border-cyan-500/20 p-6">
                <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6">
                  Настройки
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Уведомления</Label>
                      <p className="text-gray-400 text-sm">
                        Получать игровые уведомления
                      </p>
                    </div>
                    <Switch
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-white">Звуки</Label>
                      <p className="text-gray-400 text-sm">
                        Звуковые эффекты в игре
                      </p>
                    </div>
                    <Switch
                      checked={soundEnabled}
                      onCheckedChange={setSoundEnabled}
                    />
                  </div>

                  <Button
                    onClick={handleSaveSettings}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                  >
                    Сохранить настройки
                  </Button>
                </div>
              </Card>

              {/* История транзакций */}
              <Card className="bg-black/40 border-cyan-500/20 p-6">
                <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6">
                  История транзакций
                </h3>

                <div className="space-y-3">
                  {transactions.map((transaction, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-700/50"
                    >
                      <div>
                        <p className="text-white text-sm">{transaction.type}</p>
                        <p className="text-gray-400 text-xs">
                          {transaction.date}
                        </p>
                      </div>
                      <span
                        className={`font-bold ${transaction.amount.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                      >
                        {transaction.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
