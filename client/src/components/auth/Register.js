import React, {Component, Fragment} from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider, withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {green, blue} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

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

class RegistrationForm extends Component {
  constructor (props) {
    super (props);
  }

  state = {
    username: '',
    password: '',
    confirm_password: '',
    email: '',
  };

  onChange_username = e => {
    this.setState ({
      username: e.target.value,
    });
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

  onChange_confirmpassword = e => {
    this.setState ({
      confirm_password: e.target.value,
    });
  };

  render () {
    const {classes} = this.props;
    console.log ('classes is ', classes.root);

    return (
      <form className={classes.root} noValidate>
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
}

export default withStyles (useStyles) (RegistrationForm);
