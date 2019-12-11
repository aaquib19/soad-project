import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { borderRadius } from "@material-ui/system";

const root = {
  width: "90%",
  maxWidth: 300,
  backgroundColor: "white",
  margin: "2rem",
  borderRadius: "8px"
};

class AlignItemsList1 extends Component {
  state = { people1: ["BBC", "Billboards", "CCN"] };
  render() {
    const { title, addFriend, remove } = this.props;
    return (
      <List style={root}>
        <h5 style={{ paddingTop: "10px", float: "left", paddingLeft: "10px" }}>
          {" "}
          {title}
        </h5>
        <Link
          to="/recommendations"
          style={{
            paddingTop: "10px",
            paddingRight: "10px",
            float: "right",
            fontSize: "17px"
          }}
        >
          See All
        </Link>
        {this.state.people1.map((peopl2, index) => (
          <ListItem alignItems="flex-start" key={index}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random"
              />
            </ListItemAvatar>
            <ListItemText
              primary={peopl2}
              secondary={
                <React.Fragment>
                  <br />
                  <button className="btn btn-sm btn-danger">
                    {addFriend}
                  </button>{" "}
                  <button className="btn btn-sm btn-danger">{remove}</button>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default AlignItemsList1;
