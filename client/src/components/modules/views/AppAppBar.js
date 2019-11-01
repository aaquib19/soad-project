import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: "#e91e63"
    }
  }
});

const styles = theme => ({
  title: {
    color: "#fce4ec",
    fontSize: 24
  },
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: "#fce4ec"
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  rightLink: {
    fontSize: 16,
    color: "#fce4ec",
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: "#fce4ec"
  }
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="secondary">
          <Toolbar className={classes.toolbar}>
            <div className={classes.left} />
            <Link
              variant="h6"
              underline="none"
              color="textPrimary"
              className={classes.title}
              to="null"
            >
              {"Whizingo"}
            </Link>
            <div className={classes.right}>
              <Link
                color="textPrimary"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                href="/login"
              >
                {"Sign In"}
              </Link>
              <Link
                variant="h6"
                color="textPrimary"
                underline="none"
                className={clsx(classes.rightLink)}
                href="/register"
              >
                {"Sign Up"}
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.placeholder} />
      </ThemeProvider>
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppAppBar);
