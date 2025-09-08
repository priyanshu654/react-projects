import { useEffect, useState } from "react"

export default function Form(){
    const[value,setValue]=useState();
    const[age,setAge]=useState();

    
    return(
        <>
            <label htmlFor="input-name">
            Name:
            <input type="text" value={value} id="input-name" onChange={(e)=>setValue(e.target.value)} />
            </label>
            
            <br></br>
            <label htmlFor="age">
                Age:
                <input type="number" name="age" id="" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </label>
            
            <br></br>

            <button onClick={(e)=>{alert(`hello ${value} your age is ${age}`)}}>Submit</button>
        </>
        
    )
}