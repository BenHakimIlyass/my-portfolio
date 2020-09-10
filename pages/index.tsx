import * as React from "react";
import {
  FrontendDev,
  Minimalist,
  Contact,
  Nav,
  Vstack,
  SocialMedia,
  P,
} from "../components";
import Headroom from "react-headroom";
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
      <GlobalStyle />
      <Headroom>
        <Nav />
      </Headroom>
      <SocialMedia />

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
            <Contact />
          </Vstack>
        </div>
      )}
    </>
  );
};

export default App;
