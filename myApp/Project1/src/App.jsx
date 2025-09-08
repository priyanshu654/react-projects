import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "../Components/ExpenseForm";
import { ExpenseTable } from "../Components/ExpenseTable";
import data from "../data";
function App() {
  const [expensesData, setExpensesdata] = useState(data);
  console.log(data);
  return (
    <>
      <main>
        <h1>Track Your Expenses</h1>

        <div className="expense-tracker">
          <ExpenseForm setExpensesData={setExpensesdata}/>
          <ExpenseTable expensesData={expensesData}/>
        </div>
      </main>
    </>
  );
}

export default App;
