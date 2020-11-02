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
          <Container>
            <Vstack space={{ xs: 2, md: 4 }}>
              <Text clone="h3" isBold>
                Dribbble shots
              </Text>
              <Box mx={-16} row>
                {designs.map((props, i) => (
                  <Box col={{ xs: 1, md: 1 / 2 }} my={{ xs: "2rem", md: "4rem" }} p={8}>
                    <DesignCard {...props} key={i} />
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
  {
    src: "/designs/wevops-home.png",
    alt: "wevops-home",
    title: "Wevops landing page",
    link: "14505370-Wevops-landing-page",
    description: `Clean and simple hero section for Wevops company.`,
  },
  {
    src: "/designs/wevops-academy.png",
    alt: "simple-ui",
    title: "Wevops academy landing page",
    link: "14505385-Wevops-academy-landing-page",
    description: `A minimalist hero section for the academy page of Wevops company.`,
  },
  {
    src: "/designs/wevops-logo.png",
    alt: "wevops-logo",
    title: "Wevops Initial based logo",
    link: "14505722-Wevops-Initial-based-logo",
    description: `A logo based on the first letter of the company name "Wevops" (Initial based logo)`,
  },
];
export default withAnimation(Blog);
