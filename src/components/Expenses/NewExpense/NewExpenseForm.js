import { useState } from 'react';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
  // three States
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [submittedAmount, setSubmittedAmount] = useState('');
  const [submittedDate, setSubmittedDate] = useState('');

  // LISTENING TO USER INPUT
  // using one State instead:
  // const [userInput, setUserInput] = useState({
  //   submittedTitle: '',
  //   submittedAmount: '',
  //   submittedDate: ''
  // })

  // const titleChangeHandler = (event) => { // not really a good way to do
  //   setUserInput({
  //     ...userInput, // other values aren't thrown away
  //     submittedTitle: event.target.value 
  //   }); //store the value that users have submitted
  // };

  // correct and more effective way, should be used whenever your state update depends on the previous state
  const titleChangeHandler = event => {
    setSubmittedTitle(event.target.value);
  }

  const amountChangeHandler = event => {
    setSubmittedAmount(event.target.value);
  }

  const dateChangeHandler = event => {
    setSubmittedDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: submittedTitle,
      amount: +submittedAmount,
      date: new Date(submittedDate)
    };

    props.onSaveExpenseData(expenseData);
    setSubmittedTitle(''); // clear the input field
    setSubmittedAmount(''); // clear the input field
    setSubmittedDate(''); // clear the input field
  }
  

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            value={submittedTitle} 
            onChange={titleChangeHandler}>
          </input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type='number' 
            value={submittedAmount} 
            min='0.01' 
            step='0.01' 
            onChange={amountChangeHandler}>
          </input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' 
          value={submittedDate} 
          min='2019-01-01' 
          max='2022-12-31' 
          onChange={dateChangeHandler}>
          </input>
        </div>
      </div>
      <div className='new-expense__action'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpenseForm;