import React from "react";
import styled from "@xstyled/styled-components";
import { Text } from "@components";
const CodeWrapper = ({ children }) => {
  return (
    <Ide>
      <Text clone="h5">{children}</Text>
    </Ide>
  );
};
const Ide = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  background-color: gray;
`;
export default CodeWrapper;
