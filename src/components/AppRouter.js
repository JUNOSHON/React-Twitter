import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default function AppRouter(isLoggedIn) {
  return (
    
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path={"/"}>
              <Auth/>
            </Route>
          </>) :
          (<Route exact path={"/"}>
          <Home/>
        </Route>)}
      </Switch>
    </Router>
  );
}
