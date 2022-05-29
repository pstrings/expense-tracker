import { useState } from "react";

import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import React from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  // We take the array and filter it
  // getFullYear can be used to take year from the date object
  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  const selectFilter = (year) => {
    setSelectedYear(year);
  };

  let expensesContent = <p>No expenses found</p>;

  if (filterExpenses.length > 0) {
    expensesContent = filterExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectYear={selectedYear}
          onselectFilter={selectFilter}
        />

        {/* This is one way to add conditional using the ternary operator  {condition ? true : false} */}
        {/* 
        {filterExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* 
          This is another cheat we can use in react. 

          (If whatever is on this side is TRUE && then this is executed)
        
        */}

        {/* {filterExpenses.length === 0 && <p>No expenses found</p>}
        {filterExpenses.length > 0 &&
          filterExpenses.map((expense) => (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* 
          Map is going to iterate over the entire expenses array and return each ExpenseItems.
          () => {} explicit returning, we must use the return keyword to return something
          () =>  () implicit return, everything inside the braces will be returned
        */}
        {/* {filterExpenses.map((expense) => (
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
        ))} */}


        {expensesContent}

      </Card>
    </div>
  );
};

export default Expenses;
