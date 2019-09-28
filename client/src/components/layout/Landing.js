import React, {Component, Fragment} from 'react';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider, withStyles} from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import {green, blue} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import RegistrationPage from '../auth/Register';
import LoginPage from '../auth/Login';
import BackgroundImage from '../images/background.jpg';


var sectionStyle = {
    backgroundImage: `url(${BackgroundImage})`
  };


function LandingPage () {
  return (
    <div>
      <div style={sectionStyle}>
        <RegistrationPage />
        <LoginPage />
      </div>

    </div>
  );
}

export default LandingPage;
