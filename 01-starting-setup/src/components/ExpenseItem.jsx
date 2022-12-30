import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate expense={expense} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
