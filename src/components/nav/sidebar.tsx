import React from "react";
import { motion } from "framer-motion";
import styled, { Box } from "@xstyled/styled-components";
import { Vstack, Hstack, Toggle, H5 } from "../";
import Logo from "../nav/logo";
import Link from "next/link";
import { useAnimation } from "@hooks";
import { useRouter } from "next/router";
import { shorten } from "@utils";

const ease = [0.6, 0, 0, 1];
const Close = ({ mode, ...props }) => {
  const [{ sidebar }] = useAnimation();
  return (
    <motion.button
      {...props}
      animate={{ x: !sidebar ? 100 : 0 }}
      initial={{ x: 100 }}
      transition={{ delay: !sidebar ? 0 : 0.2 }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke={mode === "dark" ? "#fff" : "#000"} d="M5.33331 16H26.6666" strokeWidth="3" />
        <path d="M18.6667 8L26.6667 16L18.6667 24" stroke={mode === "dark" ? "#fff" : "#000"} strokeWidth="3" />
      </svg>
    </motion.button>
  );
};
const Sidebar = ({ mode, onClose }: { onClose: () => void; mode: string }) => {
  const wrapBg = (opacity) => (mode === "default" ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`);
  const { pathname } = useRouter();
  return (
    <UnFocuser
      initial={{ backgroundColor: wrapBg(0) }}
      exit={{ backgroundColor: wrapBg(0) }}
      animate={{ backgroundColor: wrapBg(0.6) }}
    >
      <Playground
        mode={mode}
        initial={{ x: "120%" }}
        animate={{ x: "0%" }}
        exit={{ x: "120%" }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease,
        }}
      >
        <Vstack space={2}>
          <Hstack justifyContent="space-between">
            <Logo focused onClick={onClose} />
            <Close onClick={onClose} mode={mode} />
          </Hstack>
          <Vstack space={8}>
            <Hstack>
              <Toggle />
            </Hstack>
            <Vstack space={2}>
              {links.map((item, i) => (
                <Hstack space={1.8} style={shorten({ x: pathname.toLowerCase().slice(1) === item ? -24 : 0 })}>
                  {pathname.slice(1) === item.toLowerCase() && <Box backgroundColor="black" width={4} height={30} />}
                  <Link href={`/${item.toLowerCase()}`} key={i}>
                    <a onClick={onClose} style={shorten({ x: pathname.slice(1) === item ? -4 : 0 })}>
                      <H5>{item}</H5>
                    </a>
                  </Link>
                </Hstack>
              ))}
            </Vstack>
          </Vstack>
        </Vstack>
      </Playground>
    </UnFocuser>
  );
};
const links = ["Sandbox", "Blog", "Contact"];
const UnFocuser = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 998;
  display: flex;
  justify-content: flex-end;
`;
const Playground = styled(motion.div)`
  z-index: 999;
  width: 80%;
  right: 0px;
  position: aboslute;
  height: 100vh;
  background-color: white;
  box-sizing: border-box;
  padding: 1.4rem;
  box-shadow: ${({ mode }) =>
    mode === "dark"
      ? "0px 2px 3px rgba(255, 255,255, 0.12), 0px 2px 2px rgba(255, 255, 255, 0.24)"
      : "0px 2px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)"};
  a {
    width: fit-content;
  }
`;
export default Sidebar;
