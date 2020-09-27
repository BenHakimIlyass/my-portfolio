import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTimeout } from "../../hooks";
import { AnimatedH3 } from "../";

export default function AnimatedLogo() {
  const animate = useTimeout(800);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {!animate && (
          <AnimatedH3
            isAnimated
            style={{
              left: "50%",
              marginLeft: -50,
              top: "calc(50vh - 40px)",
              position: "absolute",
              color: "#12141B",
              zIndex: 999,
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#fff",
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            Ilyass
          </AnimatedH3>
        )}
      </AnimatePresence>
      <AnimatedH3
        isAnimated
        style={{
          left: "50%",
          marginLeft: -50,
          top: "calc(50vh - 40px)",
          position: "absolute",
        }}
        layoutId="logo"
        animate
        transition={{
          duration: 2,
          ease: [0.6, 0, 0, 1],
        }}
      >
        Ilyass
      </AnimatedH3>
    </>
  );
}
