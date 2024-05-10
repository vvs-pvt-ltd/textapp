// userSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../intialStates/userState";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    Userlogin: (state, action) => {
      const data = action.payload.data;
      state.access_token = data.access_token;
      state.refresh_token = data.refresh_token;
      state.authenticated = true;
      state.ride_id = data.ride_id ?? null;
      // state.authenticated = data.token ? true : false;
      // state.refresh_token = data.refresh_token ?? null;
      // state.first_name = data.first_name ?? '';
      // state.last_name = data.last_name ?? '';
      // state.email = data.email ?? '';
      // state.phone = data.phone ?? null;
      // state.student_id = data.student_id ?? null;
      // state.grade = data.grade ?? '';
      // state.is_admin = data.is_admin ?? false;
      // state.parent_id = data.parent_id ?? null;
      // state.address = data.address ?? '';
      // state.stop_name = data.stop_name ?? '';
    },
    userLogout: (state, action) => {
      state.access_token = null;
      state.refresh_token = null;
      state.authenticated = false;
      state.ride_id = null;
      // state.refresh_token = null;
      // state.first_name = '';
      // state.last_name = '';
      // state.email = '';
      // state.phone = null;
      // state.student_id = null;
      // state.grade = '';
      // state.is_admin = false;
      // state.parent_id = null;
      // state.address = '';
      // state.stop_name = '';
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
