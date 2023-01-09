import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import Expenses from "./Expenses";
import "./Expense.css";
import ExpenseChart from "./ExpenseChart";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expensesContent = <p>No expense found.</p>;
  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItem expense={expense} key={expense.id} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filterExpenses} />
        <Expenses items={filterExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseList;
