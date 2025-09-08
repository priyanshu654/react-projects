import Friends from "./Friends";


export default function FriendsList({toAddFriend,toSelectFriend,toSetSelectedFriendDetails,selectedFriendDetails,setShowAddFriend,setShowSplitBillForm}){
  const initialData=toAddFriend;
  console.log(initialData);
  
  
    return(
        <ul>
            {initialData.map((el)=>(
                <Friends initialData={el} 
                key={el.id} 
                setSelectFriend={toSelectFriend} 
                toSetSelectedFriendDetails={toSetSelectedFriendDetails} 
                selectedFriendDetails={selectedFriendDetails} 
                setShowAddFriend={setShowAddFriend} 
                setShowSplitBillForm={setShowSplitBillForm}/>
            )  
            )}
        </ul>
    )
}