import React from "react";
import { Context } from "../contextProvider";

const useContextValue = () => {
  const context = React.useContext(Context);
  if (context === undefined) throw new Error("useContextValue should be inside the AnimationProvider");
  return context;
};
export default useContextValue;
