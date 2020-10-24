import * as React from "react";
import Head from "next/head";
import { breakpoints } from "@utils";
import { Container, Text, Article, Vstack, BlogHero, Hstack, BlogSEO } from "@components";
import { withAnimation } from "../../contextProvider";
import styled, { Box } from "@xstyled/styled-components";
import { articles } from "../../../data";

const Blog = () => {
  return (
    <>
      <BlogSEO articles={articles} />
      <MainPlayground>
        <Vstack space={{ xs: 8, md: 12 }}>
          <BlogHero />
          <Container>
            <Vstack space={{ xs: 2, md: 4 }}>
              <Text clone="h3" isBold>
                Articles
              </Text>
              <Box
                forwardedAs={Hstack}
                space={2}
                justifyContent="space-between"
                flexDirection={{ xs: "column", md: "row" }}
                style={{ flexWrap: "nowrap" }}
              >
                {articles.map((props, i) => (
                  <Article {...props} key={i} />
                ))}
              </Box>
            </Vstack>
          </Container>
        </Vstack>
      </MainPlayground>
    </>
  );
};
// Chnage the y value in MainPlayground 920 breakpoint by md
const MainPlayground = styled.div`
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,24vh,0)` },
    920: `transform: translate3d(0,40vh,0);`,
  })}
`;

export default withAnimation(Blog);
