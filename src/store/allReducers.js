import { combineReducers } from 'redux';
import { moviesReducer } from './Reducers';

export const allReducers = combineReducers({
	movies: moviesReducer,
});
const initialState = {
	email: '',
	password: '',
	isAuthenticated: false,
  };	

// const initialState = {
// 	email: '',
// 	password: '',
// 	isAuthenticated: false,
//   };
  
//   export default function userReducer(state = initialState, action) {
// 	switch (action.type) {
// 	  case 'SET_EMAIL':
// 		return {
// 		  ...state,
// 		  email: action.payload,
// 		};
// 	  case 'SET_PASSWORD':
// 		return {
// 		  ...state,
// 		  password: action.payload,
// 		};
// 	  case 'LOGIN':
// 		return {
// 		  ...state,
// 		  isAuthenticated: true,
// 		};
// 	  case 'LOGOUT':
// 		return {
// 		  ...state,
// 		  isAuthenticated: false,
// 		};
// 	  default:
// 		return state;
// 	}
//   }
  