import * as React from "react";
import Head from "next/head";
import { withAnimation } from "../animationProvider";
import { breakpoints } from "../utils";
import styled from "@xstyled/styled-components";
import { HomeHero, Vstack, Container, Technologies, Experiences } from "../components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      {/* Main sections */}
      <MainPlayground>
        <Vstack space={{ xs: 8, md: 12 }}>
          <HomeHero />
          <Container>
            <Experiences />
          </Container>
          <Container>
            <Technologies />
          </Container>
        </Vstack>
      </MainPlayground>
    </>
  );
};
const MainPlayground = styled.div`
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,10vh,0);`,
  })}
  margin-bottom: 100px;
`;

export default withAnimation(HomePage);
