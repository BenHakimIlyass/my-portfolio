import * as React from "react";
import Head from "next/head";
import { Container, Vstack, Text, DesignCard, DesignsHero } from "@components";
import { breakpoints } from "@utils";
import { withAnimation } from "../contextProvider";
import styled, { Box } from "@xstyled/styled-components";

const Designs = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - Designs</title>
      </Head>

      <MainTextlayground>
        <Vstack space={{ xs: 4, md: 12 }}>
          <DesignsHero />

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
      </MainTextlayground>
    </>
  );
};

const MainTextlayground = styled.div`
  margin-bottom: 100px;
  margin-top:10vh;
`;

export default withAnimation(Designs);
const designs = [
  {
    src: "/designs/model.png",
    alt: "model.me hero sectoion",
    title: "Model.me - Models agaency landing page",
    link: "14572037-Model-me-Models-agaency-landing-page",
    description: `Landing page for a models agency`,
  },
  {
    src: "/designs/gfree-logo.png",
    alt: "gfree-logo",
    title: "Gfree.co - Gluten free community logo making",
    link: "14562715-Gfree-co-Gluten-free-community-logo-making",
    description: `The idea of this logo was to create a wheat leaf with a warning sign on it, but it ends with the initial letter style.
    You can check it out online at https://gfree.co`,
  },
  {
    src: "/designs/m-creative.png",
    alt: "m-creative",
    title: "M creative - An example for a simple hero section",
    link: "14562336-M-creative-An-example-for-a-simple-hero-section",
    description: `This sample is for a community website (same as Dribbble) for people interested in artistic articles...`,
  },
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
