import React from "react";
import styled, { useColorMode } from "@xstyled/styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useOnScreen } from "../hooks";
const DisplayText = ({ title, style }: { title: string; style: React.CSSProperties }) => {
  const ref = React.useRef(null);
  const isOnScreen = useOnScreen(ref);
  const [mode] = useColorMode();
  return (
    <Playgroud style={style} ref={ref}>
      <AnimatePresence exitBeforeEnter>
        {isOnScreen && (
          <Display
            initial={{ x: "-120%", opacity: 0 }}
            exit={{ x: "-120%", opacity: 0 }}
            animate={{ x: 0, opacity: 0.17 }}
            mode={mode}
            transition={{
              duration: 2.6,
              stiffness: 10,
              ease: "easeOut",
            }}
          >
            {title}
          </Display>
        )}
      </AnimatePresence>
    </Playgroud>
  );
};
const Playgroud = styled.div`
  position: absolute;
`;
const Display = styled(motion.h1)`
  color: white;
  text-align: right;
  font-size: 7rem;
  white-space: nowrap;
  font-weight: 900;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${({ mode }: { mode: string }) => (mode === "dark" ? "#fff" : "#000")};
`;
export default DisplayText;
