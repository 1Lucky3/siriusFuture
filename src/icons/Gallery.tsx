import React from 'react';
import Svg,{Path} from "react-native-svg";

const Gallery: React.FC< { active: boolean } >  = ({ active }) => {
  const color = active ? "#A10D99" : "#949494"

  return (
    <Svg
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
    >
      <Path
        fill={color}
        d="M20.797 10.32c0-.602-.42-1.09-.938-1.09h-5.437c-.518 0-.938.488-.938 1.09 0 .604.42 1.092.938 1.092h5.437c.518 0 .938-.488.938-1.091zM14.422 13.595c-.518 0-.938.488-.938 1.09 0 .603.42 1.092.938 1.092h3.562c.518 0 .938-.489.938-1.091 0-.603-.42-1.091-.938-1.091h-3.562z"
      ></Path>
      <Path
        fill={color}
        d="M23.563 11.412c.517 0 .937-.488.937-1.091V4.865C24.5 2.458 22.818.5 20.75.5H4.25C2.182.5.5 2.458.5 4.865v10.912c0 2.407 1.682 4.365 3.75 4.365h7.313v2.176H8.28c-.518 0-.937.488-.937 1.09 0 .604.42 1.092.937 1.092h8.438c.517 0 .937-.488.937-1.091s-.42-1.091-.937-1.091h-3.282v-2.176h7.313c2.068 0 3.75-1.958 3.75-4.365 0-.603-.42-1.091-.938-1.091-.517 0-.937.488-.937 1.091 0 1.203-.841 2.182-1.875 2.182H4.25c-1.034 0-1.875-.979-1.875-2.182V4.865c0-1.204.841-2.183 1.875-2.183h16.5c1.034 0 1.875.98 1.875 2.183v5.456c0 .603.42 1.091.938 1.091z"
      ></Path>
      <Path
        fill={color}
        d="M10.578 9.23H5.141c-.518 0-.938.488-.938 1.09 0 .604.42 1.092.938 1.092h5.437c.518 0 .938-.488.938-1.091s-.42-1.091-.938-1.091zM19.86 4.865h-5.438c-.518 0-.938.488-.938 1.091s.42 1.091.938 1.091h5.437c.518 0 .938-.488.938-1.09 0-.604-.42-1.092-.938-1.092zM10.578 4.865H5.141c-.518 0-.938.488-.938 1.091s.42 1.091.938 1.091h5.437c.518 0 .938-.488.938-1.09 0-.604-.42-1.092-.938-1.092zM10.578 13.595H5.141c-.518 0-.938.488-.938 1.09 0 .603.42 1.092.938 1.092h5.437c.518 0 .938-.489.938-1.091 0-.603-.42-1.091-.938-1.091z"
      ></Path>
    </Svg>
  );
};

export default Gallery;