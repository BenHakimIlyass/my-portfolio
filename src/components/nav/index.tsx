import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import styled from "@xstyled/styled-components";

import { AnimatedH4, H5, Hstack, Container, Toggle } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout } from "../../hooks";
import useHeadroom from "react-useheadroom";
import Link from "next/link";

const scrollToSectionById = (id: string) =>
  document.getElementById(id).scrollIntoView();

const Nav = () => {
  const [logoHoverState, hover] = React.useState(false);
  const animate = useTimeout(2000);
  const logoHiddenLettersState = useTimeout(4000);
  const isPinned = useHeadroom({});
  const handleHover = () =>
    logoHiddenLettersState && {
      onMouseEnter: () => hover(true),
      onMouseLeave: () => hover(false),
    };
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
        <AnimatePresence exitBeforeEnter>
          {animate ? (
            <Wrapper>
              <Container>
                <Hstack alignItems="center" justifyContent="space-between">
                  <Link href="">
                    <a>
                      <AnimatedH4
                        {...handleHover()}
                        isAanimated
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
                    <Hstack space={3} alignItems="center">
                      <div>
                        <Toggle />
                      </div>
                      <Hstack space={1}>
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
                          onClick={() => scrollToSectionById("contact_section")}
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
