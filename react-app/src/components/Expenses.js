import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import Card from "./Card";
import "./ExpenseItem.css";

export default function Expenses({ props }) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props[0].title}
        amount={props[0].amount}
        date={props[0].date}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={props[1].title}
        amount={props[1].amount}
        date={props[1].date}
      >
        {" "}
      </ExpenseItem>{" "}
      <ExpenseItem
        title={props[2].title}
        amount={props[2].amount}
        date={props[2].date}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={props[3].title}
        amount={props[3].amount}
        date={props[3].date}
      >
        {" "}
      </ExpenseItem>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        {" "}
      </button>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        {" "}
      </button>
    </Card>
  );
}
