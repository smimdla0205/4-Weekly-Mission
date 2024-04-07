import {postSignIn, postSignUp, postCheckEmail} from "./data-global";
import {loginFailuresCount, loginSuccessReset} from "@/src/redux/login/slice";
import {useDispatch} from "react-redux";

// api/sign-in post 한 데이터를 로컬로 저장하고 받아온 데이터에 따라 리덕스로 전역으로 데이터 처리
export async function saveLoginInfo(data) {
  const signIn = await postSignIn(data);
  const dispatch = useDispatch();
  if (signIn.data) {
    const {refreshToken, accessToken} = signIn.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    dispatch(loginSuccessReset()); // 성공시 0
    return true;
  } else {
    const loginFailed = signIn.error.status;
    localStorage.setItem("error", `response status is ${loginFailed}`);
    dispatch(loginFailuresCount()); // 실패시 +1
    return false;
  }
}
