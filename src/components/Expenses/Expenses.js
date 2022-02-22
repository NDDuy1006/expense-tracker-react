import { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpenseList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilterYear] = useState('2020');

  const filterChangeHandle = selectedYear => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
      <li>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandle}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
      </li>
  )
}

export default Expenses;