import React from "react";
import styled from "@xstyled/styled-components";
import { AnimatedH4, P, Vstack } from "../../";
import { motion } from "framer-motion";
import { useColorModeWrapper } from "@hooks";

const shDark = "0px 2px 3px rgba(255, 255,255, 0), 0px 2px 2px rgba(255, 255, 255, 0.14)";
const shDef = "0px 2px 3px rgba(0, 0, 0, 0), 0px 1px 2px rgba(0, 0, 0, 0.08)";

const Article = ({ src, title, description }) => {
  const handleColor = useColorModeWrapper();
  return (
    <Wrapper style={{ boxShadow: handleColor(shDef, shDark) }}>
      <Vstack space={4}>
        <Thumbnail src={src} alt={title} />
        <AnimatedH4>{title}</AnimatedH4>
        <P>{description}</P>
      </Vstack>
    </Wrapper>
  );
};
const Thumbnail = styled(motion.img)`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: primary;
`;

export default Article;
