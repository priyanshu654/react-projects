import Items from "./items";
import { useState } from "react";

export default function PackingLists({ formData, handleDelete, handleToggle,toHandleClear}) {

    const[filter,setFilter]=useState("input");
    let filteredData;

    if(filter=="input") filteredData=formData;

    if(filter=="description"){
        filteredData=formData.slice().sort((a,b)=>a.description.localeCompare(b.description));
    }

    if(filter=="packed"){
        filteredData=formData.slice()
        .sort((a,b)=>Number(a.packed)-Number(b.packed));
    }

  return (
    <div className="list">
      <ul>
        {filteredData.map((el) => (
          <Items
            key={el.id}
            item={el}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </ul>
      <div className="action">
        <select value={filter} onChange={(e)=>{setFilter(e.target.value)}}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={()=>{toHandleClear()}}>Clear list</button>
      </div>
    </div>
  );
}
