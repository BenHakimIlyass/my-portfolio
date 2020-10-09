import * as React from "react";
import Head from "next/head";
import { useTimeout, useAnimation } from "../hooks";
import { breakpoints, scrollToElementById } from "../utils";
import styled from "@xstyled/styled-components";
import {
  FrontendDev,
  Minimalist,
  Contact,
  SunAndMoon,
  Vstack,
} from "../components";
import { useRouter } from "next/router";

const App = () => {
  const [{ logoWillAnimate }] = useAnimation();
  const router = useRouter();
  React.useEffect(() => {
    router.pathname === "/#contact" && scrollToElementById("contact_section");
  }, []);
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      {/* Main sections */}
      {!logoWillAnimate && (
        <MainPlayground>
          <Vstack space={12}>
            <Minimalist />
            <FrontendDev />
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
    920: `transform: translate3d(0,10vh,0);`,
  })}
`;
export default App;
