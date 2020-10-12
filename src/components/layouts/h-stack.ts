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
const handleMargins = (space) => css`
  margin: calc(${space} / 2 * -1);
  & > * {
    margin: calc(${space} / 2) !important;
  }
`;
//breakpoints sipporting function
const spaceToBreakpoints = (space: Props["space"]) => {
  if (typeof space === "number" || typeof space === "string") {
    return {
      xs: handleMargins(unit(space)),
    };
  } else if (typeof space === "object") {
    return Object.keys(space).reduce(
      (acc, key) => ({
        ...acc,
        [key]: handleMargins(unit(space[key])),
      }),
      {},
    );
  } else return {};
};

const Cluster = styled.div<Props>`
  ${({ space }) => breakpoints(spaceToBreakpoints(space))}
  ${handleAlignement};
`;

export default Cluster;
