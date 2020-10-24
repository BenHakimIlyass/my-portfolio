import React from "react";
import { Box, useDown } from "@xstyled/styled-components";
import { useHover, useColorModeWrapper } from "@hooks";
type Props = {
  children: JSX.Element | JSX.Element[] | any;
  url: string;
  top?: number | string;
};

const LinkedElement = ({ children, url, top }: Props) => {
  const isDownMd = useDown("md");
  const [events, hover] = useHover();
  const handleColor = useColorModeWrapper();
  return (
    <Box position="relative" pl={20} ml={-20} {...events}>
      {children}
      {hover || isDownMd ? (
        <Box forwardedAs="a" href={url} target="_blanc" position="absolute" top={top || 6} l={10} ml={-34}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 9H5V10H4C2.5 10 1 8.31 1 6.5C1 4.69 2.55 3 4 3H8C9.45 3 11 4.69 11 6.5C11 7.91 10.09 9.22 9 9.75V8.59C9.58 8.14 10 7.32 10 6.5C10 5.22 8.98 4 8 4H4C3.02 4 2 5.22 2 6.5C2 7.78 3 9 4 9ZM13 6H12V7H13C14 7 15 8.22 15 9.5C15 10.78 13.98 12 13 12H9C8.02 12 7 10.78 7 9.5C7 8.67 7.42 7.86 8 7.41V6.25C6.91 6.78 6 8.09 6 9.5C6 11.31 7.55 13 9 13H13C14.45 13 16 11.31 16 9.5C16 7.69 14.5 6 13 6Z"
              fill={handleColor("#000", "#fff")}
            />
          </svg>
        </Box>
      ) : null}
    </Box>
  );
};

export default LinkedElement;
