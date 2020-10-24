import styled, { Box } from "@xstyled/styled-components";
import { Hstack, Text } from ".";

const Title = ({ children }) => (
  <Hstack space={0.6} alignItems="center">
    <Box width={30} height="1px" backgroundColor="gray" />
    <Text clone="smallP" color="gray">
      {children}
    </Text>
  </Hstack>
);

export default Title;
