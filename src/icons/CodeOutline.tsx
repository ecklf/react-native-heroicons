import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const CodeOutline = ({ size = 24, ...props }: Props) => {
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
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </Svg>
  );
};

export default CodeOutline;
