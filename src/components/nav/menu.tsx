import React from "react";
import { motion } from "framer-motion";
import { useColorModeWrapper } from "@hooks";

type Props = { sidebar: boolean; onClick: () => void };

const Menu = ({ onClick, sidebar }: Props) => {
  const handleColor = useColorModeWrapper();

  const wrapFill = { fill: handleColor("#000", "#fff") };
  const wrapMotions = (i: number, a: number) => ({
    initial: { x: i },
    animate: { x: sidebar ? i : a },
    transition: { delay: sidebar ? 0 : 0.4 },
  });

  return (
    <button onClick={onClick}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Path {...wrapMotions(-16, 0)} d="M19 7H30V10H19V7Z" {...wrapFill} />
        <Path {...wrapMotions(16, 0)} d="M3 23H13V26H3V23Z" {...wrapFill} />
        <path d="M3 15H30V18H3V15Z" {...wrapFill} />
      </svg>
    </button>
  );
};
const Path = motion.path;
export default Menu;
