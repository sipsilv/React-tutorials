import react from "react";
import { ReactDOM } from "react";
import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  let [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    let newTitle = prompt("Enter new title");
    setTitle(newTitle);
    console.log("updated");
  };
  return (
    <>
      <div className="expense-item">
        <ExpenseDate props={props} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price"> {props.amount} </div>
        </div>

        <button onClick={clickHandler}>{"Click this"}</button>
      </div>
    </>
  );
}

export default ExpenseItem;
