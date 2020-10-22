import * as React from "react";
import Head from "next/head";
import { Container, Hstack, Text, Vstack, Gist, Code } from "@components";
import styled, { Box, breakpoints, css } from "@xstyled/styled-components";
import { articles } from "../../../data";
import { NextPage } from "next";
import { useContextValue } from "@hooks";
import ErrorPage from "../404";
import { pickFromObject, wrapBody } from "@utils";
import { motion } from "framer-motion";
import config from "@config";

const Article: NextPage<any> = ({ articleId }) => {
  const [{ logoWillAnimate }] = useContextValue();

  const articleIsValid = !!articles.find(({ id }) => id === articleId);
  if (!articleIsValid) return <ErrorPage />;

  const { title, body, src, color, spoiler } = pickFromObject(articleId, articles, "id");
  return (
    <div>
      {!logoWillAnimate && articleIsValid ? (
        <>
          <Head>
            <title>Ilyass Ben Hakim - {title}</title>
            <meta name="theme-color" content={color}></meta>
          </Head>
          {!logoWillAnimate && (
            <motion.div
              transition={{ delay: 1, duration: 1 }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Vstack space={4} style={{ position: "relative", paddingBottom: 20 }}>
                <ImagePlaceholder
                  initial={{ y: 70 }}
                  animate={{ y: "-60vh" }}
                  transition={{ ease: config.ease, delay: 2, duration: 2 }}
                  style={{ backgroundColor: color }}
                />
                <Thumbnail src={src} alt={title} />
                <Container style={{ maxWidth: 920 }}>
                  <Vstack space={2}>
                    {/* title */}
                    <Text clone="h1" isSemiBold transition="all 0.4" whileHover={{ opacity: 0 }}>
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
                            <Vstack space={1} acceptOneChild>
                              <Image key={i} src={element.image.src} alt={element.image.alt} />
                            </Vstack>
                          );

                        // render text (i, smallP, p, h5, h4, h3, h2, h1)
                        if (!!wrapBody(element)) {
                          return (
                            <Text key={i} {...wrapBody(element)}>
                              {element[wrapBody(element).as]}
                            </Text>
                          );
                        }
                        if (has("code")) return <Code>{element.code}</Code>;
                        if (has("gist"))
                          return (
                            <Vstack space={1} acceptOneChild>
                              <Gist key={i} gist={`BenHakimIlyass/${element.gist}`} />
                            </Vstack>
                          );
                        return null;
                      })}
                    </Vstack>
                  </Vstack>
                </Container>
              </Vstack>
            </motion.div>
          )}
        </>
      ) : null}
    </div>
  );
};
// gistId={`gist-${element.gist}

const Quote = ({ children }) => (
  <Hstack alignItems="center" space={2} style={{ flexWrap: "nowrap" }}>
    <Box height="1.8rem" width={4} backgroundColor="secondary" zIndex={90} />
    <Text clone="h4">{children}</Text>
  </Hstack>
);

const Thumbnail = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`;
const Image = styled.img`
  object-fit: cover;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.11);
  ${breakpoints({
    xs: css`
      height: 300px;
    `,
    md: css`
      height: 500px;
    `,
  })}
`;
const ImagePlaceholder = styled(motion.div)`
  width: 100%;
  height: calc(60vh + 32px);
  top: -10px;
  position: absolute;
`;

Article.getInitialProps = async ({ query }) => {
  const articleId = query._id as string;
  return { articleId: parseInt(articleId) };
};
export default Article;
