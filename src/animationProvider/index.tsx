import React from "react";
import reducer from "./animationReducer";
const initialState = {
  logoWillAnimate: true,
  sidebar: false,
};
export const AnimationContext = React.createContext([]);
const AnimationProvider = ({ children }: { children: React.Element | React.Element[] }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <AnimationContext.Provider value={[state, dispatch]}>{children}</AnimationContext.Provider>;
};
export default AnimationProvider;
