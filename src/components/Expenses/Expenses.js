import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectYear={selectedYear}
          onselectFilter={selectFilter}
        />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
