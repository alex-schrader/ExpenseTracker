import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList"
import ExpensesChart from '../Expenses/ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All')

  const selectYearHandler = (year) => {
    setFilteredYear(year)
    
  };

  let filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear || filteredYear === 'All'})

  //const [values, setValues] = useState(props.items)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYearHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
