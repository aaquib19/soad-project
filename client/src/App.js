import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Registration from "./components/auth/Register";
import Login from "./components/auth/Login";
import store from "./store";
import { Provider } from "react-redux";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";

import Homepage from "./components/layout/homepage";
import Landing from "./components/landing";
import Profile from "./components/layout/Timeline/profile";
import Friends from "./components/layout/Timeline/friends";
import EditProfile from "./components/layout/Timeline/editProfile";
import Settings from "./components/layout/Timeline/accountSettings";
import ChangePassword from "./components/layout/Timeline/passwordChange";
import ErrorPage from "./components/layout/errorPage";

//check for teken
if (localStorage.Token) {
  console.log(localStorage.Token);

  //set auth token header
  setAuthToken(localStorage.Token);
  const decoded = jwt_decode(localStorage.Token);

  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // store.dispatch(clearCurrentProfile());

    //todo  clear current profile
    //redirect to login
    window.location.href = "/login";
  }
} else {
  console.log("no token");
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar></Navbar> */}
            <Switch>
              <Route exact path="/register" component={Registration} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/profile/passwordChange"
                component={ChangePassword}
              />
              <Route exact path="/profile/settings" component={Settings} />
              <Route exact path="/profile/edit" component={EditProfile} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/friends" component={Friends} />
              <Route exact path="/success" component={Homepage} />
              <Route exact path="/landing" component={Landing} />
              <Route path="/not-found" component={ErrorPage} />
              <Redirect from="/" exact to="/landing" />
              <Redirect to="/not-found" />
            </Switch>
            {/* <Footer></Footer> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
