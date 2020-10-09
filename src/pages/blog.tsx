import * as React from "react";
import Head from "next/head";
import { breakpoints } from "../utils";
import { Container } from "../components";
import { useAnimation } from "../hooks";
import styled from "@xstyled/styled-components";

const Blog = () => {
  const [{ logoWillAnimate }] = useAnimation();
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      {!logoWillAnimate && (
        <MainPlayground>
          <Container>
            <h1>blog</h1>
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
export default Blog;
