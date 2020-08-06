import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
}

const CubeOutline = ({ size = 24, ...props }: Props) => {
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
        fill="#374151"
        d="M12 3l.447-.894a1 1 0 00-.894 0L12 3zm8 4h1a1 1 0 00-.553-.894L20 7zM4 7l-.447-.894A1 1 0 003 7h1zm16 10l.447.894A1 1 0 0021 17h-1zm-8 4l-.447.894a1 1 0 00.894 0L12 21zm-8-4H3a1 1 0 00.553.894L4 17zm7.553-13.106l8 4 .894-1.788-8-4-.894 1.788zm8 2.212l-8 4 .894 1.788 8-4-.894-1.788zm-7.106 4l-8-4-.894 1.788 8 4 .894-1.788zm-8-2.212l8-4-.894-1.788-8 4 .894 1.788zm15.106 8.212l-8 4 .894 1.788 8-4-.894-1.788zm-7.106 4l-8-4-.894 1.788 8 4 .894-1.788zM5 17V7H3v10h2zm16 0V7h-2v10h2zm-10-6v10h2V11h-2z"
      />
    </Svg>
  );
};

export default CubeOutline;
