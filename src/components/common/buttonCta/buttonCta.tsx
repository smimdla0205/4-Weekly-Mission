import {ButtonHTMLAttributes, ReactNode} from "react";
import style from "./buttonCta.module.scss";
interface Props extends ButtonHTMLAttributes<HTMLInputElement> {
  text: string;
}

function ButtonCta({className = "", text, type}: Props) {
  const classnames = `${style.cta} ${className}`;
  return (
    <button className={classnames} type={type}>
      {text}
    </button>
  );
}
export default ButtonCta;

// width padding fontSize 인라인으로 다룰필요 없다
// width padding fontSize -> className으로 상황에따라 css적용하기
