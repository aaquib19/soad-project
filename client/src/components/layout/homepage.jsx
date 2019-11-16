import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { withStyles } from "@material-ui/styles";
import NavBar from "./Navbar";

import BasicTextField from "./../common/textField";
import ResponsiveDialog from "../common/dialog";
import VirtualizedList from "./../common/friendList";
import AlignItemsList from "./../common/people";
import PostForm from "../posts/PostForm";
import Posts from "../posts/Posts";
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

  height: "145px",
  width: "70%",
  borderRadius: "15px",
  margin: "2rem",
  overflow: "auto"
};
const style2 = {
  backgroundImage:
    "linear-gradient(to left  , #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)",

  backgroundColor: "#f5f5f5",
  height: "100%",
  width: "90%",

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
        <div style={{}}>
          <NavBar />
          <br />
          <br />

          <div className="row">
            <div className="col-lg-1">
              <div className="position-fixed"></div>
            </div>
            <div className="col-6">
              <div style={style1}>
                <PostForm />
              </div>
              <Posts />
              <InfiniteScroll
                dataLength={this.state.items.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {this.state.items.map(index => (
                  <div style={style} key={index}>
                    <div className="card text-left">
                      <div className="card-header">
                        <i class="fa fa-user-circle" aria-hidden="true">
                          {" "}
                          Wilson Patro
                        </i>
                      </div>
                      <div className="card-footer text-muted">2 days ago</div>
                      <div
                        className="card-body"
                        style={{ backgroundColor: "#e0e0e0" }}
                      >
                        <img
                          src="https://source.unsplash.com/collection/190727/400x300"
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
