import React from "react";
import { useColorModeWrapper } from "@hooks";
import { shDef, shDark } from "../globalStyles";
import styled, { breakpoints, css } from "@xstyled/styled-components";
import { Text } from "@components";

const inset = `inset 0px 0px 7px rgba(0, 0, 0, 0.03)`;
const Code = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const handleColor = useColorModeWrapper();
  return (
    <CodeWrapper clone="code" style={{ boxShadow: handleColor(`${shDef}, ${inset}`, `${shDark} , ${inset}`) }}>
      {children}
    </CodeWrapper>
  );
};
const CodeWrapper = styled(Text)`
  background-color: lightGray;
  color: tomato !important;
  border-radius: 4px;
  width: fit-content;
  ${breakpoints({
    xs: css`
      padding: 6px;
    `,
    md: css`
      padding: 8px;
    `,
  })}
`;
export default Code;
