import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ArrowCircleLeft = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ArrowCircleLeft;
