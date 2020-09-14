import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Night from "./night";
import Midday from "./midday";
import { AnimatedP } from "../../";
export default function App() {
  const [dark, toggle] = React.useState(true);

  return (
    <Playground
      onTap={() => toggle((prev) => !prev)}
      animate={{
        backgroundImage: dark
          ? "linear-gradient(180deg,  #051728,#173756)"
          : "linear-gradient(180deg, #FFFFFF, #FFFAEB)",
        boxShadow: dark
          ? "0px 0px 16px rgba(0, 0, 0, 0.24)"
          : "0px 0px 16px rgba(152, 163, 183, 0.24)",
      }}
      whileTap={{ scale: 0.9, backgroundColor: dark ? "#102A43" : "#F4ECD1" }}
    >
      <AnimatePresence exitBeforeEnter>
        {dark ? <Night /> : <Midday />}
      </AnimatePresence>

      <P animate={{ color: !dark ? "#BCCCDC" : "#DFF7FA" }}>
        Tap here to toggle time
      </P>
    </Playground>
  );
}
const Playground = styled(motion.div)`
  overflow: hidden;
  height: 90vh;
  cursor: pointer;
  width: 100%;
  border-radius: 30px;
  position: relative;
  margin: 0px auto;
  max-width: 1200px;
  box-shadow: 0px 0px 16px rgba(152, 163, 183, 0.24);
`;
const P = styled(AnimatedP)`
  position: absolute;
  left: calc(50% - 70px);
  text-align: center;
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: calc(50vh - 10px);
`;
