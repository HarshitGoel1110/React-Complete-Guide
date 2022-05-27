import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing , setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    // adding id property to the expense Data that we receive from the form.
    console.log(expenseData);
    props.onAddExpense(expenseData);
    editingChangeHandler();
  }

  const editingChangeHandler = () => {
    setIsEditing(!isEditing);
  }

  return(
    <div className="new-expense">
      {!isEditing && <button onClick={editingChangeHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={editingChangeHandler}></ExpenseForm>}
      
    </div>
  );
}

export default NewExpense;