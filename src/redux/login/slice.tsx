// features/login/loginSlice.ts
import {createSlice} from "@reduxjs/toolkit";

export interface LoginState {
  fail: number;
}

const initialState: LoginState = {
  fail: 0,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginFailuresCount(state) {
      state.fail += 1;
    },
    loginSuccessReset(state) {
      state.fail = 0;
    },
  },
});

export const {loginFailuresCount, loginSuccessReset} = loginSlice.actions;
export default loginSlice.reducer;
