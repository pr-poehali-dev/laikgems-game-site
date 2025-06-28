import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ВЫВОД СРЕДСТВ
            </h1>
            <p className="text-gray-400">Доступно: 1,250 GEMS</p>
          </div>

          <Card className="bg-black/40 border-cyan-500/20 p-8">
            <div className="space-y-6">
              <div>
                <Label className="text-cyan-400 mb-2 block">Сумма вывода</Label>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Введите количество GEMS"
                  className="bg-black/60 border-cyan-500/30 text-white"
                />
              </div>

              <div>
                <Label className="text-cyan-400 mb-4 block">
                  Способ вывода
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={method === "card" ? "default" : "outline"}
                    onClick={() => setMethod("card")}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Icon name="CreditCard" className="mr-2" size={16} />
                    Карта
                  </Button>
                  <Button
                    variant={method === "crypto" ? "default" : "outline"}
                    onClick={() => setMethod("crypto")}
                    className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Icon name="Bitcoin" className="mr-2" size={16} />
                    Крипто
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 glow-effect">
                Подать заявку на вывод
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Withdraw;
