import React from "react";

import ExpenseItem from "./components/ExpenseItem";
import FrasesMotivacionais from "./components/FrasesMotivacionais";

const expenses = [
  {
    id: 1,
    title: "Guarda-roupa",
    amount: 1000,
    date: "2022/01/02",
  },

  {
    id: 2,
    title: "Aluguel",
    amount: 1500,
    date: "2022/01/12",
  },
];

const frases = [
  {
    id: 1,
    assunto: "Sucesso",
    frase:
      "Sucesso significa realizar seus próprios sonhos, cantar sua própria canção, dançar sua própria dança, criar do seu coração e apreciar a jornada, confiando que não importa o que aconteceça, tudo ficará bem. Criar sua própria aventura!",
    autor: "Elana Lindquist ",
  },

  {
    id: 2,
    assunto: "Sucesso",
    frase:
      "Para conhecermos os amigos é necessário passar pelo sucesso e pela desgraça. No sucesso, verificamos a quantidade e, na desgraça, a qualidade.",
    autor: "Confucio",
  },
];

function App() {
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <FrasesMotivacionais
        id={frases[0].id}
        assunto={frases[0].assunto}
        frase={frases[0].frase}
        autor={frases[0].autor}
      />

      <FrasesMotivacionais
        id={frases[1].id}
        assunto={frases[1].assunto}
        frase={frases[1].frase}
        autor={frases[1].autor}
      />
    </div>
  );
}

export default App;
