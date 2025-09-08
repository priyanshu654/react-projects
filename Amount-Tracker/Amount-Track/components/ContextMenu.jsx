export function ContextMenu({contextPosition,setContextPosition,setExpensesdata,selectedId ,setGetFormData,expensesData,setEditableId}){
    console.log(selectedId
        
    );
    
    if(!contextPosition.left) return
    return(
        <div className="context-menu" style={{...contextPosition}}>
            <div onClick={()=>{console.log("Editing");
                const [tobeEdited]=expensesData.filter((data)=>{
                    return data.id==selectedId;
                })
                console.log(tobeEdited,"tobeedited");
                setGetFormData({title:tobeEdited.title,category:tobeEdited.category,amount:tobeEdited.amount})
                setEditableId(selectedId)
                setContextPosition({})
            }} >Edit</div>
            <div  onClick={()=>{console.log("Deleting");
                setExpensesdata((prevState)=> prevState.filter((expenses)=>expenses.id!==selectedId))
                setContextPosition({})
            }}>Delete</div>
        </div>
    )
}