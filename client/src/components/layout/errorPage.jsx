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
      <div style={{ margin: "20%" }}>
        <img src={logo} />
      </div>
    </React.Fragment>
  );
};

export default ErrorPage;
