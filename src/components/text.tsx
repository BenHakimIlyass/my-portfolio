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

const styles = {
  smallP: { xs: 0.9, md: 1 },
  p: { xs: 1, md: 1.1 },
  h5: { xs: 1.1, md: 1.2 },
  h4: { xs: 1.4, md: 1.6 },
  h3: { xs: 1.8, md: 2 },
  h2: { xs: 2, md: 2.4 },
  h1: { xs: 2.6, md: 3 },
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
    fontSize={{ xs: `${styles[clone].xs}rem`, md: `${styles[clone].md}rem` }}
    lineHeight={{ xs: `${styles[clone].xs * 1.6}rem`, md: `${styles[clone].md * 1.6}rem` }}
    {...props}
  >
    {children}
  </Box>
);

export default Text;
