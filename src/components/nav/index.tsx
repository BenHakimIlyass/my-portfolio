import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled, { Box, useDown } from "@xstyled/styled-components";
import useHeadroom from "react-useheadroom";
import Link from "next/link";

import { H5, Hstack, Container, Toggle } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout, useAnimation, useColorModeWrapper } from "@hooks";
import { repeate } from "../../utils";
import configs from "../../configs";
import Menu from "./menu";
import Logo from "./logo";
import Sidebar from "./sidebar";

const links = ["Sandbox", "Blog", "Contact"];

const Nav = () => {
  const [{ sidebar }, dispatch] = useAnimation();
  const animate = useTimeout(configs.animationDelay);
  const isPinned = useHeadroom({});

  const toggleSidebar = () =>
    sidebar ? dispatch({ type: "TOGGLE_SIDEBAR_OFF" }) : dispatch({ type: "TOGGLE_SIDEBAR_ON" });

  useTimeout({
    delay: configs.animationDelay,
    execute: () => dispatch({ type: "TOGGLE_ANIMATION_OFF" }),
  });
  const handleColor = useColorModeWrapper();
  const isDownMd = useDown("md");

  return (
    <>
      <AnimatePresence exitBeforeEnter>{sidebar && isDownMd && <Sidebar onClose={toggleSidebar} />}</AnimatePresence>
      <Navbar
        handleColor={handleColor}
        style={{
          transform: isPinned ? `translate3d(0,0px,0)` : `translate3d(0,-100px,0)`,
        }}
      >
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            {animate ? (
              <Container>
                <Hstack alignItems="center" justifyContent="space-between" style={{ width: "100%" }}>
                  <Logo />
                  {!isDownMd && animate && (
                    <Box col={10 / 12}>
                      <Hstack space={3} alignItems="center" justifyContent="flex-end">
                        <div>
                          <Toggle />
                        </div>
                        <Hstack space={2}>
                          {links.map((item, i) => (
                            <Link href={`/${item.toLowerCase()}`} key={i}>
                              <a>
                                <H5>{item}</H5>
                              </a>
                            </Link>
                          ))}
                        </Hstack>
                      </Hstack>
                    </Box>
                  )}
                  {isDownMd && animate && <Menu sidebar={sidebar} onClick={toggleSidebar} />}
                </Hstack>
              </Container>
            ) : (
              <AnimatedLogo />
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Navbar>
    </>
  );
};

const Navbar = styled.div`
  transition: all 0.3s;
  position: fixed;
  width: 100%;
  z-index: 900;
  padding-top: 1rem;
  top: 0;
  background-image: ${({ handleColor }) =>
    handleColor(
      repeate(`linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)`, 2),
      repeate(`linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)`, 2),
    )};
`;

export default Nav;
