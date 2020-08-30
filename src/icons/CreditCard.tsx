import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const CreditCard = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" fill="#4A5568" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        fill="#4A5568"
      />
    </Svg>
  );
};

export default CreditCard;
