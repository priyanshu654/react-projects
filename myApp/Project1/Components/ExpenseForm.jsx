import { useState } from "react";

export function ExpenseForm({setExpensesData}) {

//these are three seperate state to update UI or setExpenseData....
//const [title,setTitle]=useState('');
//const [category,setCategory]=useState('');
//const[amount, setAmount]=useState('');

const[getFormData,setGetFormData]=useState({title:'',category:'',amount:''});

const handelSubmit=(e)=>{
    e.preventDefault();
    //it was done by using function...
    // const newData={...getformdata(e.target),id:crypto.randomUUID()};
    // setExpensesData((prevState)=>[...prevState,newData]);
    // e.target.reset()

    //another way of adding, by this we dont need to convert them into object they got automatically got convert into object...
    //const expense={title,category,amount,id:crypto.randomUUID()};
    //console.log(expense);
    //hereexpense will be object including id..
    //setExpensesData((prevState)=>[...prevState,expense])


    //more optimise way
  console.log(getFormData);
  //getFormdata is an object with containing title amount  and category...
  const finalData={...getFormData,id:crypto.randomUUID()};
  setExpensesData((prevState)=>[...prevState,finalData])
  setGetFormData({title:'',category:'',amount:''});
}

// const getformdata=(form)=>{
//     const formdata=new FormData(form);
//     //initially this formdata seems to be emepty but we can find value by looping it...
//     const data={};
//     for(const [key,value] of formdata.entries()){
//         //formdata.values() it gives only values not keys....but formdata.entities() gives key and value...
//         data[key]=value;
//     }
//     return data;
// }

  return (
    
      <form className="expense-form" onSubmit={handelSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" name="title" value={getFormData.title} onChange={(e)=>setGetFormData((prevState)=>({...prevState,title:e.target.value}))}/>
          {/* {by applying value=title which is emepty string initially,it will not allow us to write anything in title section, thus we have to apply eventListener onChange.... } */}
          {/* {onchange function for individual state   onChange={(e)=>setTitle(e.target.value)}} */}
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" name="category"  value={getFormData.category} onChange={(e)=>setGetFormData((prevState)=>({...prevState,category:e.target.value}))}>
            {/* {same as title we cannot select now as we have set value as emepty string thus now apply eventListener...} */}
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input id="amount" name="amount"  value={getFormData.amount} onChange={(e)=>setGetFormData((prevState)=>({...prevState,amount:e.target.value}))}/>
        </div>
        <button className="add-btn">Add</button>
      </form>
   
  );
}






// export function ExpenseForm({setExpensesData}) {


//     const handelSubmit=(e)=>{
//         e.preventDefault();
//         const newData={...getformdata(e.target),id:crypto.randomUUID()};
        
//         setExpensesData((prevState)=>[...prevState,newData]);
//         e.target.reset()
      
    
//     }
    
//     const getformdata=(form)=>{
//         const formdata=new FormData(form);
//         //initially this formdata seems to be emepty but we can find value by looping it...
//         const data={};
//         for(const [key,value] of formdata.entries()){
//             //formdata.values() it gives only values not keys....but formdata.entities() gives key and value...
//             data[key]=value;
//         }
//         return data;
//     }
    
//       return (
        
//           <form className="expense-form" onSubmit={handelSubmit}>
//             <div className="input-container">
//               <label htmlFor="title">Title</label>
//               <input id="title" name="title"/>
//               {/* {by applying value=title which is emepty string initially,it will not allow us to write anything in title section, thus we have to apply eventListener onChange.... } */}
//             </div>
//             <div className="input-container">
//               <label htmlFor="category">Category</label>
//               <select id="category" name="category">
//                 {/* {same as title we cannot select now as we have set value as emepty string thus now apply eventListener...} */}
//                 <option value="" hidden>
//                   Select Category
//                 </option>
//                 <option value="Grocery">Grocery</option>
//                 <option value="Clothes">Clothes</option>
//                 <option value="Bills">Bills</option>
//                 <option value="Education">Education</option>
//                 <option value="Medicine">Medicine</option>
//               </select>
//             </div>
//             <div className="input-container">
//               <label htmlFor="amount">Amount</label>
//               <input id="amount" name="amount"/>
//             </div>
//             <button className="add-btn">Add</button>
//           </form>
       
//       );
//     }
    