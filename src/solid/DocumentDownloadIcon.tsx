import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const DocumentDownloadIcon = ({ size = 24, ...props }: Props) => {
  return (
    <Svg
      fill="currentColor"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      {...props}
    >
      <Path
        fillRule="evenodd"
        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default DocumentDownloadIcon;
