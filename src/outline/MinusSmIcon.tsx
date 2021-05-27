import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const MinusSmIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </Svg>
  );
};

export default MinusSmIcon;
