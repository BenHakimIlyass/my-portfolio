import * as React from "react";
import Head from "next/head";
import { breakpoints } from "../utils";
import { Container, H4, Article, P, Vstack, BlogHero } from "@components";
import { withAnimation } from "../animationProvider";
import styled from "@xstyled/styled-components";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
      </Head>

      <MainPlayground>
        <Vstack space={{ xs: 8, md: 12 }}>
          <BlogHero />
          <Container>
            <H4>Articles</H4>
          </Container>
        </Vstack>
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
