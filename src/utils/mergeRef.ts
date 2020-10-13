import React from "react";

const mergeRef = <T extends any>(...refs: any[]): React.RefCallback<T> => (element: T) =>
  refs.forEach((ref) => {
    if (typeof ref === "function") ref(element);
    else if (ref && typeof ref === "object") (ref as React.MutableRefObject<T>).current = element;
  });
export default mergeRef;
