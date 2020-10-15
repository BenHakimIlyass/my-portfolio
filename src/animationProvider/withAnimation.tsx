import { useAnimation } from "@hooks";
import React from "react";

const withAnimation = (Component) => (props) => {
  const [{ logoWillAnimate }] = useAnimation();
  return <>{!logoWillAnimate && <Component {...props} />}</>;
};
export default withAnimation;
