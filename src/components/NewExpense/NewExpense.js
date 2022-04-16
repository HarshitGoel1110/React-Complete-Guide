import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    // adding id property to the expense Data that we receive from the form.
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return(
    <div className="new-expense">
      {/* We can also pass functions of the parent component to the child component. */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;