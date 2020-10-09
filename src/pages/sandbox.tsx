import * as React from "react";
import Head from "next/head";
import { SandboxHero, Container } from "../components";
import { breakpoints } from "../utils";
import { useAnimation } from "../hooks";
import styled from "@xstyled/styled-components";

const Sandbox = () => {
  const [{ logoWillAnimate }] = useAnimation();
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      {!logoWillAnimate && (
        <MainPlayground>
          <Container>
            <SandboxHero />
          </Container>
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
export default Sandbox;
