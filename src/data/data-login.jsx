import {postSignIn} from "./data-global";

export async function saveLoginInfo(data) {
  const signIn = await postSignIn(data);
  if (signIn.data) {
    const {refreshToken, accessToken} = signIn.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return true;
  } else {
    const loginFailed = signIn.error.status;
    localStorage.setItem("error", `response status is ${loginFailed}`);
    return false;
  }
}
