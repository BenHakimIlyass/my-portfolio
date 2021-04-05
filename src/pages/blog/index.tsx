import * as React from "react";
import { Container, Text, Article, Vstack, BlogHero, BlogSEO } from "@components";
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
  margin-top: 40vh;
  margin-bottom: 100px;
`;

export default withAnimation(Blog);
