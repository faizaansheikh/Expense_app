import React from 'react'
import { useState } from 'react'
import "./NewExForm.css"
function NewExForm(props) {
  const [show, setShow] = useState(false)
  const [input, setInput] = useState({
    title: '',
    amount: '',
    date: ''
  })
  const titleHandler = (e) => {
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )

  }
  const submitHandler = (e) => {

    e.preventDefault();
    const expenseData = {
      title: input.title,
      amount: +input.amount,
      date: new Date(input.date)
    }
    setInput({
      title: '',
      amount: '',
      date: ''
    })
    setShow(true)
    props.onSaveExpense(expenseData)
  }

  return (
    <>
      {
        show ? (<div className='new-expense__actions_new'>
          <button onClick={()=>setShow(false)}>Add New Expense</button>
        </div>) : (
          <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
              <div className='new-expense__control'>
                <label>Title</label>
                <input
                  name='title'
                  type="text"
                  value={input.title}
                  onChange={titleHandler}
                />
              </div>
              <div className='new-expense__control'>
                <label>Amount</label>
                <input
                  name='amount'
                  type="number" min="0.01" step="0.01"
                  value={input.amount}
                  onChange={titleHandler} />
              </div>
              <div className='new-expense__control'>
                <label>Date</label>
                <input
                  name='date'
                  type="date" min="2019-01-01" max="2022-12-31"
                  value={input.date}
                  onChange={titleHandler} />
              </div>
            </div>
            <div className='new-expense__actions'>
              <button onClick={()=>setShow(true)}>Cancel</button>
              <button type='submit'>Add Expense</button>
            </div>

          </form>
        )
      }


    </>
  )
}

export default NewExForm