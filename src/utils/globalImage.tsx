import logo from "@/public/images/logo.svg";
import kakao from "@/public/images/kakao.svg";
import eyeOnGray from "@/public/images/icon/eye-on-gray.svg";
import eyeOffGray from "@/public/images/icon/eye-off-gray.svg";
import eyeOnBlack from "@/public/images/icon/eye-on-black.svg";
import eydOffBlack from "@/public/images/icon/eye-off-black.svg";

interface ImageType {
  logo: string;
  kakao: string;
  eyeOnGray: string;
  eyeOffGray: string;
  eyeOnBlack: string;
  eydOffBlack: string;
  // [key: string]: string; 이렇게 설정하면 타입이 지정이 안되더라고요? 그래서 d.ts까지 갔던거인데 현 방법보다 효과적으로 관리하는법 뭐가 있을까요?
}

const images: ImageType = {
  logo: logo,
  kakao: kakao,
  eyeOnGray: eyeOnGray,
  eyeOffGray: eyeOffGray,
  eyeOnBlack: eyeOnBlack,
  eydOffBlack: eydOffBlack,
};

export default images;

// 계속 추가할예정
