import React, {Component, Fragment} from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider, withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {green, blue} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { LoginUser } from '../../actions/authAction';

const theme = createMuiTheme ({
  palette: {
    primary: blue,
  },
});

const useStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing (1),
  },
  extendedIcon: {
    marginRight: theme.spacing (1),
  },

  input: {
    height: '45px',
    width: '100%',
  },
};

class LoginForm extends Component {

  
  onSubmitLogin = e => {
    let userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({password:""})

    this.props.LoginUser (userData);
  };

  state = {
    password: '',
    email: '',
    emailIsValid:true
  };

  onChange_email = e => {
    this.setState ({
      email: e.target.value,
    });
  };

  onChange_password = e => {
    this.setState ({
      password: e.target.value,
    });
  };

  render () {
    const {classes} = this.props;
    if (this.props.isAuthenticated) {
      console.log ('User is Logged in successfully!!', this.props);
    } else {
      console.log ('Authentication Failed!!', this.props);
    }

    return (
      <form className={classes.root} noValidate>
        <ThemeProvider theme={theme}>
          
          <TextField
            className={classes.margin}
            label="Email"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            InputProps={{
              className: classes.input,
            }}
            type="email"
            value={this.state.email}
            onChange={this.onChange_email}
            error={!this.state.emailIsValid}
            helperText={
              this.state.emailIsValid === false ? 'Enter a valid email' : null
            }
          />
          <TextField
            className={classes.margin}
            label="Password"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            type="password"
            InputProps={{
              className: classes.input,
            }}
            value={this.state.password}
            onChange={this.onChange_password}
          />

          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            onClick={this.onSubmitLogin}
          >
            Submit
          </Button>
        </ThemeProvider>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.registration.isAuthenticated,
    userToken: state.registration.token,
  };
};

export default connect (mapStateToProps, {LoginUser}) (
  withStyles (useStyles) (LoginForm)
);
