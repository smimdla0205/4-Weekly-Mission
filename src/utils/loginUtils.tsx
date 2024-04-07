export function authLoginf(): boolean {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const error = localStorage.getItem("error");

  return error !== null ? false : true;
} // 로그인 성공이면 true 실패면 false
