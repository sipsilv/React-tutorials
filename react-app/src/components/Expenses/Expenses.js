import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseDate.css";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

export default function Expenses({ props }) {
  const [filteredContent, setFilteredContent] = useState("2020");
  const ChangeFilterHandler = (filt) => {
    setFilteredContent(filt);
    console.log(filteredContent);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredContent}
        onChangeFilter={ChangeFilterHandler}
      />

      {props.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
      {/* <ExpenseItem
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
      </ExpenseItem> */}
    </Card>
  );
}
