// render a form where users can enter their expense data

import { useState } from 'react';

import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (submittedExpenseData) => {
    const ExpenseData = {
      ...submittedExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(ExpenseData);
    setIsEditing(false);
  };
  
  const startEditingHandler = () => {
    setIsEditing(true)
  };

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  let newExpenseContent = <button>Add New Expense</button>

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button
          onClick={startEditingHandler}>Add New Expense
        </button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}>
        </NewExpenseForm>
      )}
    </div>
  )
}

export default NewExpense;