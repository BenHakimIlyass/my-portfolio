import { useContextValue } from "@hooks";
import React from "react";

const withAnimation = (Component) => (props) => {
  const [{ logoWillAnimate }] = useContextValue();
  return <>{!logoWillAnimate && <Component {...props} />}</>;
};
export default withAnimation;
