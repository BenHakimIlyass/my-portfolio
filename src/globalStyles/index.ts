import { createGlobalStyle, css } from "@xstyled/styled-components";
export { default as theme } from "./themeDependencies";

export const GlobalStyle = createGlobalStyle(css`
  body {
    margin: 0;
    background-color: white;
    min-height: 2000px;
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    box-shadow: 0px 0px 40px rgba(1, 5, 10, 0.57);
  }

  body::-webkit-scrollbar-thumb {
    background-color: black;
    outline: 1px solid transparent;
  }
  body::-webkit-scrollbar-track {
    background-color: white;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  * {
    scroll-behavior: smooth;
    ::selection {
      background-color: gray;
    }
  }
  html {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
  }

  button,
  a {
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s;
    text-align: center;
  }

  a:focus {
    outline: none;
    position: relative;
    &:after {
      position: absolute;
      left: 0;
      will-change: tranform;
      content: "";
      height: 2px;
      bottom: -4px;
      background-color: black;
      width: 100%;
    }
  }

  button:focus {
    outline: none;
    text-align: center;
    position: relative;
    &:after {
      position: absolute;
      left: 0%;
      content: "";
      will-change: tranform;
      height: 2px;
      bottom: -4px;
      background-color: black;
      width: 100%;
    }
  }
`);
