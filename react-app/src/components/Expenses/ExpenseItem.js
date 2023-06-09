import react from "react";
import { ReactDOM } from "react";
import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <>
      <div className="expense-item">
        <ExpenseDate props={props} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"> {props.amount} </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
