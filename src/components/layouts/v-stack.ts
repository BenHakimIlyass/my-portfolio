import styled, { css } from "@xstyled/styled-components";
import { breakpoints } from "@xstyled/system";

type StackAPI = {
  space: number | { xs?: number; md?: number; lg?: number; xl?: number };
  splitAfter?: number;
  acceptOne?: boolean;
};

const spaceToBreakpoints = (space: StackAPI["space"]) => {
  if (typeof space === "undefined") {
    return {};
  }
  if (typeof space === "number" || typeof space === "string") {
    return {
      xs: css`
        margin-top: ${space}rem !important;
      `,
    };
  }
  return Object.keys(space).reduce(
    (acc, key) => ({
      ...acc,
      [key]: css`
        margin-top: ${space[key]}rem !important;
      `,
    }),
    {},
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const spaceGenerator = ({ space }: StackAPI) => css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * + * {
    ${breakpoints(spaceToBreakpoints(space))}
  }
`;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const acceptOneChild = ({ acceptOne, space }: StackAPI) => css`
  & > * {
    ${acceptOne ? breakpoints(spaceToBreakpoints(space)) : ""}
  }
`;
const splitHandler = ({ splitAfter }: StackAPI): any =>
  splitAfter &&
  css`
    &:only-child {
      height: 100%;
    }
    & > :nth-child(${splitAfter}) {
      margin-bottom: auto;
    }
  `;

const Vstack = styled.divBox<StackAPI>`
  position: relative;
  ${spaceGenerator}
  ${splitHandler}
  ${acceptOneChild}
`;

export default Vstack;
