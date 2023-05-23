import react from "react";
import { ReactDOM } from "react";
import "./ExpenseItem.css";
import { useState } from "react";

function ExpenseItem(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  let [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    let newTitle = prompt("Enter new title");
    setTitle(newTitle);
    console.log("updated");
  };
  return (
    <>
      <div className="expense-item">
        <div>
          <div> {day}</div>
          <div> {month}</div>
          <div> {year}</div>
        </div>
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
