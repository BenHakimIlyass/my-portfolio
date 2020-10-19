import * as React from "react";
import Head from "next/head";
import { Container, Text, Vstack } from "@components";
import { withAnimation } from "../../contextProvider";
import styled from "@xstyled/styled-components";
import { articles } from "../../../data";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContextValue } from "@hooks";
import ErrorPage from "../404";
const Article: NextPage<any> = ({ articleId }) => {
  const [{ logoWillAnimate }] = useContextValue();

  const { title, description, src } = articles.find(({ id }) => id === parseInt(articleId));
  // const  = data;
  if (!logoWillAnimate)
    return (
      <Head>
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
      </Head>
    );
  return <ErrorPage />;
};
const Thumbnail = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;

Article.getInitialProps = async ({ query }) => {
  const articleId = query._id;
  return { articleId };
};
export default Article;
