import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import useClipboard from "react-use-clipboard";
import useHeadroom from "react-useheadroom";

import { Hstack, Container } from "../";

const SocialMedia = () => {
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
    let timeout = setTimeout(
      () => setCopyState({ firstClick: false, secondClick: false }),
      1800
    );
    return () => clearTimeout(timeout);
  }, [copyState]);

  React.useEffect(() => setDelayState(true), []);
  const isShown = useHeadroom({});
  return (
    <Wrapper
      style={{
        transform: isShown
          ? `translate3d(0px,0px,0px)`
          : `translate3d(0px,80px,0px)`,
      }}
    >
      <Container>
        <Hstack space={2}>
          {data.map(({ src, alt, href }, key) => (
            <a href={href} target="_blanc">
              <motion.img
                src={src}
                key={key}
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: delayState ? 0 : key * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                alt={alt}
                draggable={false}
              />
            </a>
          ))}
          <div>
            <AnimatePresence exitBeforeEnter>
              {copyState.firstClick && (
                <CopyIndicator
                  initial={{ opacity: 0, y: 40, x: 40 }}
                  animate={{ opacity: 1, y: 30, x: 40 }}
                  exit={{ opacity: 0, y: 80, x: 40 }}
                >
                  {copyState.secondClick
                    ? "Email copied !"
                    : "Double click to copy my email"}
                </CopyIndicator>
              )}
            </AnimatePresence>
            <motion.img
              src="/icons/mail.svg"
              onClick={handleCopy}
              initial={{ y: 100 }}
              style={{ cursor: "pointer" }}
              animate={{ y: 0 }}
              transition={{ delay: delayState ? 0 : 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              alt="Email"
              draggable={false}
            />
          </div>
        </Hstack>
      </Container>
    </Wrapper>
  );
};
const data = [
  {
    src: "/icons/github.svg",
    alt: "Github",
    href: "https://github.com/BenHakimIlyass",
  },
  {
    src: "/icons/twitter.svg",
    alt: "Twitter",
    href: "https://twitter.com/dinasso1",
  },
  {
    src: "/icons/linkedIn.svg",
    alt: "LinkedIn",
    href:
      "https://www.linkedin.com/in/ilyass-ben-hakim-%E2%9A%9B%EF%B8%8F-859480160/",
  },
];
const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  padding-top: 34px;
  box-sizing: border-box;
  height: 80px;
  z-index: 100;
  left: 0%;
  width: 100%;
  transition: all 0.3s;
  background-image: linear-gradient(
    0deg,
    #0a0a0c 0%,
    rgba(10, 10, 12, 0.282717) 59.38%,
    rgba(10, 10, 12, 0.183781) 68.75%,
    rgba(10, 10, 12, 0.107444) 79.17%,
    rgba(10, 10, 12, 0.03125) 92.71%,
    rgba(10, 10, 12, 0.0133929) 95.31%,
    rgba(10, 10, 12, 0) 100%
  );
`;
const CopyIndicator = styled(motion.div)`
  height: 30px;
  position: absolute;
  padding: 0 8px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.67);
  color: #fff;
  border-radius: 8px;
  z-index: 200;
  bottom: 50px;
  line-height: 30px;
  background-color: #000;
  user-select: none;
  font-size: 12px;
`;
export default SocialMedia;
