import React from "react";
import { useTimeout, useAnimation } from "../../hooks";

import configs from "../../configs";
import Link from "next/link";
import { AnimatedH4 } from "../";
import { motion } from "framer-motion";
const ease = [0.6, 0, 0, 1];

const Logo = ({ focused, onClick, ...props }: { focused?: boolean; onClick?: () => void }) => {
  const [logoHoverState, hover] = React.useState(false);
  const logoHiddenLettersState = useTimeout(configs.animationDelay);

  const handleHover = () =>
    logoHiddenLettersState && {
      onMouseEnter: () => hover(true),
      onMouseLeave: () => hover(false),
    };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (focused) ref.current.focus();
  }, []);
  return (
    <Link href="/">
      <a ref={ref} onClick={onClick}>
        <AnimatedH4
          {...props}
          animate
          transition={{
            duration: 2,
            ease: [0.6, 0, 0, 1],
          }}
          layoutId="logo"
          {...handleHover()}
          isAnimated
        >
          .il
          <motion.span
            transition={{
              type: "tween",
            }}
            animate={{
              opacity: !logoHiddenLettersState ? 1 : logoHiddenLettersState && logoHoverState ? 1 : 0,
            }}
          >
            yass
          </motion.span>
        </AnimatedH4>
      </a>
    </Link>
  );
};

export default Logo;
