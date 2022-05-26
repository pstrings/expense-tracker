import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("")
  // const [enteredAmount, setEnteredAmount] = useState("")
  // const [enteredDate, setEnteredDate] = useState("")

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // Event handlers have a default event object which can be used to get info on the event.
  // Here we are getting the value inside the target inside the event object
  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  // this function from useState will already get previous state, which we'll pass as a parameter
  // this is what we do because useState doesn't make changes right away but schedules state change
  // this way we'll always get the latest snapshot of the state
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // Function form of change state function
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    // This will stop the form to submit data to some server and stop it from reloading the page
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    // Here onSaveExpenseData is the pointer to the saveExpenseDataHandler function
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* 
            On change event listener listen for each key stroke but also every type of input
            whether text or date or whatever
          */}
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
