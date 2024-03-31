import Image from "next/image";
import eyeOffGray from "./eye-off-gray.svg";
import eyeOnGray from "./eye-on-gray.svg";
import {MouseEventHandler} from "react";
interface IconPasswordProps {
  type: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}
export function IconPassword({type, onClick}: IconPasswordProps) {
  return (
    <Image
      src={type === "password" ? eyeOffGray : eyeOnGray}
      alt="password Show"
      onClick={onClick}
      // onFocus={() => setIsFocused(true)}
      // onBlur={() => setIsFocused(false)}
    />
  );
}

//import eyeOnBlack from "./eye-on-black.svg";
//import eyeOffBlack from "./eye-off-black.svg";
/*
    const [isFocused, setIsFocused] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(eyeOffBlack);

  useEffect(() => {
    if (isFocused) {
      setEyeIcon(type === "password" ? eyeOnGray : eyeOffGray);
    } else {
      setEyeIcon(type === "password" ? eyeOnBlack : eyeOffBlack);
    }
  }, [isFocused, type]); 
     왜 안될까..?*/
