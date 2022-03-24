import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const MenuAlt4Icon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <Path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
    </Svg>
  );
};

export default MenuAlt4Icon;
