import React, { useState } from 'react'
import "./expFilter.css"
function ExpenseFilter(props) {
    // const[val , setVal] = useState('')
    const selHandle = (e)=>{
        props.onSetFilter(e.target.value)
    }
   
    return (
        <>
        <div className="main">
            <h3 className='fil'>Filter by year</h3>
            <select value={props.selected} onChange={selHandle} className='sel'>
                <option value="All">All</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
        </>
    )
}

export default ExpenseFilter;