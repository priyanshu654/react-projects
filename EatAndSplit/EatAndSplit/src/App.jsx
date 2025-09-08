
import { useState } from 'react'
import './App.css'

import FriendsList from './Components/FriendsList'
import AddFriendForm from './Components/AddFriendForm';
import SplitBillForm from './Components/SplitBillForm';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const[showAddFriend,setShowAddFriend]=useState(false);
  const[addFriend,setAddFriend]=useState(initialFriends);
  const[selectedFriend,setSelectedFriend]=useState(false);
  const [selectedFriendDetails,setSelectedFriendDetails]=useState({});
  const [showSplitBillForm,setShowSplitBillForm]=useState(false);

  function handelOpenForm(){
    setShowAddFriend(prevState=>!prevState);
    setShowSplitBillForm(false);
  }
  console.log(initialFriends,"after update");
  
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList toAddFriend={addFriend} toSelectFriend={setSelectedFriend} toSetSelectedFriendDetails={setSelectedFriendDetails} selectedFriendDetails={selectedFriendDetails}setShowAddFriend={setShowAddFriend} setShowSplitBillForm={setShowSplitBillForm} />
          {showAddFriend?<AddFriendForm toSetAddFriend={setAddFriend}/>:false}
          <button className="button" onClick={handelOpenForm}>{showAddFriend?"Close":"Add Friend"}</button>
        </div>
        {showSplitBillForm?<SplitBillForm toSetFriendDetails={selectedFriendDetails} setAddFriend={setAddFriend}/>:false}
      </div>
    </>
  )
}

export default App
