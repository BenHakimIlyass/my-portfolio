import * as React from "react";
import Head from "next/head";
import { Container, Hstack, Text, Vstack, Gist, Code, ArticleSEO, LinkedElement } from "@components";
import styled, { Box, breakpoints, css } from "@xstyled/styled-components";
import { articles } from "../../../data";
import { NextPage } from "next";
import { useContextValue } from "@hooks";
import ErrorPage from "../404";
import { pickFromObject, wrapBody, handleReadtime } from "@utils";
import { motion } from "framer-motion";
import config from "@config";
import Image from "next/image";

const Article: NextPage<any> = ({ articleId }) => {
  const [{ logoWillAnimate }] = useContextValue();

  const articleIsValid = !!articles.find(({ id }) => id === articleId);
  if (!articleIsValid) return <ErrorPage />;
  const article = pickFromObject(articleId, articles, "id");
  const { title, body, thumbnail, color, spoiler } = article;
  return (
    <>
      {articleIsValid && <ArticleSEO article={article} />}
      {!logoWillAnimate && articleIsValid ? (
        <>
          <Head>
            <meta name="theme-color" content={color}></meta>
          </Head>
          {!logoWillAnimate && (
            <Vstack space={4} style={{ paddingBottom: 20 }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ position: "relative" }}>
                <ImagePlaceholder
                  initial={{ y: 0 }}
                  animate={{ y: "-60vh" }}
                  transition={{ ease: config.ease, delay: 1.2, duration: 2 }}
                  style={{ backgroundColor: color }}
                />
                <Thumbnail src={thumbnail} alt={title} unsized />
              </motion.div>
              <Container style={{ maxWidth: 920 }}>
                <motion.div
                  transition={{ duration: 0.6, delay: 0.6 }}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Vstack space={2}>
                    <AuthorHeader body={body} />

                    {/* title */}
                    <Text clone="h1" isSemiBold transition="all 0.4">
                      {title}
                    </Text>
                    <Vstack space={1}>
                      {/* spoiler */}
                      <Text clone="p" fontStyle="italic" color="gray">
                        {spoiler}
                      </Text>
                      {body.map((element, i) => {
                        const has = (prop) => element.hasOwnProperty(prop);

                        // render quote
                        if (has("quote")) return <Quote key={i}>{element.quote}</Quote>;

                        // render bulleted list
                        if (has("bulleted"))
                          return (
                            <Vstack as="ul" space={1} key={i}>
                              {element.bulleted.map((item, index) => (
                                <Text clone="p" bindWith="li" key={index}>
                                  {item}
                                </Text>
                              ))}
                            </Vstack>
                          );
                        // render image
                        if (has("image"))
                          return (
                            <LinkedElement url={element.image.src} top={has("p") || has("i") ? 0 : "1rem"} key={i}>
                              <Vstack space={1} acceptOne>
                                <Img height={600} width={940} src={element.image.src} alt={element.image.alt} />
                              </Vstack>
                            </LinkedElement>
                          );

                        // render text (i, smallP, p, h5, h4, h3, h2, h1)
                        if (!!wrapBody(element)) {
                          if (element.hasOwnProperty("link"))
                            return (
                              <LinkedElement url={element.link} top={has("p") || has("i") ? 0 : "1rem"} key={i}>
                                <Text {...wrapBody(element)}>{element[wrapBody(element).as]}</Text>
                              </LinkedElement>
                            );
                          return (
                            <Text key={i} {...wrapBody(element)}>
                              {element[wrapBody(element).as]}
                            </Text>
                          );
                        }
                        if (has("code")) return <Code key={i}>{element.code}</Code>;
                        if (has("gist"))
                          return (
                            <Vstack space={1} key={i} acceptOne>
                              <Gist gist={`BenHakimIlyass/${element.gist}`} />
                            </Vstack>
                          );
                        return null;
                      })}
                    </Vstack>
                  </Vstack>
                </motion.div>
              </Container>
            </Vstack>
          )}
        </>
      ) : null}
    </>
  );
};

const Quote = ({ children }) => (
  <Hstack alignItems="center" space={2} style={{ flexWrap: "nowrap" }}>
    <Box height="1.8rem" width={4} backgroundColor="secondary" zIndex={90} />
    <Text clone="h4">{children}</Text>
  </Hstack>
);
const AuthorHeader = ({ body }) => (
  <Hstack justifyContent="space-between" alignItems="center">
    <Text clone="smallP">
      <span style={{ color: "gray", fontStyle: "italic" }}>by </span> Ilyass Ben Hakim
    </Text>
    <Hstack space={0.6} alignItems="center">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Box
          forwardedAs="path"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 19.1666C4.93739 19.1666 0.833336 15.0626 0.833336 9.99998C0.833336 4.93737 4.93739 0.833313 10 0.833313C15.0626 0.833313 19.1667 4.93737 19.1667 9.99998C19.1667 15.0626 15.0626 19.1666 10 19.1666ZM10 17.5C14.1421 17.5 17.5 14.1421 17.5 9.99998C17.5 5.85784 14.1421 2.49998 10 2.49998C5.85787 2.49998 2.5 5.85784 2.5 9.99998C2.5 14.1421 5.85787 17.5 10 17.5ZM14.1667 9.16665H10.8333V4.99998H9.16667V10.8333H14.1667V9.16665Z"
          fill="gray"
        />
      </svg>

      <Text clone="smallP" color="gray">
        {handleReadtime(body)} min read
      </Text>
    </Hstack>
  </Hstack>
);
const Thumbnail = styled(Image)`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;
const Img = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  width: 100%;
  height: 400px;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.11);
`;
const ImagePlaceholder = styled(motion.div)`
  width: 100%;
  height: calc(50vh + 32px);
  top: -10px;
  position: absolute;
`;

Article.getInitialProps = async ({ query }) => {
  const articleId = query._id as string;
  return { articleId: parseInt(articleId) };
};
export default Article;
