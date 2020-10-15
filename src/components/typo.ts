import styled, { css, breakpoints } from "@xstyled/styled-components";
import { motion } from "framer-motion";

const alignement = css`
  text-align: ${({ direction }: { direction?: "center" | "right" }) => (direction ? direction : "left")};
`;
const handleRevertCase = ({ revert }) =>
  revert
    ? css`
        color: primary !important;
      `
    : css`
        color: secandary !important;
      `;

export const Paragraph = (props) => css`
  ${handleRevertCase(props)}
  font-size: 1.1rem;
  ${alignement}
  color:secondary;
  ${breakpoints({
    xs: { fontSize: "0.9rem", lineHeight: "calc(0.9rem + 0.9rem * 0.4)" },
    md: { fontSize: "1.1rem", lineHeight: "calc(1.1rem + 1.1rem * 0.4)" },
  })}
`;
export const SmallP = css`
  color: secondary;
  ${alignement}
  ${breakpoints({
    xs: { fontSize: "0.9rem", lineHeight: "calc(0.9rem + 0.9rem * 0.4)" },
    md: { fontSize: "1rem", lineHeight: "calc(1rem + 1rem * 0.4)" },
  })}
`;

const Header = css`
  color: secondary;
  font-size: 3.4rem;
  font-weight: 700;
  ${(props) => handleRevertCase(props)}
  line-height: 4rem;
  ${alignement}
`;
const Header3 = css`
  color: secondary;
  font-size: 36px;
  ${(props) => handleRevertCase(props)}
  line-height: calc(36px + 36px * 0.4);
  ${({ isAnimated }) => !!isAnimated && `font-size: 36px;line-height: calc(36px + 36px * 0.4);`}
  ${alignement}
    ${({ isAnimated }) =>
    !!!isAnimated &&
    breakpoints({
      xs: { fontSize: "1.8rem", lineHeight: "calc(1.8rem + 1.8rem * 0.4)" },
      md: { fontSize: 36, lineHeight: "calc(36px + 36px * 0.4)" },
    })}
`;
const Header4 = css`
  ${breakpoints({
    xs: { fontSize: "1.6rem", lineHeight: "calc(1.6rem + 1.6rem * 0.4)" },
    md: { fontSize: "1.8rem", lineHeight: "calc(1.8rem + 1.8rem * 0.4)" },
  })}
  color: secondary;
  ${(props) => handleRevertCase(props)}
  line-height: 2.2rem;
  ${alignement}
`;
const Header5 = css`
  font-size: 1.2rem;
  ${(props) => handleRevertCase(props)}
  color:secondary;
  line-height: 1.8rem;
  ${alignement}
`;
export const P = styled.p`
  ${Paragraph}
`;
export const AnimatedP = styled(motion.p)`
  ${Paragraph}
`;
export const AnimatedH1 = styled(motion.h1)`
  ${Header}
`;
export const H1 = styled.h1`
  ${Header}
`;
export const AnimatedH3 = styled(motion.h3)`
  ${Header3}
`;
export const H3 = styled.h3`
  ${Header3}
`;
export const AnimatedH4 = styled(motion.h4)`
  ${Header4}
`;
export const H4 = styled.h4`
  ${Header4}
`;
export const H5 = styled.h5`
  ${Header5}
`;
