import firebase from "firebase/compat/app";
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDT4VgHdqlJB4q5B6YmoQR6kke49Xo3D-U",
  authDomain: "react-twitter-c696e.firebaseapp.com",
  projectId: "react-twitter-c696e",
  storageBucket: "react-twitter-c696e.appspot.com",
  messagingSenderId: "256839307731",
  appId: "1:256839307731:web:bf5f706a6f3bce65de1f26"
};

firebase.initializeApp(firebaseConfig);
export const authServices = firebase.auth();


