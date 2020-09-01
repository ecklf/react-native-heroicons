import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ArrowsExpand = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      viewBox="0 0 19 20"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path
        stroke="#374151"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"
      />
    </Svg>
  );
};

export default ArrowsExpand;
