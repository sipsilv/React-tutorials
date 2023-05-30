import NewExpenseForm from "./NewExpenseForm.js";
import "./NewExpenses.css";

export default function NewExpenses(props) {
  const onSaveNewExpensesHandler = (enteredExpenseData) => {
    const enteredData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(enteredData);
    props.onAddExpense(enteredData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveNewExpenses={onSaveNewExpensesHandler} />
    </div>
  );
}
