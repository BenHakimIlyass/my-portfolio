import * as React from "react";
import styled from "@xstyled/styled-components";
import { motion } from "framer-motion";
import { Text } from "@components";
import config from "@config";

export default function AnimatedLogo() {
  return (
    <motion.div
      layoutId="logo"
      style={{
        left: "50%",
        marginLeft: -50,
        top: "calc(50vh - 40px)",
        position: "absolute",
        zIndex: 999,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: config.ease }}
    >
      <Text isBold clone="h4">
        .ilyass
      </Text>
    </motion.div>
  );
}
