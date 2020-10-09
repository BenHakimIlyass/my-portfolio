import { css } from "styled-components";
import React from "react";
interface Metadata {
  key: string;
  value: React.CSSProperties;
}
interface MetadataObj {
  [key: string]: Metadata;
}
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
            ${typeof style[objKey] === "string"
              ? css`
                  ${style[objKey]}
                `
              : css(style[objKey])}
          }
        `;
      })}
    `;
  }
  return style;
};
export default breakpoints;
