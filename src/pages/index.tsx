import * as React from "react";
import Head from "next/head";
import { withAnimation } from "../contextProvider";
import { breakpoints } from "../utils";
import styled from "@xstyled/styled-components";
import { HomeHero, Vstack, Container, Technologies, Experiences,Career } from "../components";


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
            <Career />
          </Container>
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
  margin-top: 10vh;
  margin-bottom: 100px;
`;

export default withAnimation(HomePage);
