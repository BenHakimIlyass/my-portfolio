import * as React from "react";
import { AnimatedH4 } from "../";

export default function AnimatedLogo() {
  return (
    <AnimatedH4
      isAnimated
      style={{
        left: "50%",
        marginLeft: -50,
        top: "calc(50vh - 40px)",
        position: "absolute",
        zIndex: 999,
      }}
      initial={{ filter: "blur(4px)", scale: 2 }}
      animate={{ filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 1 }}
      layoutId="logo"
    >
      .ilyass
    </AnimatedH4>
  );
}
