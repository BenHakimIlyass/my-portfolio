import * as React from "react";
import Head from "next/head";
import { SandboxHero, Container, Vstack, Hstack, P, H4, Center, CodeSandboxButton } from "@components";
import { breakpoints } from "@utils";
import { withAnimation } from "../animationProvider";
import { useOnScreen } from "@hooks";
import styled, { Box, useDown } from "@xstyled/styled-components";
import { motion } from "framer-motion";

const Sandbox = () => {
  const downLg = useDown("lg");
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      <MainPlayground>
        <Container>
          <Vstack space={{ xs: 4, md: 12 }}>
            <SandboxHero />

            {/* Jordans animation */}
            <Vstack space={2}>
              <H4>Jordans product slider</H4>
              <P>This animation is designed by me, using framer-motion.</P>
              <CodeSandboxButton href="https://codesandbox.io/s/new-platform-kn5sx" />
              <Hstack space={{ xs: 2, md: 4 }} justifyContent="space-between">
                <WrappGif src="/icons/jordans.gif" />
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
              <Hstack space={{ xs: 2, md: 4 }} justifyContent="space-between">
                {!downLg && (
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <P direction="right">
                      Before, I was making web animation with react-spring which was one of the best ever, and I was
                      using it to animate svg elements sometimes. So here I created these tiny cute icons and I tried to
                      animate them with framer-motion.
                    </P>
                  </Box>
                )}
                <WrappGif src="/icons/icons.gif" />
                {downLg && (
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <P>
                      Before, I was making web animation with react-spring which was one of the best ever, and I was
                      using it to animate svg elements sometimes. So here I created these tiny cute icons and I tried to
                      animate them with framer-motion.
                    </P>
                  </Box>
                )}
              </Hstack>
            </Vstack>

            {/* Sun and moon animation */}
            <Vstack space={2}>
              <H4>Sun and moon</H4>
              <P>This repository is made also with framer-motion and svg.</P>
              <CodeSandboxButton href="https://codesandbox.io/s/github/BenHakimIlyass/sun-moon-animation" />
              <Hstack space={{ xs: 2, md: 4 }} justifyContent="space-between">
                <WrappGif src="/icons/sunandmoon.gif" />
                <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                  <P>
                    After getting a litle bit familiarized with framer-motion, I made this full animated svg elements
                    repository.
                  </P>
                </Box>
              </Hstack>
            </Vstack>
          </Vstack>
        </Container>
      </MainPlayground>
    </>
  );
};
const WrappGif = (props) => <Gif width={{ xs: "100%", lg: "40%" }} {...props} draggable={false} />;

const Gif = styled.imgBox`
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  div {
    will-change: tranform opacity;
  }
`;
const MainPlayground = styled.div`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,10vh,0);`,
  })}
`;
export default withAnimation(Sandbox);
