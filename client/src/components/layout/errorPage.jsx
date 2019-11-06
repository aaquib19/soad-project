import React from "react";
import logo from "./404.png";
import NavBar1 from "./Timeline/nav";
const ErrorPage = () => {
  return (
    <React.Fragment>
      <NavBar1 />
      <br />
      <br />
      <br />
      <div style={{ margin: "5%", height: "70%", width: "70%" }}>
        <img src={logo} style={{ height: "50%", widht: "50%" }} />
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
