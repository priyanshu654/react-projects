export default function Friends({initialData,setSelectFriend,toSetSelectedFriendDetails,selectedFriendDetails,setShowAddFriend,setShowSplitBillForm}){
    function handleClick() {
        const isCurrentlySelected = selectedFriendDetails?.id === initialData.id;
    
        if (isCurrentlySelected) {
            // Clear selection when the friend is already selected
            setSelectFriend(false);
            toSetSelectedFriendDetails({});
            setShowSplitBillForm(false);
        } else {
            // Select the friend and show the form
            setSelectFriend(true);
            toSetSelectedFriendDetails(initialData);
            setShowAddFriend(false);
            setShowSplitBillForm(true);
        }
    }
    const activeFriend=selectedFriendDetails?.id===initialData.id;
    return(
        <li className={activeFriend?"selected":""}>
            <img src={initialData.image} alt="" />
            <h3>{initialData.name}</h3>
            {
               initialData.balance<0 &&(
                <p className="red">
                    you owe {initialData.name} {Math.abs(initialData.balance)}
                </p>
               )   
            }
            {
                initialData.balance>0 &&(
                    <p className="green">
                        {initialData.name} owe you {Math.abs(initialData.balance)}
                    </p>
    
                   )
            }
            {
                initialData.balance==0 &&(
                    <p>
                        you and {initialData.name} are even
                    </p>
    
                   )
            }
            <button className="button" onClick={handleClick}>{activeFriend?"Close":"Select"}</button>
        </li>
    )
}