import styled, { keyframes } from "@xstyled/styled-components";

const loading = keyframes`
  0% {
    background-color: #F6F6F6;
  }
  100% {
    background-color: #b2b2b2;
  }
`;

const Placeholder = styled.div`
  border-radius: 4px;
  width: 100%;
  background-color: lightGray;
  animation: ${loading} 1s infinite ease-out alternate;
`;
export default Placeholder;
