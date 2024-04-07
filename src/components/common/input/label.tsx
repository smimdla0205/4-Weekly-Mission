import {LabelHTMLAttributes, ReactNode} from "react";
import style from "./input.module.scss";
interface labelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}
function Label({htmlFor, children}: labelProps) {
  return (
    <label htmlFor={htmlFor} className={style.label}>
      {children}
    </label>
  );
}

export default Label;

// 웹접근성을 위해서는 label태그를 써야한다 (명시적 작성방식) -> 작업완료
