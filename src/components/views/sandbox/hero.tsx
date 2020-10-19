import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "@xstyled/styled-components";
import { Text, Vstack, Center, Container, Button } from "../../";
import { breakpoints } from "../../../utils";
import { variants, itemsVariants } from "./variants";

const Title = "Here you'll find some clean web animations";

const Split = (e) => e.split("");

const SandboxHero = () => {
  return (
    <SectionHolder>
      <HeroContainer>
        <Center intrinsic>
          <Vstack space={2}>
            <Text
              clone="h3"
              isBold
              bindWith={motion.h3}
              variants={variants(0)}
              initial="empty"
              animate="full"
              transition={{ duration: 1, delayChildren: 5 }}
            >
              {Split(Title).map((item, i) => (
                <WrapLetter letter={item} delay={0} key={i} />
              ))}
            </Text>
            <Vstack space={0.3}>
              <Text
                clone="p"
                bindWith={motion.p}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                I often use codesandbox for small ideas, so feel free to edit them.
              </Text>
            </Vstack>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
              <a href="https://github.com/BenHakimIlyass" target="_blanc">
                <Button>My github</Button>
              </a>
            </motion.div>
          </Vstack>
        </Center>
      </HeroContainer>
      <Box>
        <svg width="100%" height="100%" viewBox="0 0 500 517" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M499.5 250C499.5 387.795 387.795 499.5 250 499.5C112.205 499.5 0.5 387.795 0.5 250C0.5 112.205 112.205 0.5 250 0.5C387.795 0.5 499.5 112.205 499.5 250Z"
            stroke="#FF7E06"
          />
          <path
            d="M438 454.5C438 479.629 417.629 500 392.5 500C367.371 500 347 479.629 347 454.5C347 429.371 367.371 409 392.5 409C417.629 409 438 429.371 438 454.5Z"
            fill="#FF7E06"
          />
          <path
            d="M329 495.5C329 507.374 319.374 517 307.5 517C295.626 517 286 507.374 286 495.5C286 483.626 295.626 474 307.5 474C319.374 474 329 483.626 329 495.5Z"
            fill="#FF7E06"
          />
        </svg>
      </Box>
    </SectionHolder>
  );
};

const SectionHolder = styled.div`
  position: relative;
  ${breakpoints({
    0: { paddingBottom: 200 },
    920: { paddingBottom: 400 },
  })}
`;
const WrapLetter = ({ letter, delay }) => (
  <motion.span transition={{ duration: 1, delay }} variants={itemsVariants}>
    {letter}
  </motion.span>
);
const HeroContainer = styled(Container)`
  z-index: 10;
  ${breakpoints({
    0: `transform: translate3d(0,100px,0)`,
    920: `transform: translate3d(0,340px,0)`,
  })}
`;
const rotateSvg = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(180deg);
}
`;
const Box = styled.div`
  max-width: 600px;
  ${breakpoints({
    0: { top: 0, width: "50%" },
    920: { top: 100, width: "50%" },
  })}
  left: 50%;
  margin-left: -25%;
  position: absolute;
  will-change: transform;
  transition-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
  animation: ${rotateSvg} 10s infinite alternate none running;
`;

export default SandboxHero;
