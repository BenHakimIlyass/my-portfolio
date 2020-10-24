import { useContextValue } from "@hooks";
import React from "react";

const withAnimation = (Component) => (props) => {
  const [{ logoWillAnimate }] = useContextValue();

  if (!logoWillAnimate) return <Component {...props} />;
  return null;
};
export default withAnimation;
