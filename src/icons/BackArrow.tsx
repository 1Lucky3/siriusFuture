import React from "react";
import Svg, {Path} from "react-native-svg";

const BackArrow:React.FC = () => {

  return (
    <Svg
      width="22"
      height="18"
      fill="none"
      viewBox="0 0 22 18"
    >
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 9H1m0 0l7.87 8M1 9l7.87-8"
      ></Path>
    </Svg>
  );
}

export default BackArrow;