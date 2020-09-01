import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const Cloud = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
    </Svg>
  );
};

export default Cloud;
