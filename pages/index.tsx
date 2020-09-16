import * as React from "react";
import {
  FrontendDev,
  Minimalist,
  Contact,
  SunAndMoon,
  Nav,
  Vstack,
  SocialMedia,
} from "../components";
import { useTimeout } from "../hooks";
import { GlobalStyle } from "../globalStyles";
import Head from "next/head";

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
        <div
          style={{
            transform: `translate3d(0,10vh,0)`,
            marginBottom: 100,
          }}
        >
          <Vstack space={12}>
            <Minimalist />
            <FrontendDev />
            <SunAndMoon />
            <Contact />
          </Vstack>
        </div>
      )}
    </>
  );
};

export default App;
