import React from "react";
import styled, { useDown } from "@xstyled/styled-components";
import { motion, AnimatePresence } from "framer-motion";
import useClipboard from "react-use-clipboard";
import useHeadroom from "react-useheadroom";
import { useColorModeWrapper } from "@hooks";

import { Hstack, Container } from "../";
import { repeate } from "../../utils";
import Icon from "./icons";

const SocialMediaIcons = (props) => {
  const [copyState, setCopyState] = React.useState({
    firstClick: false,
    secondClick: false,
  });
  const [delayState, setDelayState] = React.useState(false);
  const [_, setCopied] = useClipboard("ilyassbenhakim2@gmail.com");

  const handleCopy = () => {
    if (copyState.firstClick) {
      setCopyState({ ...copyState, secondClick: true });
      setCopied();
    }
    if (!copyState.firstClick) setCopyState({ ...copyState, firstClick: true });
  };

  React.useEffect(() => {
    let timeout = setTimeout(() => setCopyState({ firstClick: false, secondClick: false }), 1800);
    return () => clearTimeout(timeout);
  }, [copyState]);

  React.useEffect(() => setDelayState(true), []);
  const handleColor = useColorModeWrapper();

  return (
    <Hstack space={2} alignItems="center" {...props}>
      {data.map(({ icon, href }, key) => (
        <motion.a
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          style={{ width: 24, height: 24, willChange: "transform" }}
          transition={{ delay: delayState ? 0 : key * 0.1, type: "tween" }}
          whileHover={{ scale: 1.1 }}
          href={href}
          target={href === "#" ? "" : "_blanc"}
          onClick={() => href === "#" && handleCopy()}
        >
          <Icon icon={icon} style={{ fill: handleColor("#000", "#fff") }} />
        </motion.a>
      ))}
      <div>
        <AnimatePresence exitBeforeEnter>
          {copyState.firstClick && (
            <CopyIndicator
              initial={{ opacity: 0, y: 40, x: copyState.secondClick ? 120 : 40 }}
              animate={{ opacity: 1, y: -10, x: copyState.secondClick ? 120 : 40 }}
              exit={{ opacity: 0, y: 80, x: copyState.secondClick ? 120 : 40 }}
            >
              {copyState.secondClick ? "Email copied !" : "Double click to copy my email"}
            </CopyIndicator>
          )}
        </AnimatePresence>
      </div>
    </Hstack>
  );
};

const data = [
  {
    icon: "github",
    href: "https://github.com/BenHakimIlyass",
  },
  {
    icon: "twitter",
    href: "https://twitter.com/dinasso1",
  },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/ilyass-ben-hakim-%E2%9A%9B%EF%B8%8F-859480160/",
  },
  {
    icon: "mail",
    href: "#",
  },
];
export const SocialMediaBar = styled((props) => {
  const isShown = useHeadroom({});
  const handleColor = useColorModeWrapper();

  return (
    <div
      {...props}
      style={{
        backgroundImage: handleColor(
          repeate(`linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%)`, 2),
          repeate(`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`, 2),
        ),
        transform: isShown ? `translate3d(0px,0px,0px)` : `translate3d(0px,80px,0px)`,
      }}
    >
      <Container>
        <SocialMediaIcons />
      </Container>
    </div>
  );
})`
  position: fixed;
  bottom: 0px;
  padding-top: 34px;
  box-sizing: border-box;
  height: 80px;
  z-index: 900;
  left: 0%;
  width: 100%;
  transition: all 0.3s;
  a {
    padding: 4px;
    border-radius: 8px;
  }
  button {
    border-radius: 8px;
  }
`;
const CopyIndicator = styled(motion.div)`
  height: 30px;
  position: absolute;
  padding: 0 12px;
  width: fit-content;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  z-index: 200;
  left: 0;
  bottom: 50px;
  line-height: 30px;
  font-weight: 500;
  color: primary;
  background-color: secondary;
  user-select: none;
  font-size: 12px;
`;
