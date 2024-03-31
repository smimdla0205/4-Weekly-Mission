import style from "./SocialLogin.module.scss";
//import google from "../../../../public/images/google.svg";
import kakao from "../../../../public/images/kakao.svg";
import Image from "next/image";
import {ReactNode} from "react";
interface Props {
  children: ReactNode;
}

function SocialLogin({children}: Props) {
  return (
    <div className={style.SocialLoginFrame}>
      <div className={style.ContentFrame}>
        <div className={style.text}>{children}</div>
        <div className={style.image}>
          <Image src={kakao} alt="google Sign up login" width={42} height={42} />
          <Image src={kakao} alt="kakao Sign up login" width={42} height={42} />
        </div>
      </div>
    </div>
  );
}
export default SocialLogin;
