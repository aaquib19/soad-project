import React, { Component } from "react";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import CustomizedMenus from "./FriendsMenu";
import FolderList from "./lists";
import AlignItemsList from "./../../common/people";
import AlignItemsList1 from "./recommend";
import NavBar1 from "./nav";
import Navbar from "../Navbar";
class Friends extends Component {
  state = {
    friend: ["Aaquib Niaz", "Bittu Ray", "Rahul Prasad"]
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#e9ebee" }}>
          {" "}
          <Navbar />
          <br />
          <br />
          <br />
          <div className="row">
            <div
              className="col-3"
              style={{
                marginTop: "2rem",
                marginLeft: "2rem"
              }}
            >
              <div
                style={{
                  height: "13%",
                  width: "95%"
                }}
              >
                <img
                  src="https://source.unsplash.com/collection/190727/470x300"
                  alt=""
                  style={{
                    height: "8rem",
                    width: "8rem",
                    color: "white",
                    marginTop: "-2rem",
                    marginLeft: "1.5rem",
                    position: "absolute",
                    left: 0,
                    borderRadius: "50%",
                    border: "5px solid #fff"
                  }}
                />
                <h3
                  style={{
                    fontFamily: "serif",
                    paddingTop: "2rem",
                    paddingLeft: "7rem",
                    fontWeight: "bold",
                    color: "black"
                  }}
                >
                  Wilson Patro
                </h3>
                <h4
                  style={{
                    paddingLeft: "7rem",
                    fontWeight: "bold",
                    fontFamily: "Serif",
                    color: "black"
                  }}
                >
                  <PeopleOutlineIcon /> 20 Friends
                </h4>
              </div>
              <div
                style={{
                  width: "80%",
                  marginTop: "3rem",
                  marginLeft: "1rem"
                }}
              >
                <FolderList />
              </div>
            </div>
            <div
              className="col-6"
              style={{
                marginTop: "2rem"
              }}
            >
              <h1
                style={{
                  textAlign: "left",
                  textDecorationLine: "underline",

                  marginTop: "4rem",
                  fontFamily: "serif"
                }}
              >
                Friends List
              </h1>
              {this.state.friend.map((friend1, index) => (
                <div
                  className="row"
                  style={{ marginTop: "3rem", zIndex: "+2" }}
                >
                  <div className="col-3" style={{ zIndex: "+2" }}>
                    <img
                      src="https://source.unsplash.com/collection/190727/470x300"
                      alt=""
                      style={{
                        height: "5rem",
                        width: "5rem",
                        color: "white",
                        marginTop: "9rem",
                        marginLeft: "4rem",
                        position: "absolute",
                        left: 0,
                        borderRadius: "50%",
                        border: "5px solid #fff"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random"
                      alt=".."
                      style={{
                        position: "absolute",
                        zIndex: "-1",
                        left: 1,
                        height: "200px",
                        marginLeft: "3rem",
                        width: "300px"
                      }}
                    />
                    <h5
                      style={{
                        left: 0,
                        textAlign: "left",
                        marginTop: "15rem",
                        marginLeft: "3rem",
                        fontFamily: "Sans-Serif"
                      }}
                    >
                      {friend1}
                    </h5>
                  </div>
                  <div
                    style={{
                      marginTop: "14rem",
                      marginLeft: "2rem"
                    }}
                  >
                    <CustomizedMenus />
                  </div>
                  <div
                    className="col-3"
                    style={{ marginLeft: "5rem", zIndex: "+2" }}
                  >
                    <img
                      src="https://source.unsplash.com/collection/190727/470x300"
                      alt=""
                      style={{
                        height: "5rem",
                        width: "5rem",
                        color: "white",
                        marginTop: "9rem",
                        marginLeft: "1rem",
                        position: "absolute",
                        left: 0,
                        borderRadius: "50%",
                        border: "5px solid #fff"
                      }}
                    />
                    <img
                      src="https://source.unsplash.com/random"
                      alt=".."
                      style={{
                        position: "absolute",
                        zIndex: "-1",
                        left: 1,
                        height: "200px",
                        width: "300px"
                      }}
                    />
                    <h5
                      style={{
                        left: 0,
                        textAlign: "left",
                        marginTop: "15rem",
                        fontFamily: "Sans-Serif"
                      }}
                    >
                      {friend1}
                    </h5>
                  </div>
                  <div
                    style={{
                      marginTop: "14rem"
                    }}
                  >
                    <CustomizedMenus />
                  </div>
                </div>
              ))}
            </div>
            <div
              className="col-2"
              style={{
                marginTop: "2rem",
                width: "100%",
                backgroundColor: "#e9ebee"
              }}
            >
              <div
                style={{
                  width: "100%",
                  marginTop: "3rem"
                }}
              >
                <AlignItemsList1 />
              </div>
            </div>
            <div
              className="col-1"
              style={{
                width: "100%",
                backgroundColor: "#e9ebee"
              }}
            ></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
