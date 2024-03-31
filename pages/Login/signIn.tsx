import style from "./Login.module.scss";
import SocialLogin from "../../src/components/pageComponent/login/socialLogin";
import LoginBox from "../../src/components/pageComponent/login/loginBox";

function SignIn() {
  return (
    <div className={style.login}>
      <div className={style.loginFrame}>
        <LoginBox />
        <SocialLogin>소셜 로그인</SocialLogin>
      </div>
    </div>
  );
}
export default SignIn;
