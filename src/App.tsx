import React from 'react';

import ExpenseItem from './components/ExpenseItem';

const expenses =[
  {
    id: 1,
    title: 'Guarda-roupa',
    amount: 1000,
    date: '2022/01/02'
  },

  {
    id: 2,
    title: 'Aluguel',
    amount: 1500,
    date: '2022/01/12'
  },

]
function App() {
  return (
    <div>
      <ExpenseItem 
        title={expenses[0].title} 
        amount={expenses[0].amount} 
        date={expenses[0].date} />
    </div>
  );
}

export default App;
