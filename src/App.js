
import { useState } from "react";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import NewCompExpense from "./components/Expenses/NewCompExpense";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const DUMMY_DATA = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'new item',
      amount: 450,
      date: new Date(2020, 5, 12),
    },
    {
      id: 'e5',
      title: 'New Desk (Wooden)',
      amount: 40,
      date: new Date(2020, 5, 10),
    },
    
    
  ];
  const [expenses,setExpenses] = useState(DUMMY_DATA)
  const storeNewData = (exp)=>{
    setExpenses((prevData) => {
      return [ exp, ...prevData]
      
    })

    }
 
  
  
  return (
    <>
    <NewExpense  onStoreNewData = {storeNewData}/>
    <NewCompExpense items = {expenses}/>
  
   
    </>
  );
}

export default App;
