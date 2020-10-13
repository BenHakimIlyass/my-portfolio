import styled from "@xstyled/styled-components";
import { Paragraph } from ".";
const Button = styled.button`
  background-color: black;
  ${() => Paragraph({ revert: true })}
  height: 42px;
  border: none;
  width: fit-content;
  padding: 0 32px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.4s;
  line-height: 42px !important;
  &:hover {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
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
      border-color: black;
      border-width: 2px;
      border-style: dashed;
      background-color: transparent;
      width: 100%;
    }
  }
`;

export default Button;
