import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  background-color:#12141B;
  overflow-x:hidden;
  height:auto;
}
body::-webkit-scrollbar {
  width: 10px;
}
 
body::-webkit-scrollbar-track {
  box-shadow:0px 0px 40px rgba(1, 5, 10, 0.57);
}
 
body::-webkit-scrollbar-thumb {
  background-color: #fff;
  outline: 1px solid transparent;
}
body::-webkit-scrollbar-track {
    background: #141623;
}
h1,h2,h3,h4,h5,h6,p{
  margin:0;
}
* {
  ::selection{
    background-color:#4C4E58;
  }
}
html {
  font-family: 'Inter',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
 
}
`;
