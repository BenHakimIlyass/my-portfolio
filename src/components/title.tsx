import styled, { Box } from "@xstyled/styled-components";
import { P, Hstack, SmallP } from ".";

const Title = ({ children }) => (
  <Hstack space={0.6} alignItems="center">
    <Box width={30} height="1px" backgroundColor="gray" />
    <Paragraph>{children}</Paragraph>
  </Hstack>
);

const Paragraph = styled.p`
  color: gray;
  ${SmallP}
`;
export default Title;
