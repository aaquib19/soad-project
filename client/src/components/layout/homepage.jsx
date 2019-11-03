import React, { Component } from "react";
import SideList from "./sideList";
import InfiniteScroll from "react-infinite-scroll-component";
import Posts from "./posts";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import NavBar from "./Navbar";
import Divider from "@material-ui/core/Divider";

import BasicTextField from "./../common/textField";
import IconLabelButtons from "../common/button";
import CustomizedDialogs from "../common/dialog";
import ResponsiveDialog from "../common/dialog";
import { Link } from "@material-ui/core/Link";
import CheckboxListSecondary from "./../common/friendList";
import VirtualizedList from "./../common/friendList";
import AlignItemsList from "./../common/people";

const style = {
  height: "600px",
  width: "80%",
  border: "1px solid green",
  margin: "2rem",
  overflow: "auto"
  // padding: "4rem"
};

const style1 = {
  backgroundColor: "#f5f5f5",
  height: "245px",
  width: "80%",
  border: "1px solid black",
  margin: "2rem",
  overflow: "auto"
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
const style3 = {
  backgroundColor: "#f5f5f5",
  height: "100%",
  width: "100%",
  border: "1px solid black",
  overflow: "auto",
  paddingTop: "50px",
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
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#e0e0e0" }}>
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
