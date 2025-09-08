import { useState } from "react";
import "./App.css";
import { ExpenseForm } from "../components/ExpenseForm";
import { ExpenseTable } from "../components/ExpenseTable";
import data from "../data";
function App() {
  const [expensesData, setExpensesdata] = useState(data);
  console.log(data);
  const [getFormData, setGetFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [editableId,setEditableId]=useState('');
  return (
    <>
      <main>
        <h1>Track Your Expenses</h1>

        <div className="expense-tracker">
          <ExpenseForm setExpensesData={setExpensesdata} getFormData={getFormData} setGetFormData={setGetFormData} editableId={editableId} setEditableId={setEditableId}/>
          <ExpenseTable expensesData={expensesData} setExpensesData={setExpensesdata} setGetFormData={setGetFormData} setEditableId={setEditableId}/>
        </div>
      </main>
    </>
  );
}

export default App;
