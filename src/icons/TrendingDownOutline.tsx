import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const TrendingDownOutline = ({ size = 24, ...props }: Props) => {
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
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </Svg>
  );
};

export default TrendingDownOutline;
