import React from "react";
import {authServices} from "../fbase";
import {useHistory} from "react-router-dom";

export default function Profile() {
  const history = useHistory();
  const onLogoutClick = () => {
    authServices.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogoutClick}>Log out</button>
    </>
  );
}
