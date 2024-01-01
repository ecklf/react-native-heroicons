import type { Options as TransformOptions } from "@svgr/babel-preset";
export type Template = TransformOptions["template"];

const template16: Template = (variables, { tpl }) => {
  return tpl`
    import * as React from "react";
    import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";

    interface Props extends SvgProps {
      size?: NumberProp;
    }

    const ${variables.componentName} = ({ size = 16, ...props }: Props) => {
      return (
        ${variables.jsx}
      )
    };
     
    ${variables.exports};
  `;
};

const template20: Template = (variables, { tpl }) => {
  return tpl`
    import * as React from "react";
    import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";

    interface Props extends SvgProps {
      size?: NumberProp;
    }

    const ${variables.componentName} = ({ size = 20, ...props }: Props) => {
      return (
        ${variables.jsx}
      )
    };
     
    ${variables.exports};
  `;
};

const template24: Template = (variables, { tpl }) => {
  return tpl`
    import * as React from "react";
    import Svg, { Path, SvgProps, NumberProp } from "react-native-svg";

    interface Props extends SvgProps {
      size?: NumberProp;
    }

    const ${variables.componentName} = ({ size = 24, ...props }: Props) => {
      return (
        ${variables.jsx}
      )
    };
     
    ${variables.exports};
  `;
};

export { template16, template20, template24 };
