import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
  return (
    <div>
      {props.filteredExpenses.length === 0 && (
        <h2 className="expenses-list__fallback">No Expenses Found</h2>
      )}
      {props.filteredExpenses.length > 0 &&
        props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
};

export default ExpensesList;
