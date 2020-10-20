import React from "react";
import styled from "@xstyled/styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

import { useTimeout } from "@hooks";
import { Text } from "@components";
import configs from "@config";

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
      <a>
        <motion.div
          ref={ref}
          layoutId="logo"
          onClick={onClick}
          {...props}
          animate
          transition={{
            duration: 2,
            ease: configs.ease,
          }}
          {...handleHover()}
        >
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
        </motion.div>
      </a>
    </Link>
  );
};

export default Logo;
