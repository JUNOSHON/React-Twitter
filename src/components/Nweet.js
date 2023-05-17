import React, {useState} from "react";
import {dbService} from "../fbase";

export default function Nweet({nweetObj, isOwner}) {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Really Delete?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    } else {
      alert("Cancle");
    }
  };
  const onEditClick = () => setEditing(prev => !prev);
  const onSubmit = async(event) => {
    event.preventDefault();
    
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text : newNweet
    });
    setEditing(false);
  }
  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setNewNweet(value);
  };
  
  
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" value={newNweet} placeholder="Edit your tweet" required onChange={onChange}/>
            <input type="submit" value="update nweet"/>
          </form>
          <button onClick={onEditClick}>Cancle</button>
        </>) : (<>
        <h4>{nweetObj.text}</h4> {isOwner && (<>
        <button onClick={onDeleteClick}>Delete</button>
        <button onClick={onEditClick}>Edit</button>
      </>)}
      </>)}
    </div>
  );
}


