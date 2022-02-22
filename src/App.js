import { useState } from "react";

import NewExpense from './components/Expenses/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'

const EXPENSES_ARRAY = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 2, 9),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 7, 13),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 10, 30),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2022, 5, 30),
  }

]

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES_ARRAY);

  const addExpenseHandler = addedExpense => {
    setExpenses(prevExpenses => {
      return [addedExpense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  )
}

export default App;
