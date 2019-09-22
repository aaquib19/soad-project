import axios from 'axios';
import { REGISTRATION } from './types';

//Get Theatre Lists

export const RegisterUser = user_data => dispatch => {
  axios
    .post (`/api/users/register/`, user_data)
    .then (res => {
    //   console.log ("res data",res.data);
      dispatch ({
        type: REGISTRATION,
        isRegistered: true,
        payload: res.data,
      });
    })
    .catch (err =>
      dispatch ({
        type: REGISTRATION,
        isRegistered: false,
        payload: {},
      })
    );
};
