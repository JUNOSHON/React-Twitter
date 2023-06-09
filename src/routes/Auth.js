import React, {useState} from "react";
import {authServices, firebaseInstance} from "../fbase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
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
        setError(error.message);
      }
      
    }
  ;
  const toggleAccount = () => {
    setNewAccount(prev => !prev);
  };
  const onSocialClick=async(event) => {
    const {target: {name},} = event;
    let provider;
    if(name ==='google'){
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authServices.signInWithPopup(provider);
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" type="text" placeholder={"Email"} required value={email} onChange={onChange}/>
        <input name="password" type="password" placeholder={"password"} required value={password}
               onChange={onChange}/>
        <input type="submit" value={newAccount ? "Create Account" : "Log in"}/>
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
      <div>
        <button name="google" onClick={onSocialClick}>Continue with Google</button>
      
      </div>
    
    
    </div>
  );
};
