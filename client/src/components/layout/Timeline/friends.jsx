import React, { Component } from "react";

import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

import CustomizedMenus from "./FriendsMenu";
import FolderList from "./lists";
import AlignItemsList from "./../../common/people";
import AlignItemsList1 from "./recommend";
import NavBar1 from "./nav";
class Friends extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar1 />
        <br />
        <br />
        <br />
        <div className="row">
          <div
            className="col-3"
            style={{
              marginTop: "3rem",
              marginLeft: "2rem",
              backgroundImage:
                "linear-gradient(to right, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
            }}
          >
            <div
              style={{
                height: "33%",
                width: "95%",
                backgroundImage:
                  "linear-gradient(to left, #e36d9f, #d45980, #c24761, #ad3744, #972929)"
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
                <PeopleOutlineIcon /> 500 Friends
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
              zIndex: "-2",
              backgroundImage:
                "linear-gradient(to right, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
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
            <div className="row" style={{ marginTop: "3rem" }}>
              <div className="col-3">
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
                  Wilson Patro
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
              <div className="col-3" style={{ marginLeft: "5rem" }}>
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
                  Wilson Patro
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
          </div>
          <div
            className="col-2"
            style={{
              width: "100%",
              backgroundImage:
                "linear-gradient(to left, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
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
              backgroundImage:
                "linear-gradient(to right, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
            }}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
