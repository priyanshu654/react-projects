import { useState } from "react";
    
    export default function Form({setData}){
    function handelForm(e){
        e.preventDefault();
        if(!description) return;
        const newData={description:description,quantity:quantity,packed:false, id:Date.now()}
        setData(prevState=>[...prevState,newData])
        setDescription("");
        setQuantity(1);

    }
    const[description,setDescription]=useState("");
    const[quantity,setQuantity]=useState(1);
    
    return(
        <>
            <form className="add-form" onSubmit={handelForm} >
                <select name="quantity" id="" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                {Array.from({length:20},(_,i)=>i+1).map((el)=>{
                    return (
                        
                        <option value={el} key={el}>{el}</option>
                        
                    )
                })}
                </select>
                <input type="text" placeholder="items..." name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                <button>Add</button>
            </form>
        </>
    )
}