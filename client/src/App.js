import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/auth/Register";
import Login from "./components/auth/Login";
import store from "./store";
import { Provider } from "react-redux";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";
import Success from "./components/layout/success";
import Homepage from "./components/layout/homepage";
import NavBar from "./components/layout/Navbar";
import Landing from "./components/landing";

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
            <NavBar />
            {/* <Navbar></Navbar> */}
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/success" component={Homepage} />
            <Route path="/" component={Landing} />

            {/* <Footer></Footer> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
