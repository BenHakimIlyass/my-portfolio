import React from "react";
import reducer from "./animationReducer";
const initialState = {
  logoWillAnimate: true,
};
export const AnimationContext = React.createContext([]);
const AnimationProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AnimationContext.Provider value={[state, dispatch]}>
      {children}
    </AnimationContext.Provider>
  );
};
export default AnimationProvider;
