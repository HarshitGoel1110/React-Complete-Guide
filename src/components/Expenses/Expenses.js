import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === +filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList item={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
