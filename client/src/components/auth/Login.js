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
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Whizingo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const useStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "55vh"
  },
  margin: {
    margin: theme.spacing(2)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },

  input: {
    height: "45px",
    width: "100%"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/8706966)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
};

class LoginForm extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      console.log("push profile page");
      this.props.history.push("/profile");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmitLogin = e => {
    let userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ password: "" });

    this.props.LoginUser(userData);
  };

  state = {
    password: "",
    email: "",
    emailIsValid: true,
    errors: {}
  };

  onChange_email = e => {
    this.setState({
      email: e.target.value
    });
  };

  onChange_password = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    const { classes } = this.props;
    if (this.props.isAuthenticated) {
      console.log("User is Logged in successfully!!", this.props);
    } else {
      console.log("Authentication Failed!!", this.props);
    }

    return (
      <Grid container component="main" className={classes.image}>
        {/* <CssBaseline /> */}
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.root} noValidate>
              <ThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Email"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  InputProps={{
                    className: classes.input
                  }}
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange_email}
                  error={!this.state.emailIsValid}
                  helperText={
                    this.state.emailIsValid === false
                      ? "Enter a valid email"
                      : null
                  }
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
                  value={this.state.password}
                  onChange={this.onChange_password}
                />

                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.submit}
                  onClick={this.onSubmitLogin}
                >
                  Submit
                </Button>
                <Grid container spacing={4}>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </ThemeProvider>
            </form>

            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    );
  }
}
// LoginForm.propTypes = {
//   LoginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => {
  return {
    isAuthenticated: state.registration.isAuthenticated,
    // userToken: state.registration.token,
    auth: state.registration,

    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { LoginUser }
)(withStyles(useStyles)(LoginForm));
