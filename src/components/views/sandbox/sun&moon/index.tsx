import * as React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Night from "./night";
import Midday from "./midday";
import { AnimatedP, Playground } from "../../../";
import { useOnScreen, useMousePosition, useHover, useTimeout } from "../../../../hooks";

export default function App() {
  const [dark, toggle] = React.useState(false);

  const [ref, isOnScreen] = useOnScreen();
  // const [events, isHovered] = useHover();
  const iconIsMounted = useTimeout(3000, [dark]);
  const bounds = useMousePosition(iconIsMounted);
  // console.log(bounds);

  return (
    <AnimationSection ref={ref}>
      {isOnScreen && (
        <Playground
          style={{ height: "90vh" }}
          onTap={() => toggle((prev) => !prev)}
          animate={{
            backgroundImage: dark
              ? "linear-gradient(180deg,  #051728,#173756)"
              : "linear-gradient(180deg, #FFFFFF, #FFFAEB)",
            boxShadow: dark ? "0px 0px 16px rgba(0, 0, 0, 0.24)" : "0px 0px 16px rgba(152, 163, 183, 0.24)",
          }}
          whileTap={{
            scale: 0.9,
            backgroundColor: dark ? "#102A43" : "#F4ECD1",
          }}
        >
          <AnimatePresence exitBeforeEnter>{dark ? <Night {...bounds} /> : <Midday {...bounds} />}</AnimatePresence>

          <P animate={{ color: !dark ? "#BCCCDC" : "#DFF7FA" }} style={{ userSelect: "none" }}>
            Tap here to toggle time
          </P>
        </Playground>
      )}
    </AnimationSection>
  );
}
const AnimationSection = styled.div`
  height: 90vh;
`;

const P = styled(AnimatedP)`
  position: absolute;
  left: calc(50% - 70px);
  text-align: center;
  font-size: 0.9rem;
  font-family: sans-serif;
  margin-top: calc(50vh - 10px);
`;
