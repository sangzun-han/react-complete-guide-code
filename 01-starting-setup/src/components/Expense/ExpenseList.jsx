import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

const ExpenseList = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </Card>
  );
};

export default ExpenseList;
