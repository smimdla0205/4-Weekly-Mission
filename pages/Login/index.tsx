import Input from "@/src/components/common/input/input";
import {ChangeEvent, useState} from "react";
import style from "./test.module.scss";
import SocialLogin from "../../src/components/pageComponent/login/socialLogin";
import TopMenuLogin from "@/src/components/pageComponent/login/topMenuLogin";

function LoginPage() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return <div className={style.test}></div>;
}

export default LoginPage;
