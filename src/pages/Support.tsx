import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Support = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ПОДДЕРЖКА
            </h1>
            <p className="text-gray-400">Мы всегда готовы помочь вам</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6">
                Связаться с нами
              </h3>

              <div className="space-y-4">
                <div>
                  <Label className="text-cyan-400 mb-2 block">Email</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ваш email"
                    className="bg-black/60 border-cyan-500/30 text-white"
                  />
                </div>

                <div>
                  <Label className="text-cyan-400 mb-2 block">Сообщение</Label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Опишите вашу проблему..."
                    className="bg-black/60 border-cyan-500/30 text-white min-h-32"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 glow-effect">
                  Отправить сообщение
                </Button>
              </div>
            </Card>

            <Card className="bg-black/40 border-cyan-500/20 p-6">
              <h3 className="text-xl font-orbitron font-bold text-cyan-400 mb-6">
                Контактная информация
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-cyan-400" size={20} />
                  <span className="text-gray-300">support@laikgems.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon
                    name="MessageCircle"
                    className="text-purple-400"
                    size={20}
                  />
                  <span className="text-gray-300">
                    Telegram: @laikgems_support
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-green-400" size={20} />
                  <span className="text-gray-300">
                    Время ответа: до 24 часов
                  </span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <p className="text-cyan-400 font-bold mb-2">
                  💡 Быстрая помощь
                </p>
                <p className="text-gray-300 text-sm">
                  Перед обращением проверьте раздел FAQ - возможно, ответ на ваш
                  вопрос уже есть там!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
