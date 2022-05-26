import './ExpenseItems.css'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
// Importing useState, which is a react hook, from react component
import { useState } from 'react'

const ExpenseItems = (props) => {

  // This useState takes a value as an argument and returns an Array 
  // (first value being the value and the second being the function to change the value)
  // Here we are using destructuring to store those two values in separate variables

  // We are using const here because we are not using assignment operator
  // We are using a function to change value and it's being managed somewhere else in some other variable
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle(title)
    console.log(title)
  }
  
  
  // let title = props.title

  // const clickHandler = () => {
  //   // This won't update the title, because React goes through all the components one by one 
  //   // But it only goes through them once at the time they are loaded
  //   // So later on when the button is clicked it doesn't re-evaluate the changes
  //   // To overcome this, we use state.
  //   title = "Updated!"
  //   // Instead we can use, React Hooks. In this case "useState()"
  //   console.log("Clicked!!!")
  // }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>

      {/* 
          Here we don't call function with (), we just point to it.
          Because if we call it, then it'll be called at the time the JSX is returned b4 button is clicked
      */}
      <button onClick={clickHandler}>Click</button>
    </Card>
  )
}

export default ExpenseItems




/* 
  ====================================================================================================
  ======================================================================================================

  // React hook makes the component to be read again for the value it's set for.
  
  // REACT HOOKS MUST ALWAYS GET CALLED INSIDE THE MAIN COMPONENT FUNCTION 
  // AND NOT OUTSIDE OR INSIDE A NESTED FUNCTION.
  
  // THE STATE IS PER INSTANCE OF THE COMPONENT
  // IF THE COMPONENT IS CALLED AGAIN & AGAIN THEN EACH INSTANCE WILL HAVE ITS OWN STATE

  // So basically if we make some changes to one instance then only the state for that instance will change 
  // and not the state of any other instance of the component

  
  // const [title, setTitle] = useState(props.title)
  // This props.title is the inital value
  // This is only called once when the component is being executed for the first time

*/