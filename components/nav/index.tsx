import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

import { AnimatedH3, AnimatedP, Hstack, Container } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout } from "../../hooks";
import useHeadroom from "react-useheadroom";

const Nav = () => {
  const animate = useTimeout(2000);
  const isPinned = useHeadroom({});
  return (
    <div
      style={{
        transition: "all 0.4s",
        position: "fixed",
        width: "100%",
        zIndex: 999,
        top: 0,
        transform: isPinned
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-100px,0)`,
      }}
    >
      <AnimateSharedLayout>
        {animate ? (
          <Wrapper
            animate={{ backgroundImage: gradient(0.65) }}
            initial={{ backgroundImage: gradient(0) }}
          >
            <Container>
              <Hstack alignItems="center" justifyContent="space-between">
                <AnimatedH3
                  isAanimated
                  layoutId="logo"
                  transition={{
                    duration: 2,
                    ease: [0.6, 0, 0, 1],
                  }}
                >
                  Ilyass
                </AnimatedH3>
                {animate && (
                  <AnimatedP
                    direction="right"
                    transition={{ delay: 1 }}
                    style={{ fontSize: 16, width: 200 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    Frontend developer / UI UX designer
                  </AnimatedP>
                )}
              </Hstack>
            </Container>
          </Wrapper>
        ) : (
          <AnimatePresence>
            <AnimatedLogo />
          </AnimatePresence>
        )}
      </AnimateSharedLayout>
    </div>
  );
};
const Wrapper = styled(motion.div)`
  height: 100px;
  padding-top: 20px;
  background-image: linear-gradient(
    180deg,
    #0a0a0c 0%,
    rgba(10, 10, 12, 0.282717) 59.38%,
    rgba(10, 10, 12, 0.183781) 68.75%,
    rgba(10, 10, 12, 0.107444) 79.17%,
    rgba(10, 10, 12, 0.03125) 92.71%,
    rgba(10, 10, 12, 0.0133929) 95.31%,
    rgba(10, 10, 12, 0) 100%
  );
`;
const gradient = (value: number) => `linear-gradient(
  180deg,
  rgba(10, 10, 12, ${value}),
  rgba(10, 10, 12, 0)`;
export default Nav;
