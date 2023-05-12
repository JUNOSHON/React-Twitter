import React, {useState} from "react";
import {authServices} from "../fbase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (event) => {
    const {target: {name, value}} = event;
    console.log(value);
    
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
      event.preventDefault();
      
      try {
        let data;
        if (newAccount) {
          data = await authServices.createUserWithEmailAndPassword(email, password,
          );
        } else {
           data = await authServices.signInWithEmailAndPassword(email, password);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      
    }
  ;
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder={"Email"} required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder={"password"} required value={password}
               onChange={onChange}/>
        <input type="submit" value={newAccount ? "Create Account" : "Log in"}/>
      </form>
      <div>
        <button>Continue with Google</button>
      
      </div>
    
    
    </div>
  );
};