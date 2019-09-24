import { REGISTRATION } from '../actions/types';

const initialState = {
    isRegistered:false,
    userData:{}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTRATION:
        // console.log("in reducer", action.payload, "isRegistered ", action.isRegistered)
      return {
        ...state,
        isRegistered:action.isRegistered,
        userData:action.payload

      };
    default:
      return state;
  }
}
