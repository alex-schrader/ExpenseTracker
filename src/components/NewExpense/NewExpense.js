import React, {useState} from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //goal: return a form for user to submit
  const [isEditing, setIsEditing] = useState(false);
  
  const cancelHandler = () => {
    console.log("cancelled");
    setIsEditing(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelHandler()
    console.log("saveexpensedatahandler triggered")
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const clearHandler = () => {
    console.log("in clearHandler");
    props.onClear()
  };

  return (
    <div className="new-expense">
      {!isEditing && 
      <div>
        <button onClick={startEditingHandler}>Add New Expense</button>
        <button onClick={clearHandler}>Clear Expenses</button>
      </div>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={cancelHandler}/>}
    </div>
  );
};

export default NewExpense;
