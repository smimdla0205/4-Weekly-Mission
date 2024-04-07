import style from "@/pages/login/login.module.scss";
import LoginSocial from "../../../src/components/pageComponent/login/loginSocial";
import LoginContainer from "../../../src/components/pageComponent/login/loginContainer";
import LoginMenu from "@/src/components/pageComponent/login/loginMenu";

function SignOut() {
  return (
    <div className={style.loginPage}>
      <section className={style.loginBox}>
        <header className={style.header}>
          <LoginMenu signState={false} />
        </header>
        <main className={style.main}>
          <LoginContainer signState={false} />
        </main>
        <aside className={style.aside}>
          <LoginSocial>소셜 로그인</LoginSocial>
        </aside>
      </section>
    </div>
  );
}
export default SignOut;
