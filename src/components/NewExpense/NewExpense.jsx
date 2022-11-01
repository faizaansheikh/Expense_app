import React from 'react'
import './NewExpense.css'
import NewExForm from './NewExForm'
function NewExpense(props) {

  const saveExpense = (formExp)=>{
    const expenseData = {
      ...formExp,
      id:Math.random.toString()
    }
   props.onStoreNewData(expenseData)
  }
  return (
    <div className='new-expense'>
      <NewExForm  onSaveExpense={saveExpense}/>
    </div>
  )
}

export default NewExpense