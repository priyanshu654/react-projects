export default function BasketMaker(props){
    const{appleCount,basketName}=props
    return(
        <div className="appleBasket">
            <h1>
                <span>{appleCount}</span> apples
            </h1>
            <p>{basketName}{appleCount==10 &&"(Full)"} {appleCount==0 && "(Empty)"}</p>
            {/* this is and operator used for conditional rendering */}
        </div>
    )
}