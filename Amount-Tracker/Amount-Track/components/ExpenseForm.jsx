import { useRef, useState } from "react";
import Select from "./Select";
import TextArea from "./TextArea";



export function ExpenseForm({ setExpensesData ,getFormData, setGetFormData,editableId ,setEditableId}) {
  //these are three seperate state to update UI or setExpenseData....
  //const [title,setTitle]=useState('');
  //const [category,setCategory]=useState('');
  //const[amount, setAmount]=useState('');

  

  const [errors, setErrors] = useState("");

  const validateForm = (form) => {
    const errmsg = {};
    if (!form.title) {
      errmsg.title = "Title is required";
    }
    if (!form.category) {
      errmsg.category = "Category is required";
    }
    if (!form.amount) {
      errmsg.amount = "Amount is required";
    }

    setErrors(errmsg);
    return errmsg;
  };

  //these were used for useRef hooks...
  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();

  const handelSubmit = (e) => {
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

    const validationResult = validateForm(getFormData);
    if (Object.keys(validationResult).length) return;

    //to edit

    if(editableId){
      setExpensesData((prevState)=>prevState.map((data)=>{
        if(data.id===editableId){
          
          return  { ...getFormData, id:editableId}
          
        }
        return data;
      }))
      setEditableId('')
      setGetFormData({ title: "", category: "", amount: "" });
      console.log(getFormData);
      return
    }








    //more optimise way
    

    //getFormdata is an object with containing title amount  and category...
    //const finalData = { ...getFormData, id: crypto.randomUUID() };
    
    //initially in validationResult there is a object return by validation function ..but the above linr(Object.keys(validationResult))
    //will return the array of keys and after that we are checking the lenght if lenght is emepty or not if lenght is emepty then no field is emepty...
    setExpensesData((prevState) => [...prevState, {...getFormData,id: crypto.randomUUID()}]);

    //this is for useRef....
    // console.log("hello",{title:titleRef.current.value,category:categoryRef.current.value,amount:amountRef.current.value,id:crypto.randomUUID()});
    // setExpensesData((prevState)=>[...prevState,{title:titleRef.current.value,category:categoryRef.current.value,amount:amountRef.current.value,id:crypto.randomUUID()}])
     setGetFormData({ title: "", category: "", amount: "" });
  };

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

  const handelChange = (e) => {
    console.log("hii");
    const { value, name } = e.target;
    setGetFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handelSubmit}>
      {/* <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={getFormData.title}

          //for this we have made special function...
          // onChange={(e) => {
          //   setGetFormData((prevState) => ({
          //     ...prevState,
          //     title: e.target.value,
          //   }));
          //   setErrors({});
            
          // }}
          //ref={titleRef}
          onChange={handelChange}
        />
        
      </div> */}

      <TextArea
        id={"title"}
        label={"Title"}
        name={"title"}
        value={getFormData.title}
        error={errors.title}
        onChane={handelChange}
      />

      {/* <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={getFormData.category}
          // onChange={(e) => {
          //   setGetFormData((prevState) => ({
          //     ...prevState,
          //     category: e.target.value,
          //   }));
          //   setErrors({});
          // }}
          //ref={categoryRef}
          onChange={handelChange}
        >
          //same as title we cannot select now as we have set value as emepty string thus now apply eventListener...
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div> */}
      {/* <p className="error">{errors.category}</p> */}
      <Select
        label={"Category"}
        id={"category"}
        name={"category"}
        value={getFormData.category}
        onChange={handelChange}
        optionsData={[
          "Select Category",
          "Grocery",
          "Clothes",
          "Bills",
          "Education",
          "Medicine",
        ]}
        error={errors.category}
      />
      {/* <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          name="amount"
          value={getFormData.amount}
          // onChange={(e) => {
          //   setGetFormData((prevState) => ({
          //     ...prevState,
          //     amount: e.target.value,
          //   }));
          //   setErrors({});
          // }}
          onChange={handelChange}
          //ref={amountRef}
        />
      </div> */}

      <TextArea
        id={"amount"}
        label={"Amount"}
        name={"amount"}
        value={getFormData.amount}
        error={errors.amount}
        onChane={handelChange}
      />

      <button className="add-btn">{editableId?"Save":"Add"}</button>
      
    </form>
  );
}
