import { useState ,Fragment,useEffect} from "react"

const Counter=(props)=>{
    //useState is a function which return array with 2 elements first one is wht we have passed and second one is function...
//    console.log(Fragment);
//    console.log(Symbol.for("react.Fragment"));

    // this was for passing components as a children and rendering them
    // const{children:AppleCounter}=props

   const[Count,setCount]=useState(0);
   const[numberr,setNumberr]=useState(0);

   useEffect(()=>{
    setNumberr(numberr+1);
    
    },[Count])

   function addValue(){
    if(Count<20){
        //write how manyntimes you want but it will print with increament of only 1
        setCount(Count+1);
        setCount(Count+1);
        setCount(Count+1);

        //this will reflect changes based on the previous value ,means it will direct increase 3
        // setCount((previousState)=>{return previousState+1})
        // setCount((previousState)=>{return previousState+1})
        // setCount((previousState)=>{return previousState+1})
    }
   }

   function decValue(){
    if(Count>0){
        setCount(Count-1)
    }
   }

   return(
    
    <Fragment>  
        <div style={{textAlign:"center",marginBottom:100}}>
            <h1>Counter</h1>
            <h1>{Count}</h1>
            <div>
                <button onClick={addValue}>Increase</button>
                <button onClick={decValue}>Decrease</button>
            </div>
        </div>
        
        <div>no of renders{numberr}</div>


    {/* this was for passing components as a children and rendering them
        {AppleCounter} */}


    </Fragment>
   )
}
export default Counter


//useState behind the scene ek array maintain kar k rakhta hai or wha se value fetch hota hai
//state components k andar hi define hota hai or wo mutuable hota hai....yha par Count state hii hai
//props ek parent arguments ki tarah hota hai or yeah immutable hota hai...
//props ek parent ka state v ho sakta haii....
//state change ho ya props change ho components turant rerender hota hai....

//fragment ka data type symbol hota hai
//Fragment ko wrap kar k usko variable me stor kar le or usko console.log karwaaee to wo object return karta hai..
