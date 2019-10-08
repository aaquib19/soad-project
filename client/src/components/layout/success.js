import React, { Component, Fragment } from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider, withStyles } from "@material-ui/styles";
// import TextField from "@material-ui/core/TextField";
import { green, blue } from "@material-ui/core/colors";
// import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { LoginUser } from "../../actions/authAction";
// import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
const Success = () => {
  return (
    <div>
      <Box>
        <h1>You have successfully logged in.</h1>
        <Button variant="contained" size="medium" color="primary">
          Click Here
        </Button>
      </Box>
    </div>
  );
};

export default Success;
