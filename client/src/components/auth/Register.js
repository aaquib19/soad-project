import React, {Component, Fragment} from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider, withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {green, blue} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {RegisterUser} from '../../actions/authAction';
import * as EmailValidator from 'email-validator';

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
    width: '25%',
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
    backgroundColor: 'white',
  },
};

class RegistrationForm extends Component {
  onSubmitRegistration = e => {
    if (this.state.username.length < 5) {
      this.setState ({username_error: true});
    } else if (this.state.password !== this.state.confirm_password) {
      this.setState ({
        error_msg_passwd: true,
      });
    } else {
      // else if (this.state.password === this.state.confirm_password) {
      //   this.setState ({
      //     error_msg_passwd: false,
      //   });
      // }
      let userData = {
        name: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.confirm_password,
      };

      this.props.RegisterUser (userData);
    }
  };

  state = {
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    error_msg_passwd: false,
    emailIsValid: true,
    username_error: false,
  };

  onChange_username = e => {
    if (e.target.value.length < 5) {
      this.setState ({
        username_error: true,
      });
    } else if (e.target.value.length >= 5 || e.target.value === '') {
      this.setState ({
        username_error: false,
      });
    }

    this.setState ({
      username: e.target.value,
    });
  };

  onChange_email = e => {
    this.setState ({
      email: e.target.value,
    });

    if (EmailValidator.validate (e.target.value) || e.target.value === '') {
      this.setState ({emailIsValid: true});
    } else {
      this.setState ({emailIsValid: false});
    }
  };

  onChange_password = e => {
    this.setState ({
      password: e.target.value,
    });
  };

  onChange_confirmpassword = e => {
    this.setState ({
      confirm_password: e.target.value,
    });
  };

  render () {
    const {classes} = this.props;
    if (this.props.isRegistered) {
      console.log ('User is registered successfully!!');
    } else {
      console.log ('Registration failed!!', this.props);
    }

    return (
      <form className={classes.root} noValidate style={{margin:'1%'}}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="Name"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            InputProps={{
              className: classes.input,
            }}
            onChange={this.onChange_username}
            value={this.state.username}
            error={this.state.username_error}
            helperText={
              this.state.username_error === true
                ? 'at least five characters required '
                : null
            }
          />
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
          <TextField
            className={classes.margin}
            label="Confirm Password"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            type="password"
            InputProps={{
              className: classes.input,
            }}
            value={this.state.confirm_password}
            onChange={this.onChange_confirmpassword}
            error={this.state.error_msg_passwd}
            helperText={
              this.state.error_msg_passwd === true
                ? 'Both passwords are not same'
                : null
            }
          />
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className={classes.margin}
            onClick={this.onSubmitRegistration}
          >
            Register
          </Button>
        </ThemeProvider>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isRegistered: state.registration.isRegistered,
    userData: state.registration.userData,
  };
};

export default connect (mapStateToProps, {RegisterUser}) (
  withStyles (useStyles) (RegistrationForm)
);
