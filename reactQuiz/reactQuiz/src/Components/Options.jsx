export default function Options({questions,dispatch,index,answer}){
    //console.log(answer);
    const hasAnswered=answer!==null;
    
    const que=questions[index];
    //console.log(que);
    return(
        <div className="options">
            {que.options.map((el,idx)=>(
                <button className={`btn btn-option ${idx===answer?"answer":""} ${hasAnswered?idx===que.correctOption?"correct":"wrong":""} `} key={el}
                onClick={()=>dispatch({type:"newAnswer", payload:idx})}
                >
                    {el}
                </button>
            ))}
        </div>
    )
}