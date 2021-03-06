import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

  return (
    <div className="new-expense">
        {/* Passing custom prop to Expense Form to get data from Expense Form */}
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense