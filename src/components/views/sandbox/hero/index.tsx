import React from "react";
import { motion } from "framer-motion";
import styled from "@xstyled/styled-components";
import { P, H3, Vstack, Center } from "../../../";
// import { breakpoints } from "";
const SandboxHero = () => {
  return (
    <Center intrinsic>
      <Vstack
        style={{
          zIndex: 10,
          transform: `translate3d(0,35vh,0)`,
        }}
        space={2}
      >
        <H3 direction="center">Here you'll find some clean web animations</H3>
        <P direction="center">
          I often use codesandbox for small ideas, feel free to edit them
        </P>
      </Vstack>
      <Box zIndex={1}>
        <motion.svg
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 180 }}
          style={{ originX: "50%", originY: "50%" }}
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeWidth={2}
            stroke="#ff7e06"
            d="M70.1825 68.0203C144.036 -15.2324 129.782 24.0048 251.602 2.6331C286.142 -3.4265 344.011 -0.69377 386.16 28.7285C418.582 51.3607 436.726 67.4179 457.476 102.359C487.911 153.61 482.486 193.876 488.315 254.254C493.721 310.26 511.661 347.952 488.315 398.426C458.779 462.284 404.377 470.445 339.901 488.534C276.198 506.406 236.07 501.001 171.249 488.534C97.8583 474.418 93.0533 465.538 41.9862 407.472C2.9409 363.075 13.1436 306.942 2.06081 262.146C-9.02201 217.35 26.1566 117.649 70.1825 68.0203Z"
            // fill="#FF7E06"
          />
        </motion.svg>
      </Box>
    </Center>
  );
};
const Box = styled.div`
  width: 70%;
  max-width: 600px;
`;
export default SandboxHero;
