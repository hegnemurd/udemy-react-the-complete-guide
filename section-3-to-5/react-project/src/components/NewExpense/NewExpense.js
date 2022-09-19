import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenses = (props) => {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingNewExpense(false);
  };

  const addNewExpenseHandler = () => {
    setIsAddingNewExpense(true);
  };
  const finishedAddingExpenseHandler = () => {
    setIsAddingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isAddingNewExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isAddingNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={finishedAddingExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
