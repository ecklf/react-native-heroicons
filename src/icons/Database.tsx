import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const Database = ({ size = 24, ...props }: Props) => {
  return (
    <Svg width={size} height={size} fill="none" {...props}>
      <Path
        d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"
        fill="#374151"
      />
      <Path
        d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"
        fill="#374151"
      />
      <Path
        d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"
        fill="#374151"
      />
    </Svg>
  );
};

export default Database;