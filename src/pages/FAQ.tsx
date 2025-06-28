import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqItems = [
    {
      id: "1",
      question: "Как начать зарабатывать GEMS?",
      answer:
        "Просто нажмите 'Начать играть' на главной странице и начните кликать по гему. За каждый клик вы получите GEMS.",
    },
    {
      id: "2",
      question: "Как вывести заработанные средства?",
      answer:
        "Перейдите в раздел 'Вывод', выберите способ вывода и укажите сумму. Минимальная сумма для вывода - 100 GEMS.",
    },
    {
      id: "3",
      question: "Сколько времени занимает вывод средств?",
      answer:
        "Обработка заявок на вывод занимает от 1 до 3 рабочих дней в зависимости от выбранного способа.",
    },
    {
      id: "4",
      question: "Можно ли играть с мобильного устройства?",
      answer:
        "Да! Наша платформа полностью адаптирована для мобильных устройств.",
    },
    {
      id: "5",
      question: "Есть ли ограничения на заработок?",
      answer:
        "Ограничений на общий заработок нет. Единственное ограничение - суточный лимит на вывод составляет 10,000 GEMS.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <Header />

      <main className="pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-orbitron font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-4">
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </h1>
            <p className="text-gray-400">Ответы на популярные вопросы</p>
          </div>

          <Card className="bg-black/40 border-cyan-500/20 p-6">
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Collapsible key={item.id}>
                  <CollapsibleTrigger
                    onClick={() => toggleItem(item.id)}
                    className="w-full"
                  >
                    <div className="flex items-center justify-between p-4 rounded-lg bg-black/30 border border-cyan-500/10 hover:border-cyan-500/30 transition-colors cursor-pointer">
                      <h3 className="text-left font-bold text-cyan-400">
                        {item.question}
                      </h3>
                      <Icon
                        name={
                          openItems.includes(item.id)
                            ? "ChevronUp"
                            : "ChevronDown"
                        }
                        className="text-cyan-400"
                        size={20}
                      />
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <div className="p-4 text-gray-300 bg-black/20 rounded-lg mt-2">
                      {item.answer}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
