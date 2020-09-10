import * as React from "react";
import styled, { css } from "styled-components";

type StackAPI = {
  space: number;
  style?: React.CSSProperties;
};
const handleStyleProp = ({ style }: Pick<StackAPI, "style">) => css({ style });
const spaceGenerator = ({ space }: Pick<StackAPI, "space">) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * + * {
    margin-top: ${space}rem !important;
  }
`;

const handleBreakpoints = ({ space }: StackAPI) => {
  if (typeof space === "object") {
    return css`
      ${Object.keys(space).map((objKey, _) => {
        //  Wrapp breakpoints
        return css`
          @media only screen and (min-width: ${[objKey]}px) {
            ${spaceGenerator({ space: space[objKey] })}
          }
        `;
      })}
    `;
  }
  return spaceGenerator({ space: space });
};

const VStack = styled.div<StackAPI>`
  ${handleBreakpoints}
  ${handleStyleProp}
`;

export default VStack;
