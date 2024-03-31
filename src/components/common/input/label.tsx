import {LabelHTMLAttributes} from "react";
import style from "./input.module.scss";
interface labelProps extends LabelHTMLAttributes<HTMLInputElement> {
  text: string;
}
function Label({htmlFor, text}: labelProps) {
  return (
    <label htmlFor={htmlFor} className={style.label}>
      {text}
    </label>
  );
}

export default Label;

// 웹접근성을 위해서는 label태그를 써야한다 (명시적 작성방식) -> 작업완료
