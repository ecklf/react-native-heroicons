import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ReplyOutline = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
      />
    </Svg>
  );
};

export default ReplyOutline;
