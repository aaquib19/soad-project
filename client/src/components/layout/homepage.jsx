import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from "@material-ui/styles";
import NavBar from "./Navbar";

import BasicTextField from "./../common/textField";
import ResponsiveDialog from "../common/dialog";
import VirtualizedList from "./../common/friendList";
import AlignItemsList from "./../common/people";

const style = {
  height: "584px",
  width: "60%",
  border: "1px solid white",
  margin: "1rem",
  overflow: "auto",
  borderRadius: "5%"
  // padding: "4rem"
};

const style1 = {
  backgroundColor: "#f5f5f5",
  backgroundImage:
    "linear-gradient(to right top,#ddd3d5, #e2dadb, #e7e1e2, #ece9e9, #f1f0f0)",
  height: "245px",
  width: "80%",
  borderRadius: "15px",
  margin: "2rem",
  overflow: "auto"
};
const style2 = {
  backgroundImage:
    "linear-gradient(to left  , #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)",

  backgroundColor: "#f5f5f5",
  height: "100%",
  width: "100%",

  overflow: "auto",
  paddingTop: "10px",
  position: "fixed"
};

const useStyles = {
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
};
class Homepage extends Component {
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
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
          }}
        >
          <NavBar />
          <br />
          <br />

          <div className="row">
            <div className="col-lg-1">
              <div className="position-fixed"></div>
            </div>
            <div className="col-6">
              <div style={style1}>
                <BasicTextField placeholder="" label="Write Something" />
                <div style={{ padding: "1rem", float: "left" }}>
                  <ResponsiveDialog />
                </div>
                <div style={{ padding: "1rem", float: "left" }}>
                  <button className="btn btn-dark">
                    <i class="fa fa-users"> Tag Friends</i>
                  </button>
                </div>
                <div style={{ padding: "1rem", float: "left" }}>
                  <button className="btn btn-dark">
                    <i class="fa fa-map-marker"> Location</i>
                  </button>
                </div>
                <br />
                <br />
                <br />
                <div style={{ padding: "1rem", float: "left", width: "100%" }}>
                  <button className="btn btn-secondary btn-lg btn-block">
                    <i class="fa fa-upload"> Post</i>
                  </button>
                </div>
              </div>

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
            <div className="col-sm-3">
              <div style={style2}>
                <AlignItemsList />
              </div>
            </div>
            <div className="col-sm-2">
              <div style={style2}>
                <VirtualizedList />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Homepage);
