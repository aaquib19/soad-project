import React, { Component, Fragment } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import { green, blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },

  input: {
    height: "45px",
    width: "100%"
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

export default function RegistrationForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label="Name"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          className={classes.margin}
          label="Email"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          InputProps={{
            className: classes.input
          }}
          type="email"
        />
        <TextField
          className={classes.margin}
          label="Password"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          type="password"
          InputProps={{
            className: classes.input
          }}
        />
        <TextField
          className={classes.margin}
          label="Confirm Password"
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          type="password"
          InputProps={{
            className: classes.input
          }}
        />
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          Medium
        </Button>
      </ThemeProvider>
    </form>
  );
}
