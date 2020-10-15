import React from "react";
import reducer from "./animationReducer";

const initialState = {
  logoWillAnimate: true,
  sidebar: false,
};
const AnimationProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <AnimationContext.Provider value={[state, dispatch]}>{children}</AnimationContext.Provider>;
};
export { default as withAnimation } from "./withAnimation";
export const AnimationContext = React.createContext([]);
export default AnimationProvider;
