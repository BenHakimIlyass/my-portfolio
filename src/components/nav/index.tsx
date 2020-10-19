import React from "react";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import styled, { Box, useDown } from "@xstyled/styled-components";
import useHeadroom from "react-useheadroom";
import Link from "next/link";

import { Text, Hstack, Container, Toggle } from "../";
import AnimatedLogo from "./animated-logo";
import { useTimeout, useContextValue, useColorModeWrapper } from "@hooks";
import configs from "../../configs";
import Menu from "./menu";
import Logo from "./logo";
import Sidebar from "./sidebar";

const links = ["Sandbox", "Blog", "Contact"];
const shDark = "0px 2px 3px rgba(255, 255,255, 0), 0px 2px 2px rgba(255, 255, 255, 0.14)";
const shDef = "0px 2px 3px rgba(0, 0, 0, 0), 0px 1px 2px rgba(0, 0, 0, 0.08)";
const noSh = "0px 2px 3px rgba(255, 255,255, 0), 0px 2px 2px rgba(255, 255, 255, 0)";

const Nav = () => {
  const [{ sidebar }, dispatch] = useContextValue();
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
        animate={{ boxShadow: animate ? handleColor(shDef, shDark) : noSh }}
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
                    <Box col={{ xs: 3 / 5, md: 2 / 3 }}>
                      <Hstack space={2} alignItems="center" justifyContent="flex-end">
                        <div>
                          <Toggle />
                        </div>
                        <Hstack space={2}>
                          {links.map((item, i) => (
                            <Link href={`/${item.toLowerCase()}`} key={i}>
                              <a aria-label={item}>
                                <Text clone="h5" isBold>
                                  {item}
                                </Text>
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

const Navbar = styled(motion.div)`
  transition: all 0.3s;
  position: fixed;
  width: 100%;
  z-index: 900;
  padding: 1rem 0;
  top: 0;
  background-color: primary;
`;

export default Nav;
