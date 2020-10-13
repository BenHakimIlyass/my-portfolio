import React from "react";

type Obj = { execute: (...args: any[]) => void; delay: number };

const useTimeout = (props: number | Obj, deps?: any[]) => {
  const [state, set] = React.useState(false);
  React.useEffect(() => {
    // if the props given is a number, the hook will return a state
    // which will be updated after the delay given
    if (typeof props === "number") {
      let timeout = setTimeout(() => set(true), props);

      return () => clearTimeout(timeout);
    }
    // if the props given is an object then we will run
    // the execute property after the delay property
    if (typeof props === "object") {
      const { execute, delay } = props;

      let timeout = setTimeout(execute, delay);
      return () => clearTimeout(timeout);
    }
  }, [props, deps]);

  if (typeof props === "number") return state;
};
export default useTimeout;
