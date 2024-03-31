import type {AppProps} from "next/app";
import "../styles/globals.scss";

// import localFont from "next/font/local";
// 페이지 디렉토리 내에 폰트 파일을 함께 둘 수 있다
// const myFont = localFont({src: "./index"});
function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
