import React, { Component } from "react";
import SideList from "./sideList";
import InfiniteScroll from "react-infinite-scroll-component";
import Posts from "./posts";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import NavBar from "./Navbar";

const style = {
  height: "100px",
  border: "1px solid green",
  margin: "6rem",
  padding: "8rem"
};
const useStyles = {
  image: {
    backgroundImage: "url(https://source.unsplash.com/collections/8706966)",
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
        <NavBar />
        <div className="row">
          <div className="col-lg-2">
            <div className="position-fixed"></div>
          </div>
          <div className="col-6">
            <div className="row"></div>
            <InfiniteScroll
              dataLength={this.state.items.length}
              next={this.fetchMoreData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              {this.state.items.map((i, index) => (
                <div style={style} key={index} className={classes.image}></div>
              ))}
            </InfiniteScroll>
          </div>
          <div className="col-3"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(Homepage);
