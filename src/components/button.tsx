import styled, { useColorMode, css, breakpoints } from "@xstyled/styled-components";
import { Text } from ".";
const wrapShadow = ({ mode }) =>
  mode === "dark"
    ? `0px 1px 3px rgba(255, 255, 255, 0.12), 0px 1px 2px rgba(255, 255, 255, 0.24)`
    : `0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)`;

const wrapShadowOnHover = ({ mode }) =>
  mode === "dark" ? `0px 0px 40px rgba(255, 255, 255, 0.2)` : `0px 0px 40px rgba(0, 0, 0, 0.2)`;

const Thumbnail = styled.button`
  background-color: secondary;
  height: 42px;
  width: fit-content;
  padding: 0 32px;
  font-weight: 500;
  border-radius: 4px;
  box-shadow: ${wrapShadow};
  transition: all 0.4s;
  line-height: 42px !important;
  &:hover {
    box-shadow: ${wrapShadowOnHover};
    transform: translate3d(0, -4px, 0);
  }
  &:focus {
    outline: none;
    text-align: center;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      height: inherit;
      left: 6px;
      top: 8px;
      border-radius: 4px;
      will-change: tranform;
      border-color: secondary;
      border-width: 2px;
      border-style: dashed;
      background-color: transparent;
      width: 100%;
    }
  }
  ${breakpoints({
    xs: css`
      padding: 0 26px;
    `,
    md: css`
      padding: 0 32px;
    `,
  })}
`;
const Button = ({ children }) => {
  const [mode] = useColorMode();
  return (
    <Thumbnail mode={mode} revert>
      <Text revert>{children}</Text>
    </Thumbnail>
  );
};
export default Button;
