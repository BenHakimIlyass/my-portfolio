import * as React from "react";
import Head from "next/head";
import { SandboxHero, Container, Vstack, Hstack, P, H4, Center, CodeSandboxButton } from "../components";
import { breakpoints, shorten } from "../utils";
import { useAnimation, useOnScreen } from "../hooks";
import styled, { Box } from "@xstyled/styled-components";
import { motion } from "framer-motion";

const Sandbox = () => {
  const [{ logoWillAnimate }] = useAnimation();

  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      {!logoWillAnimate && (
        <MainPlayground>
          <Container>
            <Vstack space={14}>
              <SandboxHero />

              {/* Jordans animation */}
              <Vstack space={2}>
                <H4>Jordans product slider</H4>
                <P>This animation is designed by me, using framer-motion.</P>
                <CodeSandboxButton href="https://codesandbox.io/s/new-platform-kn5sx" />
                <Hstack space={{ xs: 2, lg: 4 }} justifyContent="space-between">
                  <WrappGif src="/icons/jordans.gif" color="#FFB3B9" />
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <P>
                      The idea of this repository is to make a realistic product slider, but it was my first try with
                      framer-motion, we can say I was expermenting.
                    </P>
                  </Box>
                </Hstack>
              </Vstack>

              {/* Animated icons */}
              <Vstack space={2}>
                <H4>Animated Icons</H4>
                <P>These icons are designed and created by me, using Figma and framer-motion.</P>
                <CodeSandboxButton href="https://codesandbox.io/s/github/BenHakimIlyass/animated-icons" />
                <Hstack space={{ xs: 2, lg: 4 }} justifyContent="space-between">
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <P direction="right">
                      Before, I was making web animation with react-spring which was one of the best ever, and I was
                      using it to animate svg elements sometimes. So here I created these tiny cute icons and I tried to
                      animate them with framer-motion.
                    </P>
                  </Box>
                  <WrappGif src="/icons/icons.gif" color="#FFD2BD" />
                </Hstack>
              </Vstack>

              {/* Sun and moon animation */}
              <Vstack space={2}>
                <H4>Sun and moon</H4>
                <P>This repository is made also with framer-motion and svg.</P>
                <CodeSandboxButton href="https://codesandbox.io/s/github/BenHakimIlyass/sun-moon-animation" />
                <Hstack space={{ xs: 2, lg: 4 }} justifyContent="space-between">
                  <WrappGif src="/icons/sunandmoon.gif" color="#051728" />
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <P>
                      After getting a litle bit familiarized with framer-motion, I made this full animated svg elements
                      repository
                    </P>
                  </Box>
                </Hstack>
              </Vstack>
            </Vstack>
          </Container>
        </MainPlayground>
      )}
    </>
  );
};
const WrappGif = ({ color, ...props }) => {
  const [ref, isOnScreen] = useOnScreen();
  return (
    <Gif width={{ xs: "100%", lg: "40%" }} ref={ref}>
      {isOnScreen && (
        <motion.div
          initial={{ x: "-100%" }}
          transition={{ duration: 1.4 }}
          exit={{ x: 0 }}
          animate={{ x: "100%" }}
          style={{
            backgroundColor: color,
            width: "100%",
            zIndex: 10,
            top: "-25%",
            height: "200%",
            position: "absolute",
          }}
        />
      )}
      <Center>
        <motion.div initial={{ scale: 1.3 }} animate={{ scale: 1 }} transition={{ delay: 1 }}>
          <img {...props} draggable={false} />
        </motion.div>
      </Center>
    </Gif>
  );
};
const Gif = styled.divBox`
  overflow: hidden;
  position: relative;
  ${breakpoints({
    0: { width: "100%" },
    920: { width: "50%" },
  })}
  img {
    width: 100%;
    height: 100%;
  }
`;
const MainPlayground = styled.div`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,30vh,0)` },
    920: `transform: translate3d(0,10vh,0);`,
  })}
`;
export default Sandbox;
