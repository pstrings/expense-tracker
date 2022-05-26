import { useState } from "react";

import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import React from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const selectFilter = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectYear={selectedYear}
          onselectFilter={selectFilter}
        />
        {/* 
          Map is going to iterate over the entire expenses array and return each ExpenseItems.
          () => {} explicit returning, we must use the return keyword to return something
          () =>  () implicit return, everything inside the braces will be returned
        */}
        {props.expenses.map((expense) => (
          <ExpenseItems
            // a unique key is added cuz it makes each list item unique
            // otherwise react will think they are same and update the entire array and move then one step
            // dow to make room at top, which is not efficient

            // this key={expense.id} can be used as it is and mapped object.id will always be unique.
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
