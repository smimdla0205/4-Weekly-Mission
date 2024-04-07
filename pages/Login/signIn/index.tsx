import style from "@/pages/login/login.module.scss";
import SocialSign from "@/src/components/pageComponent/login/socialSign";
import LoginForm from "@/src/components/pageComponent/login/loginForm";
import LoginMenu from "@/src/components/pageComponent/login/loginMenu";
function SignIn() {
  return (
    <div className={style.loginPage}>
      <section className={style.loginBox}>
        <header className={style.header}>
          <LoginMenu signState={true} />
        </header>
        <main className={style.main}>
          <LoginForm signState={true} />
        </main>
        <aside className={style.aside}>
          <SocialSign>소셜 로그인</SocialSign>
        </aside>
      </section>
    </div>
  );
}
export default SignIn;
