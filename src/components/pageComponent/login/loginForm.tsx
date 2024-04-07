import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {RootState} from "@/src/redux/index";

import style from "./LoginForm.module.scss";
import Input from "@/src/components/common/input/input";
import Label from "@/src/components/common/input/label";
import ButtonCta from "@/src/components/common/buttonCta/buttonCta";
import {saveLoginInfo} from "@/src/data/data-login";
import {loginContainerErrorMessage} from "@/src/utils/errorMessage";

interface values {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  signState: boolean;
  // signState true면 signIn false면 signOut
}

function LoginForm({signState}: Props) {
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
  }; // 인풋의 로그인값, 에러메세지의 초기값
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<values>(initialValue);
  const [loginValues, setLoginValue] = useState<values>(initialValue);
  const loginFailNum = useSelector((state: RootState) => state.login.fail);
  const ButtonCtaText = signState ? "로그인" : "회원가입";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setLoginValue((prevLoginValues) => ({
      ...prevLoginValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const {email, password} = loginValues;
    const loginData = {email, password};
    const emailData = {email};
    // 데이터 정제하는 값 이건 page에서 관리하는게 좋을까요? 아니면 saveLoginInfo 함수 내에서 처리하는게 좋을까요?
    e.preventDefault();
    if (signState && (await saveLoginInfo(loginData))) {
      router.replace("/folder");
    } else if (!signState) {
      // 미완입니다...
    }
  };

  useEffect(() => {
    if (loginFailNum > 0) {
      setLoginValue(initialValue);
      setErrorMessage(loginContainerErrorMessage(loginValues));
    } // 미완입니다..
    // 추가해야할것// loginFailNum signin페이지한테만 묶여있다.. 로그인 실패하고 회원가입 페이지로 들어갈수 있는데 그런상황때 오류가 발생할수도?
    // 로그인후 다시 folder 페이지 이동됬으나 로그인 페이지로 들어올수도 있어서 그거 막는 useEffect 설정
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
        error={errorMessage.email}
      />
      <Label htmlFor="password">비밀번호</Label>
      <Input
        id="password"
        name="password"
        type="password"
        value={loginValues.password}
        placeholder="비밀번호 입력"
        onChange={handleChange}
        error={errorMessage.password}
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
            error={errorMessage.confirmPassword}
          />
        </>
      )}
      <ButtonCta type="submit" className={style.buttonCta}>
        {ButtonCtaText}
      </ButtonCta>
    </form>
  );
}
export default LoginForm;
