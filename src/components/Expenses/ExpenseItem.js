import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function ExpenseItem(props) {
  const expensePrice = props.amount;

  //const [title, setTitle] = useState(props.title);
  const title = props.title;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${expensePrice}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
