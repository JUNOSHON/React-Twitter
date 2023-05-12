
import AppRouter from "./AppRouter";
import {useState} from "react";
import "firebase/auth"
import {authServices} from "../fbase";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(authServices.currentUser);
  return (
    <div >
      <AppRouter  isLoggedIn={isLoggedIn}/>
      <footer>&copy; Made By JUNO {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
