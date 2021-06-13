import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { useTimeout, useContextValue } from "@hooks";
import { Text } from "@components";
import configs from "@config";

const Logo = ({ focused, onClick }: { focused?: boolean; onClick?: () => void }) => {
  const logoHiddenLettersState = useTimeout(configs.animationDelay);
  const [{ logoWillAnimate }] = useContextValue();

  const [logoHoverState, hover] = React.useState(false);
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
      <a {...handleHover()} ref={ref}>
        {logoHiddenLettersState || !logoWillAnimate ? (
          <Text clone="h4" isBold>
            <span>.il</span>
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
          </Text>
        ) : (
          <motion.div
            layoutId="logo"
            onClick={onClick}
            {...props}
            animate
            transition={{
              duration: 2,
              ease: configs.ease,
            }}
          >
            <Text clone="h4" isBold>
              .ilyass
            </Text>
          </motion.div>
        )}
      </a>
    </Link>
  );
};

export default Logo;
