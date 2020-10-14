import React from "react";
import styled from "@xstyled/styled-components";
import { useColorModeWrapper } from "@hooks";

const CodeSandboxButton = ({ href }: { href: string }) => {
  const handleColor = useColorModeWrapper();
  return (
    <A href={href} target="_blanc" handleColor={handleColor}>
      <img
        src="/icons/codesandbox.svg"
        draggable={false}
        style={{
          alignSelf: "flex-start",
        }}
      />
    </A>
  );
};
const A = styled.a`
  max-width: 201px;
  will-change: transform;
  height: fit-content;
  img {
    will-change: transform;
    transition: 0.4s;
    width: 100%;
  }
  &:hover img {
    box-shadow: ${({ handleColor }) =>
      handleColor(`0px 0px 20px rgba(0, 0, 0, 0.2)`, `0px 0px 20px rgba(255, 255, 255, 0.2)`)};
    transform: translate3d(0, -6px, 0);
  }
`;
export default CodeSandboxButton;
