import style from "./input.module.scss";
import images from "@/src/utils/globalImage";
import {InputHTMLAttributes, useEffect, useState} from "react";
import {inputErrorMessage} from "../../../utils/errorMessage";
import Image from "next/image";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  value: string;
  error?: string;
}

function Input({name, type, value, error, className = "", ...props}: Props) {
  const [inputType, setInputType] = useState(type);
  const [errorMessage, setErrorMessage] = useState(error);
  const passwordImg = type === "password" ? images.eyeOnGray : images.eyeOffGray;
  const passwordImageClick = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const HandleBlurError = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputTarget = e.target;
    setErrorMessage(inputErrorMessage(inputTarget));
  };
  return (
    <div className={style.inputBox}>
      <div className={style.inputFrame}>
        <input name={name} type={inputType} className={style.input} onBlur={HandleBlurError} {...props} />
        {type === "password" && <Image src={passwordImg} alt="password Show" onClick={passwordImageClick} priority />}
      </div>
      {errorMessage && <span className={style.errorMessage}>{errorMessage}</span>}
    </div>
  );
}

export default Input;
