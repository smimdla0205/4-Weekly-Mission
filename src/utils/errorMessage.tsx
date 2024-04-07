import {useSelector} from "react-redux";
import {RootState} from "@/src/redux/index";

export function inputErrorMessage(e: HTMLInputElement): string {
  const inputName = e.name;
  const inputValue = e.value;
  const regexEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let errorMessage: string;
  if (inputName === "email" && !inputValue.trim()) {
    errorMessage = "이메일을 입력해 주세요";
  } else if (inputName === "email" && !regexEmail.test(inputValue)) {
    errorMessage = "올바른 이메일 주소가 아닙니다";
  } else if (inputName === "password" && !inputValue.trim()) {
    errorMessage = "비밀번호를 입력해 주세요";
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
/*
제가 왜.. 에러메세지를 utils 로뺐을까요 ㅠㅠ 여기에 쏟은 시간이...(멘붕 1)
*/
