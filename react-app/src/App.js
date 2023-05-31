import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";

function App() {
  const dummyExpenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      console.log(expense);

      return [expense, ...prevState];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />

      <Expenses props={expenses} />
    </div>
  );
}

export default App;
