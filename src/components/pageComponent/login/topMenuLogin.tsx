import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import Link from "next/link";
import style from "./topMenuLogin.module.scss";

function TopMenuLogin() {
  return (
    <div className={style.topMenuLoginFrame}>
      <Image src={logo} alt="logo" width={211} height={38} />
      <div>
        <q className={style.text}>회원이 아니신가요? </q>
        <Link href="www.naver.com" className={style.textLink}>
          회원 가입하기
        </Link>
      </div>
    </div>
  );
}

export default TopMenuLogin;
