import style from "./loginMenu.module.scss";
import routes from "@/src/utils/globalRoutes";
import images from "@/src/utils/globalImage";
import Link from "next/link";
import Image from "next/image";

interface Props {
  signState: boolean;
}
// 여기부터 시작
function LoginMenu({signState}: Props) {
  const loginMenuLink = signState ? routes.signOut : routes.signIn;
  const loginMenuText = signState ? ["회원이 아니신가요?", "회원 가입하기"] : ["이미 회원이신가요?", "로그인 하기"];
  return (
    <>
      <Image src={images.logo} alt="logo" width={211} height={38} priority={true} />
      <div>
        <q className={style.text}>{loginMenuText[0]}</q>
        <Link href={loginMenuLink} className={style.textLink}>
          {loginMenuText[1]}
        </Link>
      </div>
    </>
  );
}

export default LoginMenu;
