import * as React from "react";
import Head from "next/head";
import { SandboxHero, Container, Vstack, Hstack, Text, CodeSandboxButton } from "@components";
import { breakpoints } from "@utils";
import { withAnimation } from "../contextProvider";
import styled, { Box, useDown } from "@xstyled/styled-components";

const Sandbox = () => {
  const downLg = useDown("lg");
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - Sandbox</title>
      </Head>

      <MainTextlayground>
        <Container>
          <Vstack space={{ xs: 4, md: 12 }}>
            <SandboxHero />

            {/* Jordans animation */}
            <Vstack space={2}>
              <Text clone="h4">Jordans product slider</Text>
              <Text clone="p">This animation is designed by me, using framer-motion.</Text>
              <CodeSandboxButton href="https://codesandbox.io/s/new-platform-kn5sx" />
              <Hstack space={{ xs: 2, md: 4 }} justifyContent="space-between">
                <WrappGif src="/icons/jordans.gif" />
                <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                  <Text clone="p">
                    The idea of this repository is to make a realistic product slider, but it was my first try with
                    framer-motion, we can say I was expermenting.
                  </Text>
                </Box>
              </Hstack>
            </Vstack>

            {/* Animated icons */}
            <Vstack space={2}>
              <Text clone="h4">Animated Icons</Text>
              <Text clone="p">These icons are designed and created by me, using Figma and framer-motion.</Text>
              <CodeSandboxButton href="https://codesandbox.io/s/github/BenHakimIlyass/animated-icons" />
              <Hstack space={{ xs: 2, md: 4 }} justifyContent="space-between">
                {!downLg && (
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <Text clone="p" textAlign={{ md: "right" }}>
                      Before, I was making web animation with react-spring which was one of my favorite motion
                      libraries, and I was using it to animate svg elements sometimes. So here I created these tiny cute
                      icons and I tried to animate them with framer-motion.
                    </Text>
                  </Box>
                )}
                <WrappGif src="/icons/icons.gif" />
                {downLg && (
                  <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                    <Text clone="p">
                      Before, I was making web animation with react-spring which was one of the best ever, and I was
                      using it to animate svg elements sometimes. So here I created these tiny cute icons and I tried to
                      animate them with framer-motion.
                    </Text>
                  </Box>
                )}
              </Hstack>
            </Vstack>

            {/* Sun and moon animation */}
            <Vstack space={2}>
              <Text clone="h4">Sun and moon</Text>
              <Text clone="p">This repository is made also with framer-motion and svg.</Text>
              <CodeSandboxButton href="https://codesandbox.io/s/github/BenHakimIlyass/sun-moon-animation" />
              <Hstack space={{ xs: 2, md: 4 }} justifyContent="space-between">
                <WrappGif src="/icons/sunandmoon.gif" />
                <Box width={{ xs: "100%", lg: "40%" }} mb={{ md: 50 }} mt={{ md: "auto" }}>
                  <Text clone="p">
                    After getting a litle bit familiarized with framer-motion, I made this full animated svg elements
                    repository.
                  </Text>
                </Box>
              </Hstack>
            </Vstack>
          </Vstack>
        </Container>
      </MainTextlayground>
    </>
  );
};
const WrappGif = (props) => <Gif width={{ xs: "100%", lg: "40%" }} {...props} draggable={false} />;

const Gif = styled.imgBox`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
const MainTextlayground = styled.div`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,10vh,0);`,
  })}
`;

export default withAnimation(Sandbox);
