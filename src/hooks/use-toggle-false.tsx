// 뭔가 별로네요.. ㅎㅎ
import {useState} from "react";
interface toggleValues {
  initialText: string; // key값이 string이 아닐수 있으니깐 boolean이 나오는
  boolValue: boolean;
}

type useToggleReturn = [toggleValues, () => toggleValues];
// 네이밍 뭘로할까요..?
function useToggleValues(initial: [string, string]): useToggleReturn {
  const [toggle, setToggle] = useState<boolean>(true);

  const toggleValue = {
    initialText: toggle ? initial[0] : initial[1],
    boolValue: toggle,
  };

  const onToggleState = (): toggleValues => {
    setToggle(!toggle);
    return toggleValue;
  };
  /*
  const onToggleState = (): void => {
    setToggle((prevToggle) => !prevToggle);
  };
  위 아래 같다고 볼수 있나요..?
 const toggleState = {
    comparison: toggle! ? initial[0] : initial[1],
    value: toggle!,
  }
  이렇게 변할꺼 같은데 헷갈리네요*/

  return [toggleValue, onToggleState];
}

export default useToggleValues;

//
