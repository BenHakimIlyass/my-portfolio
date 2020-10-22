import * as React from "react";
import Head from "next/head";
import { Container, Hstack, Text, Vstack, Gist } from "@components";
import styled, { Box, breakpoints, css } from "@xstyled/styled-components";
import { articles } from "../../../data";
import { NextPage } from "next";
import { useContextValue } from "@hooks";
import ErrorPage from "../404";
import { pickFromObject, wrapBody } from "@utils";
import { motion } from "framer-motion";
import config from "@config";
import dynamic from "next/dynamic";

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
          </Head>
          <Vstack space={4} style={{ position: "relative", paddingBottom: 20 }}>
            <ImagePlaceholder
              initial={{ y: 70 }}
              animate={{ y: "-60vh" }}
              transition={{ ease: config.ease, duration: 2 }}
              style={{ backgroundColor: color }}
            />
            <Thumbnail src={src} />
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
                    if (has("image")) return <Image key={i} src={element.image.src} alt={element.image.alt} />;

                    // render text (i, smallP, p, h5, h4, h3, h2, h1)
                    if (!!wrapBody(element)) {
                      return (
                        <Text key={i} {...wrapBody(element)}>
                          {element[wrapBody(element).as]}
                        </Text>
                      );
                    }
                    if (has("code")) return <CodeWrapper clone="smallP">{element.code}</CodeWrapper>;
                    if (has("gist"))
                      // render github gist
                      return (
                        <div>
                          <Gist style={{ margin: "1rem 0" }} key={i} gist={`BenHakimIlyass/${element.gist}`} />
                        </div>
                      );
                    return null;
                  })}
                </Vstack>
              </Vstack>
            </Container>
          </Vstack>
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
const CodeWrapper = styled(Text)`
  background-color: lightGray;
  color: tomato !important;
  border-radius: 4px;
  width: fit-content;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.03);
  ${breakpoints({
    xs: css`
      padding: 4px;
    `,
    md: css`
      padding: 6px;
    `,
  })}
`;
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
  height: 60vh;
  position: absolute;
`;

Article.getInitialProps = async ({ query }) => {
  const articleId = query._id as string;
  return { articleId: parseInt(articleId) };
};
export default Article;
