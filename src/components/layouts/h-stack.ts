/* eslint-disable @typescript-eslint/no-explicit-any */
import * as CSS from "csstype";
import styled, { css } from "styled-components";
import { breakpoints } from "@xstyled/system";

type Breakpoints = {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
};

type Props = {
  style?: CSS.Properties;
  space: string & Breakpoints;
} & Pick<CSS.Properties, "justifyContent" | "alignItems">;

// support additional style
const handleAlignement = ({ justifyContent, alignItems, style }: Partial<Props>): any =>
  css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent,
    alignItems,
    ...style,
  });

//handle string case
const unit = (space) => (typeof space === "number" ? `${space}rem` : space);
//margins functions

//breakpoints sipporting function
const spaceToBreakpoints = (space: Props["space"], important?: boolean) => {
  if (typeof space === "number" || typeof space === "string") {
    return {
      xs: css`
        margin: calc(${unit(space)} / 2 * -1);
        & > * {
          margin: calc(${unit(space)} / 2) ${!!important && `!important`};
        }
      `,
    };
  } else if (typeof space === "object") {
    return Object.keys(space).reduce(
      (acc, key) => ({
        ...acc,
        [key]: css`
          margin: calc(${unit(space)} / 2 * -1);
          & > * {
            margin: calc(${unit(space)} / 2) ${!!important && `!important`};
          }
        `,
      }),
      {},
    );
  } else return {};
};

const Cluster = styled.div<Props>`
  ${({ space, important }) => breakpoints(spaceToBreakpoints(space, important))}
  ${handleAlignement};
`;

export default Cluster;
