import * as React from "react";
import Head from "next/head";
import { Container, Text, Vstack } from "@components";
import { withAnimation } from "../../contextProvider";
import styled from "@xstyled/styled-components";
import { articles } from "../../../data";

const ID = 1;
const { title, description, src } = articles[ID];

const Article = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - Blog</title>
      </Head>

      <Vstack space={4}>
        <Thumbnail src={src} />
        <Container style={{ maxWidth: 920 }}>
          <Vstack space={2}>
            <Text clone="h1">{title}</Text>
            <Text clone="p">{description}</Text>
          </Vstack>
        </Container>
      </Vstack>
    </>
  );
};
// Chnage the y value in MainPlayground 920 breakpoint by md
const Thumbnail = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

export default withAnimation(Article);
