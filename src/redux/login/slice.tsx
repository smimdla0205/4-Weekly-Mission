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

// 리덕스 적용하다가 type지정이 안돼서 리덕스 툴킷을 알게되고 또 공부... 시간도.. 하하하 (멘붕 2) 정상작동하지는 확인 안해봤어요..
