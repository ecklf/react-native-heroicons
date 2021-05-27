import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const FolderDownloadIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 9v4m0 0l-2-2m2 2l2-2"
      />
    </Svg>
  );
};

export default FolderDownloadIcon;
