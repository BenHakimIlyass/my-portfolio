import React from "react";
import { motion } from "framer-motion";
import styled, { keyframes } from "@xstyled/styled-components";
import { AnimatedP, AnimatedH3, Vstack, Center, Container, Button } from "../../";
import { breakpoints } from "../../../utils";
import { variants, itemsVariants } from "./variants";

const Title = "Hi dear! I'm Ilyass Ben Hakim";
const P1 = "A young self-taught frontend developer and UI UX designer.";
const P2 = `I'm always working on my skillset, so I can be able to build such a perfect interactive web application,
in which every component serves a reason.`;

const Split = (e) => e.split("");

const HomeHero = () => {
  return (
    <SectionHolder>
      <HeroContainer>
        <Vstack space={2}>
          <AnimatedH3
            variants={variants(0)}
            initial="empty"
            animate="full"
            transition={{ duration: 1, delayChildren: 5 }}
          >
            {Split(Title).map((item, i) => (
              <WrapLetter letter={item} delay={0} key={i} />
            ))}
          </AnimatedH3>
          <Vstack space={0.3}>
            <AnimatedP initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              A young software engineer, self-taught frontend developer and UI UX designer.
            </AnimatedP>
            <AnimatedP initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
              I'm always working on my skillset, so I can be able to build such a perfect interactive web application,
              in which every component serves a reason.
            </AnimatedP>
          </Vstack>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
            <Button>Contact</Button>
          </motion.div>
        </Vstack>
      </HeroContainer>
      <Box>
        <svg width="100%" height="100%" viewBox="0 0 1152 466" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0.5 1.5C0.5 1.5 153.081 178.006 284 239C481.825 331.165 657.712 171.144 867.5 260.5C993.719 314.261 1153.5 464.5 1153.5 464.5"
            animate={{ pathLength: 1 }}
            initial={{ pathLength: 0 }}
            transition={{ duration: 2 }}
            stroke="#FF7E06"
            opacity={0.4}
            strokeWidth="1"
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
const Box = styled.div`
  width: 100%;
  top: 0;
  position: absolute;
`;
export default HomeHero;
