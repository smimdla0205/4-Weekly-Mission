export const LOGIN_FAILURES_COUNT = "INCREMENT_LOGIN_FAILURES";
export const LOGIN_SUCCESS_RESET = "LOGIN_SUCCESS_RESET";

interface LoginFailuresCountAction {
  type: typeof LOGIN_FAILURES_COUNT;
}

interface LoginSuccessResetAction {
  type: typeof LOGIN_SUCCESS_RESET;
}

export type Action = LoginFailuresCountAction | LoginSuccessResetAction;

export const loginFailuresCount = (): LoginFailuresCountAction => ({
  type: LOGIN_FAILURES_COUNT,
});
export const loginSuccessReset = (): LoginSuccessResetAction => ({
  type: LOGIN_SUCCESS_RESET,
});
