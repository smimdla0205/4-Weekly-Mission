import ButtonCta from "../../common/buttonCta/buttonCta";
import Input from "../../common/input/input";
import style from "./loginBox.module.scss";
import TopMenuLogin from "./topMenuLogin";
import {ChangeEvent, FormEvent, useState} from "react";
import {createLoginToken} from "../../../data/data-global.jsx";
import Label from "../../common/input/label";
interface LoginValues {
  email: string;
  password: string;
}
function LoginBox() {
  const [loginValues, setLoginValue] = useState<LoginValues>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginValue((prevLoginValues) => ({
      ...prevLoginValues, // 이전 복사본을 불러온다
      [name]: value, // 복사본을 수정한다
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //const formData = new FormData();
    //formData.append("email", loginValues.email);
    //formData.append("password", loginValues.password);
    createLoginToken(loginValues);
  };
  return (
    <form method="post" className={style.loginBox} onSubmit={handleSubmit}>
      <TopMenuLogin />
      <div className={style.inputBox}>
        <Label htmlFor="email" text="이메일" />
        <Input
          id="email"
          name="email"
          type="text"
          value={loginValues.email}
          placeholder="아이디 입력"
          onChange={handleChange}
        />
        <Label htmlFor="password" text="비밀번호" />
        <Input
          id="password"
          name="password"
          type="password"
          value={loginValues.password}
          placeholder="비밀번호 입력"
          onChange={handleChange}
          icon={true}
        />
      </div>
      <ButtonCta type="submit" text="로그인" className={style.buttonCta} />
    </form>
  );
}
export default LoginBox;

/*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
};


       
*/
