import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const [newAmount, setNewAmount] = useState("");
  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
  };
  const [newDate, setNewDate] = useState("");
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('submithandler triggered')
    const expenseData = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    setNewDate("");
    setNewAmount("");
    setNewTitle("");

    props.onSaveExpenseData(expenseData);
    console.log('submithandler triggered')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={newTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={newAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={newDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
