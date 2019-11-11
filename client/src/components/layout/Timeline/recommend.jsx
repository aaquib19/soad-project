import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    backgroundImage:
      "linear-gradient(to left, #918789, #a8a0a1, #c0babb, #d8d5d5, #f1f0f0)"
  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList1() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <h5
        style={{
          paddingTop: "10px",
          float: "left",
          fontFamily: "serif",
          fontWeight: "bold",
          marginLeft: "1rem"
        }}
      >
        {" "}
        Wanna Follow ?
      </h5>
      <Link
        to="/recommendations"
        style={{
          paddingTop: "10px",
          paddingLeft: "2.3rem",
          float: "left",
          fontSize: "17px",
          color: "#DC3545",
          fontWeight: "bold"
        }}
      >
        See All
      </Link>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <React.Fragment>
              <br />
              <button className="btn btn-sm btn-danger">Add Friend</button>{" "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <React.Fragment>
              <br />
              <button className="btn btn-sm btn-danger">Add Friend</button>{" "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <React.Fragment>
              <br />
              <button className="btn btn-sm btn-danger">Add Friend</button>{" "}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
