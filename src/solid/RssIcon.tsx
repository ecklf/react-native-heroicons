import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const RssIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
      <Path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zm-1 6a2 2 0 114 0 2 2 0 01-4 0z" />
    </Svg>
  );
};

export default RssIcon;
