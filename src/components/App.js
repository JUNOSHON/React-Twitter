import AppRouter from "./AppRouter";
import {useEffect, useState} from "react";
import "firebase/auth";
import {authServices} from "../fbase";
import {logDOM} from "@testing-library/react";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
  
  useEffect(() => {
    authServices.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  
  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Please Init"}
      <footer>&copy; Made By JUNO {new Date().getFullYear()}</footer>
    </div>
  );
};

export default App;
