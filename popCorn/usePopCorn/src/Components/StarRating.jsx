import { useState } from "react";
import Star from "./Star";
const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    
  };
  const starContainerStyle = {
    display: "flex",
  };

  
export default function StarRating({maxStars=5,color="red",size,messages=[],setUserRating}) {
    const [rating,setRating]=useState(0);
    const[hoverRateing,setHoverRating]=useState(0);
    function onRating(rate){
        setRating(rate);
        setUserRating(rate);
    }
    function onHoverEnter(rate){
        setHoverRating(rate);
    }

    function onHoverExit(){
        setHoverRating(0);
    }
  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxStars }, (_, i) => (
          <Star key={i} 
          handleRating={()=>{onRating(i+1) }} 
          handleHoverEnter={()=>{onHoverEnter(i+1)}} 
          handleHoverExit={onHoverExit} 
          full={hoverRateing >= i + 1 || (!hoverRateing && rating >= i + 1)}
          color={color}
          size={size}
          />
        ))}
      </div>
      <p style={{height:"50px",color:`${color}`, fontSize:`${(size)/(2)}`, paddingTop:"30px"} }>{ messages.length===maxStars?messages[hoverRateing? hoverRateing-1:rating-1]: hoverRateing?hoverRateing:rating?rating :"" }</p>
    </div>
  );
}
