export function authLoginf(): boolean {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const error = localStorage.getItem("error");

  return error !== null ? false : true;
}
// 로그인 성공이면 true 실패면 false

// 여기서 간과한점 로그인 성공 실패만 생각했는데.. 로그인 시도 한번도 안한 상황은 고려를 안했다... (멘붕3)
