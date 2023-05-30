import "./NewExpenseForm.css";
import "./NewExpenses.css";
import { useState } from "react";
export default function NewExpenseForm(props) {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // })
  // const inputChangeHandler =  event => {
  //   setUserInput((prevState) => {
  //    return{
  //     ...prevState,
  //     enteredTitle: event.target.title
  //   }
  //    })
  // }

  const titleChangeHandler = (event) => {
    // handles when a title changes and sets the title to the new title, event is defualt argument that gets passed in the onChange method
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: EnteredTitle,
      amount: EnteredAmount,
      date: new Date(EnteredDate),
    };
    props.onSaveNewExpenses(newExpense);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");

    //console.log(newExpense);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={EnteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.0"
            step="0.1"
            onChange={amountChangeHandler}
            value={EnteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2034-01-01"
            onChange={dateChangeHandler}
            value={EnteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Submit </button>
      </div>
    </form>
  );
}
