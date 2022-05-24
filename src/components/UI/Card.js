import "./Card.css"

// We are passing props as argument because we can't just have custom component as wrapper elements
// Custom components are different from normal HTML tags, so we use the default property called children
// This children property tells react to treat whatever written inside the custom component as child tags
// Card is getting another property passed as className which we gonna add to the card class
const Card = (props) => {
    // props.className is used because we need to specify that className in the custom component
    // this props.className is the property we got in the props and we are applying both classes to Card
    // for ExpenseItems, props.className = "expense-items"
    // for Expenses, props.className = "expenses"
    const classes = "card " + props.className
    
    return <div className={classes}>{props.children}</div>
}

export default Card