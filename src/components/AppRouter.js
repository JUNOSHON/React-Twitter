import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

import {useState} from "react";

const AppRouter = ({isLoggedIn}) => {
  
  
  return (
    <Router>
      <Route exact path="/">
        {isLoggedIn ? <Home/> : <Auth/>}
      </Route>
    </Router>
  );
};
export default AppRouter;