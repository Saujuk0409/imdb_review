// userReducer.js

import { SIGN_UP } from '../actions/userActions';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
