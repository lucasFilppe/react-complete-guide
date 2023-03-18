import React from "react";
import Card from "./components/Card";

import ExpenseItem from "./components/ExpenseItem";
import FrasesMotivacionais from "./components/FrasesMotivacionais";

const expenses = [
  {
    id: 1,
    date: "2022/01/02",
    title: "Guarda-roupa",
    amount: 1000,
   
  },

  {
    id: 2,
    date: "2022/01/02",
    title: "Aluguel",
    amount: 1500,
    
  },
];
console.log(expenses)

function App() {
  return (
    <Card>
      <ExpenseItem
        id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </Card>
  );
}

export default App;
