import { useEffect, useState } from "react";

const useMousePosition = (deps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleEvent = (e: any) =>
      deps ? deps && setPosition({ x: e.clientX, y: e.clientY }) : setPosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleEvent);

    return () => {
      window.removeEventListener("mousemove", handleEvent);
    };
  }, [deps]);

  return position;
};
export default useMousePosition;
