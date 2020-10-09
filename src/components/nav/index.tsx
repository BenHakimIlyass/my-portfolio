import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import styled, { useColorMode } from "@xstyled/styled-components";

import { AnimatedH4, H5, Hstack, Container, Toggle } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout, useAnimation } from "../../hooks";
import { scrollToElementById, repeate } from "../../utils";
import useHeadroom from "react-useheadroom";
import Link from "next/link";
import configs from "../../configs";

const Nav = () => {
  const [logoHoverState, hover] = React.useState(false);
  const [_, dispatch] = useAnimation();
  // shared layout animation timeout
  const animate = useTimeout(2000);
  // logo second animation timeout
  const logoHiddenLettersState = useTimeout(configs.animationDelay);

  const isPinned = useHeadroom({});

  const handleHover = () =>
    logoHiddenLettersState && {
      onMouseEnter: () => hover(true),
      onMouseLeave: () => hover(false),
    };
  useTimeout({
    delay: configs.animationDelay,
    execute: () => dispatch({ type: "TOGGLE_ANIMATION_OFF" }),
  });
  const [mode] = useColorMode();

  return (
    <Navbar
      style={{
        transform: isPinned
          ? `translate3d(0,0px,0)`
          : `translate3d(0,-100px,0)`,
      }}
    >
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          {animate ? (
            <Wrapper mode={mode}>
              <Container>
                <Hstack alignItems="center" justifyContent="space-between">
                  <Link href="/">
                    <a>
                      <AnimatedH4
                        {...handleHover()}
                        isAnimated
                        layoutId="logo"
                        transition={{
                          duration: 2,
                          ease: [0.6, 0, 0, 1],
                        }}
                      >
                        .il
                        <motion.span
                          transition={{
                            type: "tween",
                          }}
                          animate={{
                            opacity: !logoHiddenLettersState
                              ? 1
                              : logoHiddenLettersState && logoHoverState
                              ? 1
                              : 0,
                          }}
                        >
                          yass
                        </motion.span>
                      </AnimatedH4>
                    </a>
                  </Link>
                  {animate && (
                    <Hstack space={4} alignItems="center">
                      <div>
                        <Toggle />
                      </div>
                      <Hstack space={2}>
                        <Link href="/sandbox">
                          <a>
                            <H5>Sandbox</H5>
                          </a>
                        </Link>
                        <Link href="/blog">
                          <a>
                            <H5>Blog</H5>
                          </a>
                        </Link>
                        <button
                          onClick={() => scrollToElementById("contact_section")}
                        >
                          <H5>Contact</H5>
                        </button>
                      </Hstack>
                    </Hstack>
                  )}
                </Hstack>
              </Container>
            </Wrapper>
          ) : (
            <AnimatedLogo />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Navbar>
  );
};

const Wrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  background-image: ${({ mode }: { mode: string }) =>
    mode === "dark"
      ? repeate(`linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)`, 2)
      : repeate(
          `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`,
          2
        )};
`;
const Navbar = styled.div`
  transition: all 0.3s;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
`;
export default Nav;
