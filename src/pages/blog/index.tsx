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
          <Container>
            <Vstack space={{ xs: 2, md: 4 }}>
              <Text clone="h3" isBold>
                Dribbble shots
              </Text>
              <Box
                forwardedAs={Hstack}
                space={2}
                justifyContent="space-between"
                flexDirection={{ xs: "column", md: "row" }}
                style={{ flexWrap: "nowrap" }}
              >
                {designs.map((props, i) => (
                  <DesignCard {...props} key={i} />
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
const designs = [
  {
    src: "/designs/simple-ui.png",
    alt: "simple-ui",
    title: "Simple UI hero section",
    link: "14492195-Simple-UI-hero-section",
    description: `A simple (not easy) example of a hero section.`,
  },
  {
    src: "/designs/recipe.png",
    alt: "recipe hero section",
    title: "Recipe hero section",
    link: "14495159-Recipe-hero-section",
    description: `Based on Gfree.co recipe style, I created this hero section to describe the recipe details.`,
  },
];
export default withAnimation(Blog);
