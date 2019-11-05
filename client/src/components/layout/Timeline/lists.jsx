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
        <ListItemText primary="Timeline" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Profile" />
      </ListItem>{" "}
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Posts" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Recommendations" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Friends" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Messeges" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PeopleAltIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ChatRoom" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VideoCallIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Videos" />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
