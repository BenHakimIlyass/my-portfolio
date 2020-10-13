import React from "react";
import styled, { useColorMode } from "@xstyled/styled-components";

const CodeSandboxButton = ({ href }: { href: string }) => {
  const [mode] = useColorMode();
  return (
    <A href={href} target="_blanc" mode={mode}>
      <img src="/icons/codesandbox.svg" draggable={false} style={{ alignSelf: "flex-start" }} />
    </A>
  );
};
const A = styled.a`
  max-width: 201px;
  will-change: transform;
  img {
    will-change: transform;
    transition: 0.4s;
  }
  &:hover {
    transform: translate3d(0, -6px, 0);
    img {
      box-shadow: ${({ mode }) =>
        mode === "dark" ? `0px 0px 20px rgba(255, 255, 255, 0.2)` : `0px 0px 20px rgba(0, 0, 0, 0.2)`};
    }
  }
`;
export default CodeSandboxButton;
