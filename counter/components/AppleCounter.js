import Buttons from "./buttons";
import BasketMaker from "./basket";
import leftButton from "../assets/images/leftB.png";
import rightButton from "../assets/images/rightB.png";
import "./AppleCounter.css";
import Counter from "./Counter";
import { useState } from "react";
console.log(leftButton);


// let leftApple=totalApple;
// let rightApple=totalApple-leftApple




const AppleCounter=()=>{

    function incLeft(){
        if(rightApple>0){
            setleftApple(leftApple+1);
            setrightApple(rightApple-1);
            console.log("Right:-",rightApple,"left:-",leftApple);
            
        }
    }
    
    function incRight(){
        if(leftApple>0){
            setrightApple(rightApple+1);
            setleftApple(leftApple-1);
            console.log("Right:-",rightApple,"left:-",leftApple);
            
        }
    }



    const totalApple=10;
    const[rightApple,setrightApple]=useState(0);
    const[leftApple,setleftApple]=useState(totalApple-rightApple);
    

    return(
        <>
            {/* this is also for conditional rendering if true then counter will be render on the UI otherwise null &&(null undefined doesnt reflect on UI)
            {false?<Counter/>:null} */}
            <Counter/>
            
            <div className="container">
            <BasketMaker appleCount={leftApple} basketName="LeftBasket"/>

            <Buttons clickHandler={incLeft} url={leftButton} name="LeftButton"> here we can pass anything as children even a function.. yeah ek props ko reduce karne me kaam aata hai</Buttons>
            <Buttons clickHandler={incRight} url={rightButton} name="rightButton" children="children pass karne ka ek yeah v tarika hai"/>
            <BasketMaker appleCount={rightApple} basketName="RightBasket"/>
            </div>
        </>     
       
        )
    
}

export default AppleCounter;

// on click ya koi v events kisi v pure components par nhi lga sakte yeah sirf or sirf elements par lagta hai
// agar components par lgaaenge to yeah props me object  ki tarah paas ho jata hai baaki or attributes ki tarah or us components ke element par ja k 
// es event ko fire kar sakte hai...
// for example hmne yha pure button components par onclick event fire kea hai but yeah yha nhi chalega to yeah props object me chala gya hai same as
// url and name or fir hm onclick ko object se destructure kar k new onclick event fire karenge jo ki element par hoga or us on click event me es 
// props wale  onclicl event ko paas kar denge....