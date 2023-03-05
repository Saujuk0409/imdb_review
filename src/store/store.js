import create from 'zustand';
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice/UserSlice";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
});

// export const useAuthStore = create((set) => ({
//     auth : {
//         username : '',
//         active : false
//     },
//     setUsername : (name) => set((state) => ({ auth : { ...state.auth, username : name }})) 
// }))
// export const store = configureStore({
//     reducer: {
//       user: userReducer,
//     },
//   });

  // store.js

// import { createStore } from 'redux';
// import userReducer from './userReducer';

// const store = createStore(userReducer);

// export default store;
