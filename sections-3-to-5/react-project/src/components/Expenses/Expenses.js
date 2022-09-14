import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2022");

  const chosenOptionHandler = (chosenOption) => {
    setFilter(chosenOption);
    // props.onFilterItems(chosenOption);
    // console.log(filteredOption);
    // console.log(chosenOption);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      {/* Filter: {filter} */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filter}
          onChosenOption={chosenOptionHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
