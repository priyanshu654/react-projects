import { useState } from "react"

export default function SplitBillForm({toSetFriendDetails,setAddFriend}){
    const[bill,setBill]=useState("");
    const[yourExpense,setYourExpense]=useState("");
    const friendExpense=bill? bill-yourExpense:"";
    const[payer,setPayer]=useState("");

    function handleClick(e){
        e.preventDefault();
        const billAmount = Number(bill);
        const yourExpenseAmount = Number(yourExpense);
        const friendExpenseAmount = billAmount - yourExpenseAmount;
        let newBalance;
        console.log(toSetFriendDetails.balance);
        
        if (payer === "user") {
            newBalance = toSetFriendDetails.balance + (billAmount - yourExpenseAmount);    
        } else {
            newBalance = toSetFriendDetails.balance - yourExpenseAmount;
        }

        setAddFriend((prevState) =>
            prevState.map((friend) => 
                friend.id === toSetFriendDetails.id 
                ? { ...friend, balance: newBalance } 
                : friend // Return the unchanged friend
            )
        );
        
        
        setBill("");
        setPayer("");
        setYourExpense("");

    }

    return(
        <form className="form-split-bill" onSubmit={handleClick}>
            <h2>Split a bill with {toSetFriendDetails.name}</h2>
            <label>💰 Bill value</label>
            <input type="text" value={bill} onChange={(e)=>setBill(e.target.value)}/>
            <label>💰Your Expense</label>
            <input type="text" value={yourExpense} onChange={(e)=>setYourExpense(e.target.value)}/>
            <label>💰{toSetFriendDetails.name} expenses</label>
            <input type="text" value={friendExpense} disabled/>
            <label>🤑 Who is paying the bill</label>
            <select value={payer} onChange={(e)=>setPayer(e.target.value)}>
                <option value="user">You</option>
                <option value="selected friend">{toSetFriendDetails.name}</option>
            </select>
            <button className="button" type="submit">Split Bill</button>
        </form>
    )
}