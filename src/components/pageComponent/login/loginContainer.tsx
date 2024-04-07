import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";

import {useRouter} from "next/router";
import style from "./loginContainer.module.scss";
import Input from "../../common/input/input";
import Label from "../../common/input/label";

import ButtonCta from "../../common/buttonCta/buttonCta";
import {saveLoginInfo} from "../../../data/data-login";
import {loginContainerErrorMessage} from "@/src/utils/errorMessage";

import {useSelector, useDispatch} from "react-redux";
import {loginFailuresCount, loginSuccessReset} from "@/src/redux/login/slice";
import {RootState} from "@/src/redux/index";

interface values {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  signState: boolean;
}

function LoginContainer({signState}: Props) {
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const router = useRouter();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState<values>(initialValue);
  const [loginValues, setLoginValue] = useState<values>(initialValue);
  const loginFailNum = useSelector((state: RootState) => state.login.fail);
  const ButtonCtaText = signState ? "로그인" : "회원가입";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginValue((prevLoginValues) => ({
      ...prevLoginValues, // 이전 복사본을 불러온다
      [name]: value, // 복사본을 수정한다
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const {email, password} = loginValues;
    const loginData = {email, password};
    //const inputEmail= e.currentTarget.elements.namedItem("email")
    e.preventDefault();

    const isLoggedIn = await saveLoginInfo(loginData);
    if (isLoggedIn) {
      router.replace("/folder");
      dispatch(loginSuccessReset());
    } else {
      dispatch(loginFailuresCount());
    }
  };

  useEffect(() => {
    if (loginFailNum > 0) {
      setLoginValue(initialValue);
      setErrorMessage(loginContainerErrorMessage(loginValues));
    }
  }, [loginFailNum]);
  return (
    <form method="post" className={style.loginContainer} onSubmit={handleSubmit}>
      <Label htmlFor="email">이메일</Label>
      <Input
        id="email"
        name="email"
        type="text"
        value={loginValues.email}
        placeholder="아이디 입력"
        onChange={handleChange}
      />
      <Label htmlFor="password">비밀번호</Label>
      <Input
        id="password"
        name="password"
        type="password"
        value={loginValues.password}
        placeholder="비밀번호 입력"
        onChange={handleChange}
      />
      {signState || (
        <>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={loginValues.confirmPassword}
            placeholder="비밀번호 확인"
            onChange={handleChange}
          />
        </>
      )}
      <ButtonCta type="submit" className={style.buttonCta}>
        {ButtonCtaText}
      </ButtonCta>
    </form>
  );
}
export default LoginContainer;

/*
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
  setEmail(e.target.value);
};

const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  setPassword(e.target.value);
};


{
  "email": “test@codeit.com",
  "password": "sprint101"
}

*/
