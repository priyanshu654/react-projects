import { useEffect } from "react";

export default function Timer({dispatch,timeForTest}) {

    const mins=Math.floor(timeForTest/60);
    const seconds=timeForTest%60;

    useEffect(function(){
        let intervalId=setInterval(function(){
            dispatch({type:"tick"})
        },1000);

        return function(){
            clearInterval(intervalId);
        }
    },[dispatch])

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
