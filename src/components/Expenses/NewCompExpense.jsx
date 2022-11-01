import React from 'react'
import Card from '../UI/Card'
// import Expense from './Expense'
import "./Newcomp.css"
import ExpenseFilter from './ExpenseFilter'
import { useState } from 'react'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'
function NewCompExpense(props) {
    const [expenseFilter, setExpenseFilter] = useState('All')
    const filterExp = (getFilter) => {
        setExpenseFilter(getFilter);
      //  console.log(getFilter);
    }
    const filte = props.items.filter((elemExp)=> {
        return(
            elemExp.date.getFullYear().toString() === expenseFilter
            )
        })
     //console.log(filte);

    return (
        <>
            <Card className="expenses">
                <ExpenseFilter selected={expenseFilter} onSetFilter={filterExp} />
                <ExpensesChart expensess={filte}/>
                <ExpenseList all={expenseFilter} itemsfilter = {filte} allItems = {props.items}/>
            </Card>
        </>
    )
}

export default NewCompExpense