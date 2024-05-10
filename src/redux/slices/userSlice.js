// userSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../intialStates/userState";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log("userSlice", state.user);
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
