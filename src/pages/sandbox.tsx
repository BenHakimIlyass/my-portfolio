import * as React from "react";
import Head from "next/head";
import {
  SandboxHero,
  Container,
  Vstack,
  P,
  H4,
  SunAndMoon,
} from "../components";
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
            <Vstack space={12}>
              <SandboxHero />
              <Vstack space={2}>
                <H4>Sun & moon</H4>
                <P>This repository is made with framer-motion and svg.</P>
                <img
                  src="/icons/codesandbox.svg"
                  draggable={false}
                  style={{ alignSelf: "flex-start" }}
                />
                <SunAndMoon />
              </Vstack>
            </Vstack>
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
