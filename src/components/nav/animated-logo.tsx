import * as React from "react";
import styled from "@xstyled/styled-components";
import { motion } from "framer-motion";
import { Text } from "@components";

const ease = [0.6, 0, 0, 1];

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
      transition={{ duration: 1, ease }}
    >
      <Text isBold clone='h4'>.ilyass</Text>
    </motion.div>
  );
}
