import * as React from "react";
import { breakpoints } from "@utils";
import { Container, Text, Article, Vstack, BlogHero, Hstack, BlogSEO, DesignCard } from "@components";
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
              <Box mx={-16} row>
                {articles.map((props, i) => (
                  <Box col={{ xs: 1, md: 1 / 2 }} my={{ xs: "2rem", md: "4rem" }} p={8}>
                    <Article {...props} key={i} />
                  </Box>
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
