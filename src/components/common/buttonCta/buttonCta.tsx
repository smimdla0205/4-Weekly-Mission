import {ButtonHTMLAttributes, ReactNode} from "react";
import style from "./buttonCta.module.scss";
interface Props extends ButtonHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  page?: string | undefined;
}

function ButtonCta({className = "", children, type, page}: Props) {
  const classnames = `${style.cta} ${className}`;
  let ButtonCtaText;
  /*if ((page = "signIn")) {
    ButtonCtaText = "로그인";
  } else if ((page = "signOut")) {
    ButtonCtaText = "회원가입";
  } else {
    ButtonCtaText = children;
  }*/
  return (
    <button className={classnames} type={type}>
      {children}
    </button>
  );
}
export default ButtonCta;

// width padding fontSize 인라인으로 다룰필요 없다
// width padding fontSize -> className으로 상황에따라 css적용하기
