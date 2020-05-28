import * as React from "react";
import Svg, { Path, SvgProps, Rect } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ShoppingBag = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <Path
        stroke="#374151"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 8h10l1 9H4l1-9z"
      />
      <Path
        stroke="#374151"
        strokeWidth={2}
        d="M7 6a3 3 0 013-3v0a3 3 0 013 3v3a3 3 0 01-3 3v0a3 3 0 01-3-3V6z"
      />
      <Rect width={2} height={2} x={6} y={9} rx={1} />
      <Rect width={2} height={2} x={12} y={9} rx={1} />
    </Svg>
  );
};

export default ShoppingBag;
