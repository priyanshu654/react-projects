import { useState } from "react"


export default function TabContent({items}){
    const [show,setShow]=useState(true);
    const [forceRerender,setForceRerender]=useState(false);
    function handleShow(){
        setShow(prevState=>!prevState);
    }

    function handleLikes() {
        items.likes+=1;
        setForceRerender(prevState=>!prevState)
    }
    
    function handleThreeLikes(){
        setLikes(prevState=>prevState+1)
        setLikes(prevState=>prevState+1)
        setLikes(prevState=>prevState+1)
    }
    function handleUndo() {
        setShow(true);
        items.likes=0;
        setForceRerender(prevState=>!prevState)
        console.log(likes);
      }
    
      function handleUndoLater() {
        setTimeout(handleUndo, 2000);
      }
    return(
        <div className="tab-content">
            <h4>{items.summary}</h4>
            {show&&<p>{items.details}</p>}
            <div className="tab-actions">
                <button onClick={handleShow}>{show?"Hide ":"Show "}details</button>
                <div className="hearts-counter">
                    <span>{items.likes}❤️</span>
                    <button onClick={handleLikes}>+</button>
                    <button onClick={handleThreeLikes}>+++</button>
                </div>
            </div>

            <div className="tab-undo">
                <button onClick={handleUndo}>Undo</button>
                <button onClick={handleUndoLater}>Undo in 2s</button>
            </div>
        </div>
    )
}

