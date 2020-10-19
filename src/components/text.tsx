import { Box } from "@xstyled/styled-components";
import { AnimationControls, TargetAndTransition, Transition } from "framer-motion";
import React from "react";

type Props = {
  clone: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "smallP";
  revert?: boolean;
  isBold?: boolean;
  isSemiBold?: boolean;
  bindWith?: any;
  animate?: string | boolean | string[] | AnimationControls | TargetAndTransition;
  initial?: string | boolean | string[] | any;
  transition?: Transition;
  children: JSX.Element | JSX.Element[] | any;
};
const lh = (height) => `calc(${height}rem * 1.6)`;
const styles = {
  smallP: { fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: { xs: lh(0.9), md: lh(1) } },
  p: { fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: { xs: lh(1), md: lh(1.1) } },
  h5: { fontSize: { xs: "1.1rem", md: "1.2rem" }, lineHeight: { xs: lh(1.4), md: lh(1.6) } },
  h4: { fontSize: { xs: "1.4rem", md: "1.6rem" }, lineHeight: { xs: lh(1.6), md: lh(1.8) } },
  h3: { fontSize: { xs: "1.8rem", md: "2rem" }, lineHeight: { xs: lh(1.8), md: lh(2) } },
  h2: { fontSize: { xs: "2rem", md: "2.4rem" }, lineHeight: { xs: lh(2.4), md: lh(2.6) } },
  h1: { fontSize: { xs: "2.6rem", md: "3rem" }, lineHeight: { xs: lh(2.8), md: lh(3.2) } },
};

// bypass type checking for @xstyled/styled-components box
const Text: React.FC<Props & { [key: string]: any }> = ({
  clone,
  revert,
  isBold,
  isSemiBold,
  bindWith,
  children,
  ...props
}) => (
  <Box
    forwardedAs={bindWith ? bindWith : clone === "smallP" ? "p" : clone}
    fontWeight={isBold ? 700 : isSemiBold ? 500 : 400}
    color={revert ? "primary" : "secondary"}
    {...styles[clone]}
    {...props}
  >
    {children}
  </Box>
);
export default Text;
