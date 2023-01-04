import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";

const ExpenseList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filterExpenses.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseList;
