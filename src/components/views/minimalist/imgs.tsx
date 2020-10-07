import React from "react";
import styled, { useColorMode } from "@xstyled/styled-components";
import { motion } from "framer-motion";

import { Hstack, Vstack, P } from "../../";
import { Wallet, Bell, Camera, Cloud } from "./icons";
import { breakpoints } from "../../../utils";

const motions = (delay: number) => ({
  animate: { y: 60, opacity: 1 },
  initial: { y: 100, opacity: 0 },
  transition: {
    delay: delay,
    ease: "easeOut",
    type: "spring",
  },
});
const wrapShadow = (mode: string) => ({
  boxShadow:
    mode === "dark" ? `0px 0px 40px #000` : `0px 0px 40px rgba(0, 0, 0, 0.2)`,
});
const Imgs = ({ delay }: { delay: number }) => {
  const [mode] = useColorMode();
  return (
    <Wrapper {...motions(delay + 0.2)}>
      <Vstack space={3}>
        <P direction="center">Hover on the icons</P>
        <Vstack space={2}>
          <Hstack alignItems="center" space={4} justifyContent="center">
            <IconHolder style={wrapShadow(mode)}>
              <Bell />
            </IconHolder>
            <IconHolder style={wrapShadow(mode)}>
              <Camera />
            </IconHolder>
          </Hstack>
          <Hstack alignItems="center" space={4} justifyContent="center">
            <IconHolder style={wrapShadow(mode)}>
              <Wallet />
            </IconHolder>
            <IconHolder style={wrapShadow(mode)}>
              <Cloud />
            </IconHolder>
          </Hstack>
        </Vstack>
      </Vstack>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  margin: 0 auto !important;
  text-align: center;
  width: 100%;
  min-height: 500px;
  max-width: 517px;
  padding-bottom: 40px;
  z-index: 99;
  ${breakpoints({
    920: { minWidth: 400 },
  })}
`;
const IconHolder = styled.div`
  width: 130px;
  height: 130px;
  background-color: #fff;
  border-radius: 70px;
`;
export default Imgs;
