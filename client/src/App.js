import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from "./components/auth/Register";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Route path="/register" component={Registration}></Route>
        {/* <Footer></Footer> */}
      </div>
    </Router>
  );
}

export default App;
