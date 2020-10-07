import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import styled from "@xstyled/styled-components";

import { AnimatedH4, H5, Hstack, Container, Toggle } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout } from "../../hooks";
import useHeadroom from "react-useheadroom";

const Nav = () => {
  const animate = useTimeout(2000);
  const isPinned = useHeadroom({});
  return (
    <div
      style={{
        transition: "all 0.3s",
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
          <Wrapper>
            <Container>
              <Hstack alignItems="center" justifyContent="space-between">
                <AnimatedH4
                  isAanimated
                  layoutId="logo"
                  transition={{
                    duration: 2,
                    ease: [0.6, 0, 0, 1],
                  }}
                >
                  Ilyass
                </AnimatedH4>
                {animate && (
                  <Hstack space={4} alignItems="center">
                    <Toggle />
                    <Hstack space={1}>
                      <H5>Sandbox</H5>
                      <H5>Blog</H5>
                      <H5>Contact</H5>
                    </Hstack>
                  </Hstack>
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
const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: white;
`;

export default Nav;
