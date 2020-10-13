import React from "react";
import { AnimationContext } from "../animationProvider";

const useAnimation = () => {
  const context = React.useContext(AnimationContext);
  if (context === undefined)
    throw new Error("useAnimation should be inside the AnimationProvider");
  return context;
};
export default useAnimation;
