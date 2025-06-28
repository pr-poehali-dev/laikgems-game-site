import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");
  const [availableGems, setAvailableGems] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ amount?: string; method?: string }>(
    {},
  );

  // Загрузка доступных гемов из localStorage
  useEffect(() => {
    const savedGems = localStorage.getItem("gameGems");
    if (savedGems) {
      setAvailableGems(parseInt(savedGems));
    }
  }, []);

  const validateForm = () => {
    const newErrors: { amount?: string; method?: string } = {};

    if (!amount || isNaN(Number(amount))) {
      newErrors.amount = "Введите корректную сумму";
    } else if (Number(amount) <= 0) {
      newErrors.amount = "Сумма должна быть больше 0";
    } else if (Number(amount) > availableGems) {
      newErrors.amount = "Недостаточно средств";
    } else if (Number(amount) < 100) {
      newErrors.amount = "Минимальная сумма вывода: 100 GEMS";
    }

    if (!method) {
      newErrors.method = "Выберите способ вывода";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Имитация отправки заявки
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Списание средств
      const newBalance = availableGems - Number(amount);
      localStorage.setItem("gameGems", newBalance.toString());
      setAvailableGems(newBalance);

      alert(
        `Заявка на вывод ${amount} GEMS через ${method === "card" ? "карту" : "крипто"} успешно подана!`,
      );

      // Сброс формы
      setAmount("");
      setMethod("");
      setErrors({});
    } catch (error) {
      alert("Ошибка при подаче заявки. Попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ВЫВОД СРЕДСТВ
            </h1>
            <p className="text-gray-400">
              Доступно: {availableGems.toLocaleString()} GEMS
            </p>
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
                {errors.amount && (
                  <p className="text-red-400 text-sm mt-1">{errors.amount}</p>
                )}
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
                {errors.method && (
                  <p className="text-red-400 text-sm mt-1">{errors.method}</p>
                )}
              </div>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 glow-effect"
              >
                {isSubmitting ? "Обработка..." : "Подать заявку на вывод"}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Withdraw;
