import {LOGIN_FAILURES_COUNT, LOGIN_SUCCESS_RESET, Action} from "./action";

export interface LoginState {
  loginFailures: number;
}

const initialValue: LoginState = {
  loginFailures: 0,
};

const loginReducer = (state: LoginState = initialValue, action: Action): LoginState => {
  switch (action.type) {
    case LOGIN_FAILURES_COUNT:
      return {
        ...state,
        loginFailures: state.loginFailures + 1,
      };
    case LOGIN_SUCCESS_RESET:
      return {
        ...state,
        loginFailures: 0,
      };
    default:
      return state;
  }
};

export default loginReducer;
