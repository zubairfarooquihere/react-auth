import { createSlice } from '@reduxjs/toolkit';

const userLoginSlice = createSlice({
  name: 'userLogin',
  initialState: {uid: null, login: false, email: null},
  reducers: {
    login(state, action) {
      state.uid = action.payload.uid;
      state.login = true;
      state.email = action.payload.email;
    },
    logout(state) {
        state.uid = null;
        state.login = false;
        state.email = null;
      },
  },
});

export const userLoginActions = userLoginSlice.actions;

export default userLoginSlice;