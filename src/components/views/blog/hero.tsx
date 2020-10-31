import * as React from "react";
import { Text, Container, Vstack, Hstack } from "@components";
import styled, { breakpoints, css } from "@xstyled/styled-components";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <div style={{ position: "relative" }}>
      <Container>
        <Vstack space={2} style={{ zIndex: 199 }}>
          <Text clone="h4" bindWith={motion.h4} initial={{ opacity: 0 }} animate={{ opacity: 1 }} isBold>
            <span style={{ fontSize: 61 }}>“</span>
            Until I feared I would lose it, I never loved to read. One does not love breathing.
          </Text>
          <Hstack justifyContent="space-between">
            <Text clone="p">Good reading</Text>
            <Text clone="p">- Harper Lee</Text>
          </Hstack>
        </Vstack>
      </Container>
      <Box top={40}>
        <svg width="100%" height="100%" viewBox="0 0 1146 179" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1146" height="179">
            <rect width="1146" height="179" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0)">
            <motion.path
              animate={{ pathLength: 1 }}
              initial={{ pathLength: 0 }}
              transition={{ duration: 2 }}
              d="M853.901 72.5843C853.901 72.5843 851.195 90.993 849.461 102.789M849.461 102.789C853.593 102.789 855.15 82.1146 858.378 88.0748C861.008 92.931 858.19 99.0391 853.593 97.2046C848.996 95.3701 878.606 73.8134 870.042 60.7534C865.309 53.5354 856.963 105.867 863.706 100.479C863.706 100.479 877.932 75.322 875.376 80.7733C874.009 83.689 873.481 88.7268 876.696 88.9133C881.161 89.1722 881.216 76.6323 876.489 77.0301C871.482 77.4515 881.594 83.0004 884.435 79.0589C887.277 75.1173 887.583 74.9858 890.472 75.3773C890.472 75.3773 891.971 74.1321 892.177 73.0124M849.461 102.789C822.723 110.743 807.607 114.827 780.5 121.419C484.072 193.512 190.261 58.6108 0 88.913M892.177 73.0124C892.504 71.2395 891.262 77.215 890.016 79.3826C888.907 81.3129 884.704 86.0179 884.371 80.1751M892.177 73.0124C892.177 73.0124 891.805 98.7489 886.356 100.001C883.768 100.596 881.564 99.7825 881.562 97.7069C881.552 86.2832 957.113 57.3489 1010 46.3339C1062.02 35.4986 1146 41.834 1146 41.834"
              stroke="#FF7E06"
            />
          </g>
        </svg>
      </Box>
    </div>
  );
};
const Box = styled.divBox`
  ${breakpoints({
    xs: css`
      width: 180%;
    `,
    md: css`
      width: 100%;
    `,
  })}
  position: absolute;
  right: 0;
`;

export default BlogHero;
