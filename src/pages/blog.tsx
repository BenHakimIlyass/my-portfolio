import * as React from "react";
import Head from "next/head";
import { breakpoints } from "../utils";
import { Container, H4 } from "@components";
import { withAnimation } from "../animationProvider";
import styled from "@xstyled/styled-components";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      <MainPlayground>
        <Container>
          <H4 direction="center">I'm working on something useful ...</H4>
        </Container>
      </MainPlayground>
    </>
  );
};
// Chnage the y value in MainPlayground 920 breakpoint
const MainPlayground = styled.div`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,40vh,0)` },
    920: `transform: translate3d(0,40vh,0);`,
  })}
`;
export default withAnimation(Blog);
