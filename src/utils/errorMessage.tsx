import {useSelector} from "react-redux";
import {RootState} from "@/src/redux/index";

export function inputErrorMessage(e: HTMLInputElement): string {
  const inputName = e.name;
  const inputValue = e.value;
  const loginFail = localStorage.getItem("error");
  const regexEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let errorMessage: string;
  if (inputName === "email" && !inputValue.trim()) {
    errorMessage = loginFail ? "이메일을 확인해 주세요" : "이메일을 입력해 주세요";
  } else if (inputName === "email" && !regexEmail.test(inputValue)) {
    errorMessage = "올바른 이메일 주소가 아닙니다";
  } else if (inputName === "password" && !inputValue.trim()) {
    errorMessage = loginFail ? "비밀번호를 확인해 주세요" : "비밀번호를 입력해 주세요";
  } else if (inputName === "password" && !regexPassword.test(inputValue)) {
    errorMessage = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
  } else {
    errorMessage = "";
  }
  return errorMessage;
}

interface values {
  email: string;
  password: string;
  confirmPassword: string;
}

export function loginContainerErrorMessage(values: values): values {
  const initialValue = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const loginFailNum = useSelector((state: RootState) => state.login.fail);
  const loginValues = values;
  let errorValues = initialValue;

  if (loginValues.password !== loginValues.confirmPassword) {
    errorValues.password = "비밀번호가 일치하지 않아요";
    errorValues.confirmPassword = "비밀번호가 일치하지 않아요";
  } else if (loginValues === initialValue && loginFailNum > 0) {
    errorValues.email = "이메일을 확인해 주세요";
    errorValues.password = "비밀번호를 확인해 주세요";
  } else {
    errorValues = initialValue;
  }
  return errorValues;
}
// 비밀번호 input과 비밀번호 확인 input의 값이 다른 경우: "비밀번호가 일치하지 않아요."
// 로그인 실패하는 경우, 이메일 input 아래에: "이메일을 확인해 주세요."
// 로그인 실패하는 경우, 비밀번호 input 아래에: "비밀번호를 확인해 주세요."
/*

이메일 input에서 focus out 할 때, 값이 없을 경우: "이메일을 입력해 주세요."
이메일 input에서 focus out 할 때, 이메일 형식에 맞지 않는 값이 있는 경우: "올바른 이메일 주소가 아닙니다."


비밀번호 input에서 focus out 할 때, 값이 없을 경우 (로그인 페이지): "비밀번호를 입력해 주세요."


비밀번호 input에서 focus out 할 때, 값이 8자 미만으로 있거나 문자열만 있거나 숫자만 있는 경우: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."


*/
