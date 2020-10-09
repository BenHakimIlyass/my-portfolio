import { useEffect, useState } from "react";
import { useHover } from ".";

const useMousePosition = (): [
  {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  },
  { x: number; y: number }
] => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setMount] = useState(false);
  const [events, isHovered] = useHover();

  useEffect(() => {
    const handleEvent = (e: any) =>
      isHovered && isMounted && setPosition({ x: e.clientX, y: e.clientY });

    let timeout = setTimeout(() => setMount(true), 600);

    window.addEventListener("mousemove", handleEvent);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleEvent);
    };
  }, [isMounted, isHovered]);

  return [events, position];
};
export default useMousePosition;
