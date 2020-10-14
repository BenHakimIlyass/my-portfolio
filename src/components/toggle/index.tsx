import { motion } from "framer-motion";
import React from "react";
import { Hstack } from "../";
import styled, { Box, useColorMode } from "@xstyled/styled-components";

const wrapAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Brightness = (props) => (
  <motion.svg
    {...wrapAnimations}
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 5.07089C12.6734 5.02417 12.3395 5 12 5C11.6605 5 11.3266 5.02417 11 5.07089V1.04484C11.3294 1.01516 11.6629 1 12 1C12.3371 1 12.6706 1.01516 13 1.04484V5.07089ZM7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM13 22.9552V18.9291C12.6734 18.9758 12.3395 19 12 19C11.6605 19 11.3266 18.9758 11 18.9291V22.9552C11.3294 22.9848 11.6629 23 12 23C12.3371 23 12.6706 22.9848 13 22.9552ZM18.9291 11H22.9552C22.9848 11.3294 23 11.6629 23 12C23 12.3371 22.9848 12.6706 22.9552 13H18.9291C18.9758 12.6734 19 12.3395 19 12C19 11.6605 18.9758 11.3266 18.9291 11ZM5 12C5 11.6605 5.02417 11.3266 5.07089 11H1.04484C1.01516 11.3294 1 11.6629 1 12C1 12.3371 1.01516 12.6706 1.04484 13H5.07089C5.02417 12.6734 5 12.3395 5 12ZM16.1922 6.39362L19.0391 3.54673C19.5521 3.9744 20.0256 4.44791 20.4533 4.96094L17.6064 7.80783C17.2049 7.27173 16.7283 6.79513 16.1922 6.39362ZM3.54673 4.96094L6.39362 7.80783C6.79513 7.27173 7.27173 6.79513 7.80783 6.39362L4.96094 3.54673C4.44791 3.9744 3.9744 4.44791 3.54673 4.96094ZM17.6064 16.1922L20.4533 19.0391C20.0256 19.5521 19.5521 20.0256 19.0391 20.4533L16.1922 17.6064C16.7283 17.2049 17.2049 16.7283 17.6064 16.1922ZM4.96094 20.4533L7.80783 17.6064C7.27173 17.2049 6.79513 16.7283 6.39362 16.1922L3.54673 19.0391C3.9744 19.5521 4.44791 20.0256 4.96094 20.4533Z"
      fill="secondary"
    />
  </motion.svg>
);

const Darkness = (props) => (
  <motion.svg
    {...wrapAnimations}
    {...props}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 9C13 7.02543 13.8205 5.18477 15.2398 3.86765L16.7174 2.49647L14.7317 2.14956C14.1634 2.05029 13.5847 2 13 2C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22C16.3854 22 19.4843 20.3038 21.3266 17.5396L22.4432 15.8643L20.4336 15.9868C20.2898 15.9956 20.1452 16 20 16C16.134 16 13 12.866 13 9ZM13 20C8.58172 20 5 16.4183 5 12C5 7.74791 8.31735 4.27062 12.5051 4.01506C11.5367 5.46848 11 7.19184 11 9C11 13.439 14.2137 17.1274 18.4414 17.8655C16.9878 19.2153 15.061 20 13 20Z"
      fill="secondary"
    />
  </motion.svg>
);

const Toggle = () => {
  const [mode, setMode] = useColorMode();

  const toggle = () => setMode(mode === "darkMode" ? "lightMode" : "darkMode");

  const handleIconLowOpacity = (light, dark) => (mode === "darkMode" ? dark : light);

  return (
    <Wrapper
      alignItems="center"
      justifyContent="flex-start"
      space={0.6}
      onClick={toggle}
      as="button"
      htmlFor="Dark mode"
    >
      <div style={{ width: 24, height: 24 }}>
        <Brightness
          initial={{ opacity: 0 }}
          animate={{ opacity: mode === "darkMode" ? handleIconLowOpacity(0.2, 0.4) : 1 }}
        />
      </div>
      <svg width="38" height="38" viewBox="0 0 32 32" fill="none">
        <Box
          forwardedAs="path"
          className="toggle_path"
          stroke={mode === "darkMode" ? "#fff" : "#000"}
          d="M9.33333 7.66667H22.6667C27.269 7.66667 31 11.3976 31 16C31 20.6024 27.269 24.3333 22.6667 24.3333H9.33333C4.73096 24.3333 1 20.6024 1 16C1 11.3976 4.73096 7.66667 9.33333 7.66667Z"
          strokeWidth="2"
        />
        <motion.circle animate={{ x: mode === "darkMode" ? 13 : 0 }} cx="9.33333" cy="16" r="4.33333" strokeWidth="2" />
      </svg>
      <div style={{ width: 24, height: 24 }}>
        <Darkness
          initial={{ opacity: 0 }}
          animate={{ opacity: mode === "lightMode" ? handleIconLowOpacity(0.2, 0.4) : 1 }}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled(Hstack)`
  width: fit-content;
  circle,
  path {
    fill: secondary;
  }
  .toggle_path {
    fill: transparent !important;
  }
  .toggle_circle {
    stroke: secondary !important;
  }
`;
export default Toggle;
