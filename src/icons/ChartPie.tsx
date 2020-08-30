import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const ChartPie = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" fill="#4A5568" />
      <Path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" fill="#4A5568" />
    </Svg>
  );
};

export default ChartPie;
