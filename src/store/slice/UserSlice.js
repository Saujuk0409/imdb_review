import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logout: (state) => {
      return {};
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUser, removeUser } = actions;
export default reducer;
