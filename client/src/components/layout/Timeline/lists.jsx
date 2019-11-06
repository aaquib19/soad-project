import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DynamicFeedIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/profile" style={{ color: "#DC3545" }}>
          <ListItemText primary="Timeline" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/profile/edit" style={{ color: "#DC3545" }}>
          <ListItemText primary="Profile" />
        </Link>
      </ListItem>{" "}
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/posts" style={{ color: "#DC3545" }}>
          <ListItemText primary="Posts" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/recommendations" style={{ color: "#DC3545" }}>
          <ListItemText primary="Recommendations" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/friends" style={{ color: "#DC3545" }}>
          <ListItemText primary="Friends" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/messeges" style={{ color: "#DC3545" }}>
          <ListItemText primary="Messeges" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/chatroom" style={{ color: "#DC3545" }}>
          <ListItemText primary="ChatRoom" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCallIcon />
          </Avatar>
        </ListItemAvatar>
        <Link to="/videos" style={{ color: "#DC3545" }}>
          <ListItemText primary="Videos" />
        </Link>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
