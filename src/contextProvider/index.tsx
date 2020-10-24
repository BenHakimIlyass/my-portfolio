import React from "react";
import reducer from "./rootReducer";

const initialState = {
  logoWillAnimate: true,
  sidebar: false,
  article: null,
};
const ContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};
export { default as withAnimation } from "./withAnimation";
export const Context = React.createContext([]);
export default ContextProvider;
