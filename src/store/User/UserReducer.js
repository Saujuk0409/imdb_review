// userReducer.js

// import { SIGN_UP } from './UserAction';

// const initialState = {};

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGN_UP:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default userReducer;

// userReducer.js

const initialState = {
    name:"saujanya",
    email: '',
    password: '',
    isAuthenticated: false,
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_NAME':
        return{
          ...state,
          name:action.payload,
        }
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
      case 'SET_PASSWORD':
        return {
          ...state,
          password: action.payload,
        };
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  }
  
