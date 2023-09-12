import React from 'react'
import Card from '../UI/Card'
import "./expense.css"
import ExpenseDate from './ExpenseDate'
function Expense(props) {
  // const [title,setTitle] = useState(props.title)
  // const edit = ()=>{
  //   setTitle("Updated!")
  // }

  return (
    <>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>$ {props.amount}</div>
          
        </div>
      </Card>
    </>
  )
}

export default Expense;