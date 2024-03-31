import style from "./input.module.scss";
import {IconPassword} from "../../../../public/images/icon/icon";
import {InputHTMLAttributes, useState} from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  icon?: boolean;
}

function Input({type, icon, className = "", ...props}: Props) {
  const [inputType, setInputType] = useState(type);

  const passwordIconClick = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  return (
    <div className={style.inputFrame}>
      <input className={style.input} type={inputType} {...props} />
      {icon && <IconPassword type={inputType} onClick={passwordIconClick} />}
    </div>
  );
}
export default Input;
