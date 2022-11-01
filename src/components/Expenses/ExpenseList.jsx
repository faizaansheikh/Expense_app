import React from 'react'
import Expense from './Expense'
import './exp.css'
function ExpenseList(props) {
    // if(props.items.length === 0){
    //     return <h2 className='expenses-list__fallback'>No expense found</h2>
    // }
    return (
        <ul className='expenses-list'>
            {
                    props.all === "All" ? (
                        props.allItems.map((elem) => {
                            return <Expense
                                key = {elem.id}
                                title={elem.title}
                                amount={elem.amount}
                                date={elem.date}
                            />
                        })
                    ):
                    props.itemsfilter.length === 0 ?(
                        <p className='expenses-list__fallback'>No expense found</p>
                    ) : (
                        
                        props.itemsfilter.map((elem) => {
                            return <Expense
                                key = {elem.id}
                                title={elem.title}
                                amount={elem.amount}
                                date={elem.date}
                            />
                        })
                    
                    )
                }
            

        </ul>
    )
}

export default ExpenseList;