import { createGlobalStyle } from "@xstyled/styled-components";
export { default as theme } from "./themeDependencies";
export const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  background-color:white;
  overflow-x:hidden;
}
body::-webkit-scrollbar {
  width: 10px;
}
 
body::-webkit-scrollbar-track {
  box-shadow:0px 0px 40px rgba(1, 5, 10, 0.57);
}
 
body::-webkit-scrollbar-thumb {
  background-color: black;
  outline: 1px solid transparent;
}
body::-webkit-scrollbar-track {
    background-color: white;
}
h1,h2,h3,h4,h5,h6,p{
  margin:0;
}
* {
  ::selection{
    background-color: lightBlack;
  }
}
html {
  font-family: 'Inter',-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
}
`;
