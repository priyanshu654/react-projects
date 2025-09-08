const Buttons=(props)=>{
    
    const{url,name,clickHandler,children}=props;
    console.log(children);
    return(
        <div>
             <button onClick={clickHandler} title={name}><img src={url} alt={name} /></button>
             
        </div>
       
        
    )
}

export default Buttons;