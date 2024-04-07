import style from "./loginSocial.module.scss";
import images from "@/src/utils/globalImage";
import Image from "next/image";
import {ReactNode} from "react";
interface Props {
  children: ReactNode;
}
function LoginSocial({children}: Props) {
  return (
    <div className={style.contentFrame}>
      <div className={style.text}>{children}</div>
      <div className={style.image}>
        <Image src={images.kakao} alt="google Sign up login" width={42} height={42} priority />
        <Image src={images.kakao} alt="kakao Sign up login" width={42} height={42} priority />
      </div>
    </div>
  );
}
export default LoginSocial;
