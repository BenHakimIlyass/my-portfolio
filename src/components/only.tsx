import styled, { css } from "@xstyled/styled-components";
import { breakpoints } from "@xstyled/system";
import React from "react";

// xs to lg
const hidden = css`
  display: none;
`;
const shown = css`
  display: block;
`;
const Controller = ({ from, to }) => {
  if (from !== "xs") {
    return breakpoints({
      xs: hidden,
      [from]: shown,
      [to]: hidden,
    });
  }
  return breakpoints({
    [from]: shown,
    [to]: hidden,
  });
};

type Props = {
  from?: "xs" | "sm" | "md" | "lg" | "xl";
  to?: "xs" | "sm" | "md" | "lg" | "xl";
  style?: any;
  [key: string]: any;
};
const Only: React.FC<Props> = ({ from = "xs", to, style, children, ...props }) => (
  <Wrapper from={from} to={to} style={style} {...props}>
    {children}
  </Wrapper>
);
const Wrapper = styled.divBox`
  ${(props) => Controller(props)}
`;

export default Only;
