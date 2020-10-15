import { css } from "styled-components";
import React from "react";


type StyleProps = {
  [key: string]: string | React.CSSProperties;
};

const breakpoints = (style: StyleProps) => {
  if (typeof style === "object") {
    return css`
      ${Object.keys(style).map((objKey, _) => {
        //  Wrapp breakpoints
        return css`
          @media only screen and (min-width: ${[objKey]}px) {
            ${style[objKey]}
          }
        `;
      })}
    `;
  }
  return style;
};
export default breakpoints;
