import React, {useState} from "react";
import {dbService} from "../fbase";

export default function Home(event) {
    const [nweet,setNweet] = useState("");
    const onSubmit =async(event) =>{
        event.preventDefault();
        await dbService.collection("nweets").add({
            nweet,
            createdAt: Date.now(),
        });
        setNweet("");
    };
    const onChange = (event) => {
        const{target:{value}}=event;
        setNweet(value);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}  placeholder="What's on your mind?" maxLength={120}/>
                <input type="submit" value="Nweet" />
            </form>
           
        </div>
    )
}
