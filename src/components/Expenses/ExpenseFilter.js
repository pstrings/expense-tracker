import {useState} from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const [selectedDate, setSelectedDate] = useState("2022")

    const setSelectedHandler = event => {
        setSelectedDate(event.target.value)

        console.log(selectedDate)
    }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedDate} onChange={setSelectedHandler}>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;