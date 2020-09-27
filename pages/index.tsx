import * as React from "react";
import Head from "next/head";
import { useTimeout } from "../hooks";
import { GlobalStyle } from "../globalStyles";
import { breakpoints } from "../utils";
import styled from "styled-components";
import {
  FrontendDev,
  Minimalist,
  Contact,
  SunAndMoon,
  Nav,
  Vstack,
  SocialMedia,
} from "../components";

const App = () => {
  const logoAnimationEnds = useTimeout(4000);
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>
      {/* Global style */}
      <GlobalStyle />

      {/* The header */}
      <Nav />

      {/* Contact informations */}
      <SocialMedia />

      {/* Main sections */}
      {logoAnimationEnds && (
        <MainPlayground>
          <Vstack space={12}>
            <Minimalist />
            <FrontendDev />
            <SunAndMoon />
            <Contact />
          </Vstack>
        </MainPlayground>
      )}
    </>
  );
};
const MainPlayground = styled.div`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,30vh,0)` },
    520: {
      transform: `translate3d(0,10vh,0)`,
    },
  })}
`;
export default App;
