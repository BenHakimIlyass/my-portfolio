import * as React from "react";
import Head from "next/head";
import { useTimeout, useAnimation, useOnScreen } from "../hooks";
import { breakpoints, mergeRef } from "../utils";
import styled, { Box } from "@xstyled/styled-components";
import { HomeHero, Vstack, Container, Technologies, Experiences } from "../components";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [{ logoWillAnimate }] = useAnimation();
  const drawLineRef = React.useRef(null);
  const isOnScreen = useOnScreen(drawLineRef);
  console.log(isOnScreen);

  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      {/* Main sections */}
      {!logoWillAnimate && (
        <MainPlayground>
          <Vstack space={{ xs: 8, md: 12 }}>
            <HomeHero />
            <Container>
              <Experiences />
            </Container>
            <SvgBox ref={drawLineRef}>
              <svg width="100%" height="100%" viewBox="0 0 1150 510" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  animate={{ pathLength: 1 }}
                  initial={{ pathLength: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, type: "tween" }}
                  d="M1.5 509C35 343.5 892.576 461.751 909.5 203.5C923 -2.5 754.212 108.644 964 198C1090.22 251.761 1149 114 1149 0"
                  stroke="#FF7E06"
                  strokeWidth="1"
                />
              </svg>
            </SvgBox>
            <Container>
              <Technologies />
            </Container>
          </Vstack>
        </MainPlayground>
      )}
    </>
  );
};
const MainPlayground = styled.div`
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,10vh,0);`,
  })}
  margin-bottom: 100px;
`;
const SvgBox = styled.div`
  width: 100%;
  top: 70vh;
  position: absolute;
`;
export default App;
