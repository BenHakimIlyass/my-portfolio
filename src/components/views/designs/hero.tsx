import React from "react";
import styled, { css } from "@xstyled/styled-components";
import { Text, Vstack, Center, Container, Button } from "../../";
import { useColorModeWrapper } from "@hooks";
import { breakpoints } from "@utils";

const DesignHero = () => {
  const handleColor = useColorModeWrapper();
  return (
    <SectionHolder>
      <HeroContainer>
        <Center intrinsic>
          <Vstack space={2}>
            <Text clone="h3" isBold textAlign="center">
              You like dribbble shots? Find me there!
            </Text>
            <Vstack space={0.3}>
              <Text textAlign="center">Discover my shots, make some likes, hire me or just take a look.</Text>
            </Vstack>

            <a href="https://dribbble.com/ilyassbh" target="_blanc">
              <Button>My diribbble</Button>
            </a>
          </Vstack>
        </Center>
      </HeroContainer>
      <Box>
        <svg height="100%" viewBox="0 0 1498 1406" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M827.25 0L827.25 1406M947.25 0L947.25 1406M1067.25 0L1067.25 1406M1187.25 0V1406M1307.25 0V1406M1427.25 0V1406M1479 50.7501L45 50.75M1479 170.75L45 170.75M1479 290.75L45 290.75M1479 410.75L45 410.75M1479 530.75L45 530.75M1479 650.75L45 650.75M110.25 0L110.25 1406M230.25 0L230.25 1406M350.25 0L350.25 1406M470.25 0L470.25 1406M590.25 0L590.25 1406M710.25 0L710.25 1406M1479 766.75L45 766.75M1479 886.75L45 886.75M1479 1006.75L45 1006.75M1479 1126.75L45 1126.75M1479 1246.75L45 1246.75M1479 1366.75L45 1366.75"
            stroke={handleColor("#000", "#fff")}
            opacity="0.2"
            strokeWidth="0.5"
            strokeDasharray="10 10"
          />
          <rect y="39" width="1498" height="1367" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="749" y1="39" x2="749" y2="1406" gradientUnits="userSpaceOnUse">
              <stop stopColor={handleColor("#fff", "#000")} stopOpacity="0" />
              <stop offset="0.734375" stopColor={handleColor("#fff", "#000")} stopOpacity="0.973958" />
              <stop offset="1" stopColor={handleColor("#fff", "#000")} />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </SectionHolder>
  );
};

const SectionHolder = styled.div`
  position: relative;
  ${breakpoints({
    0: css({ paddingBottom: 200 }),
    920: css({ paddingBottom: 400 }),
  })}
`;

const HeroContainer = styled(Container)`
  z-index: 10;
  ${breakpoints({
    0: `transform: translate3d(0,100px,0)`,
    920: `transform: translate3d(0,340px,0)`,
  })}
`;

const Box = styled.div`
  width: 100%;
  position: absolute;
  left: -100;
  ${breakpoints({
    0: `top: -140px;`,
    920: `top: -20px;`,
  })}
`;

export default DesignHero;
