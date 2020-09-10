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
          }}
        >
          <Vstack space={12}>
            <Minimalist />
            <FrontendDev />
            <P direction="center">
              Keep in mind that this portfolio is designed and developed by me,
              using Figma (prototyping) and React Next Typescript (web
              developement).
            </P>
            <Contact />
          </Vstack>
        </div>
      )}
    </>
  );
};

export default App;
