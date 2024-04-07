import style from "@/pages/login/login.module.scss";
import SocialSign from "@/src/components/pageComponent/login/socialSign";
import LoginForm from "@/src/components/pageComponent/login/loginForm";
import LoginMenu from "@/src/components/pageComponent/login/loginMenu";

function SignOut() {
  return (
    <div className={style.loginPage}>
      <section className={style.loginBox}>
        <header className={style.header}>
          <LoginMenu signState={false} />
        </header>
        <main className={style.main}>
          <LoginForm signState={false} />
        </main>
        <aside className={style.aside}>
          <SocialSign>다른 방식으로 가입하기</SocialSign>
        </aside>
      </section>
    </div>
  );
}
export default SignOut;
