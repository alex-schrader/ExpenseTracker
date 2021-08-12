import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
import "./App.css";

function App() {
  const dummyData = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummyData);
  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const clearHandler = () => {
    setExpenses([]);
  };

  return (
    <div>
      <div className="TitleSurround">
        <div className="InternalTitleSurround">
          <h2 className="Title-detail">Expense Tracker with React</h2>
          <p className="Description-detail">by Alex Schrader</p>
          <p className="Description-detail">with help from Udemy:</p>
          <p className="Description-detail">
            React - The Complete Guide (incl Hooks, React Router, Redux)
          </p>
        </div>
      </div>

      <NewExpense onAddExpense={addExpenseHandler} onClear={clearHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
