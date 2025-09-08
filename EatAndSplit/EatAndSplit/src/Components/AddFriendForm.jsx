import { useState } from "react";

export default function AddFriendForm({toSetAddFriend}) {
    const[friendName,setFriendName]=useState('');
    const[ImageUrl,setImageUrl]=useState("https://i.pravatar.cc/48?u=499476");

    function handleSubmit(e){
        e.preventDefault();
        if(!friendName) return
        const newId = crypto.randomUUID();
        const newData={id:newId,name:friendName,image:ImageUrl,balance:0}

        toSetAddFriend((prevState) => [...prevState, newData]);

        setFriendName('');
        setImageUrl("https://i.pravatar.cc/48?u=499476");
    }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label >👫 Friend name</label>
        <input type="text" value={friendName} onChange={(e)=>setFriendName(e.target.value)}/>
        <label>🌄 Image URL</label>
        <input type="text" value={ImageUrl} onChange={(e)=>setImageUrl(e.target.value)}/>
        <button className="button">Add</button>
      </form>
    </>
  );
}
