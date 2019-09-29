import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/auth/Register";
import Login from "./components/auth/Login";
import LandingPage from "./components/layout/Landing";
import store from "./store";
import { Provider } from "react-redux";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authAction";

//check for teken
if (localStorage.Token) {
  console.log(localStorage.Token);

  //set auth token header
  setAuthToken(localStorage.Token);
  const decoded = jwt_decode(localStorage.Token);

  store.dispatch(setCurrentUser(decoded));
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
            <Route path="/landing" component={LandingPage} />
            <Route path="/register" component={Registration} />
            <Route path="/login" component={Login} />
            {/* <Footer></Footer> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
