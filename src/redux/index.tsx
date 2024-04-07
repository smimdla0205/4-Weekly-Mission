// store.ts
import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./login/slice"; //loginSlice.reducer가 실제 loginReducer 역할

const store = configureStore({
  reducer: {
    login: loginReducer, // `login`은 상태 트리 내에서 이 리듀서의 결과를 저장하는 키입니다.
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

/*
ReturnType<T> 유틸리티 타입
ReturnType<T>는 함수 타입 T의 반환 타입을 추론하는 TypeScript의 유틸리티 타입입니다.
이를 사용하여 함수의 반환 값의 타입을 추출할 수 있습니다.
*/
