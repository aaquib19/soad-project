import React, { Component } from "react";

import CenteredTabs from "./tabs";
import AddAPhotoTwoToneIcon from "@material-ui/icons/AddAPhotoTwoTone";
import BasicTextField from "./../../common/textField";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import InfiniteScroll from "react-infinite-scroll-component";

import { Timeline, Event } from "react-timeline-scribble";
import VirtualizedList from "./../../common/friendList";
import NavBar from "../Navbar";

const style = {
  height: "600px",
  width: "90%",
  border: "1px solid black",
  margin: "2rem",
  overflow: "auto",
  borderRadius: "5%"
  // padding: "4rem"
};
const style2 = {
  backgroundColor: "#f5f5f5",
  height: "100%",
  width: "100%",
  border: "1px solid black",
  overflow: "auto",
  paddingTop: "10px",
  position: "fixed"
};
class Profile extends Component {
  state = { items: Array.from({ length: 20 }) };
  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 1000);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-1"></div>

          <div
            className="col-9"
            style={{ backgroundColor: "#eeeeee", zIndex: "-2" }}
          >
            <img
              src="https://source.unsplash.com/collection/190727/470x300"
              alt=""
              style={{
                height: "14rem",
                width: "14rem",
                color: "white",
                marginTop: "22rem",
                marginLeft: "2rem",
                position: "absolute",
                left: 0,
                borderRadius: "50%",
                border: "8px solid #fff"
              }}
            />
            <img
              src="https://source.unsplash.com/random"
              alt=".."
              style={{
                zIndex: "-1",
                left: 0,
                height: "500px",
                width: "100%",
                position: "absolute"
              }}
            />

            <div style={{ marginTop: "25rem", color: "transparent " }}>
              <CenteredTabs />
            </div>

            <div
              style={{
                marginTop: "5rem",
                marginLeft: "50rem"
              }}
            >
              <button
                className="btn btn-danger"
                style={{
                  MarginTop: "15rem",
                  marginRight: "1rem"
                }}
              >
                Add Friend
              </button>
              <button className="btn btn-danger">Follow</button>
            </div>
            <h1
              style={{
                left: 0,
                textAlign: "left",
                margin: "1rem"
              }}
            >
              Wilson Patro
            </h1>

            <div
              style={{
                marginLeft: "17rem",
                float: "left"
              }}
            >
              <BasicTextField placeholder="" label="Write Something" />
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <AddAPhotoTwoToneIcon
                style={{ marginTop: "16px", marginLeft: "7px", float: "left" }}
              />
              <GroupAddTwoToneIcon
                style={{ marginTop: "16px", marginLeft: "7px", float: "left" }}
              />
              <LocationOnTwoToneIcon
                style={{ marginTop: "16px", marginLeft: "7px", float: "left" }}
              />

              <button
                style={{ marginLeft: "15px", marginTop: "10px", float: "left" }}
                className="btn btn-danger"
              >
                Post
              </button>
            </div>
            <div
              style={{
                zIndex: "-1",
                position: "absolute",
                float: "left",
                marginTop: "5rem"
              }}
            >
              <Timeline>
                <Event interval={"2019"}></Event>
                <br style={{ marginTop: "50rem" }} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Event interval={"2018"}></Event>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Event interval={"2017"}></Event>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </Timeline>
            </div>
            <div style={{ float: "left", marginLeft: "15rem" }}>
              <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {this.state.items.map((i, index) => (
                  <div style={style} key={index}>
                    <div className="card text-left">
                      <div className="card-header">
                        <i class="fa fa-user-circle" aria-hidden="true">
                          {" "}
                          Wilson Patro
                        </i>
                      </div>
                      <div className="card-footer text-muted">2 days ago</div>
                      <div className="card-body">
                        <img
                          src="https://source.unsplash.com/collection/190727/470x300"
                          alt="..."
                        />
                        <br />
                        <br />
                        <button className="btn btn-danger">
                          <i class="fa fa-heart" aria-hidden="true">
                            {" "}
                            Like
                          </i>
                        </button>
                        {"       "}
                        <button className="btn btn-danger">
                          <i class="fa fa-heart" aria-hidden="true">
                            {" "}
                            Comment
                          </i>
                        </button>
                        <BasicTextField
                          placeholder="Write a Comment"
                          label=""
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            </div>
          </div>

          <div className="col-2">
            <div style={style2}>
              <VirtualizedList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
