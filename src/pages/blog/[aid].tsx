import * as React from "react";
import Head from "next/head";
import { Container, Hstack, Text, Vstack } from "@components";
import styled, { Box, breakpoints } from "@xstyled/styled-components";
import { articles } from "../../../data";
import { NextPage } from "next";
import { useContextValue, useScript } from "@hooks";
import ErrorPage from "../404";
import { pickFromObject } from "@utils";
import { motion } from "framer-motion";
import config from "@config";

import ScriptTag from "react-script-tag";

const Script = ({ src }) => <ScriptTag type="text/javascript" src={src} />;
// const Script = ({ src }) => {
//   return React.createElement("script", {
//     type: "text/javascript",
//     src:
//       "https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FBenHakimIlyass%2Freact-useheadroom%2Fblob%2Fblog_ressource%2Fsrc%2Findex.js&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on",
//   });
// };

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
          <Vstack space={4} style={{ position: "relative" }}>
            <ImagePlaceholder
              initial={{ y: 70 }}
              animate={{ y: "-60vh" }}
              transition={{ ease: config.ease, duration: 2 }}
              style={{ backgroundColor: color }}
            />
            <Thumbnail src={src} />
            <Container style={{ maxWidth: 920 }}>
              <Vstack space={2}>
                <Text clone="h1" isBold>
                  {title}
                </Text>
                <Vstack space={1}>
                  <Text clone="p" fontStyle="italic" color="gray">
                    {spoiler}
                  </Text>
                  {body.map((element, i) => {
                    if (element.hasOwnProperty("quote")) return <Quote key={i}>{element.quote}</Quote>;

                    if (element.hasOwnProperty("img"))
                      return <Image key={i} src={element.img.src} alt={element.img.alt} />;

                    if (!!wrapBody(element))
                      return (
                        <Text key={i} {...wrapBody(element)}>
                          {element[wrapBody(element).clone]}
                        </Text>
                      );
                    if (element.hasOwnProperty("code"))
                      return (
                        <ScriptTag src="https://emgithub.com/embed.js?target=https%3A%2F%2Fgithub.com%2FBenHakimIlyass%2Freact-useheadroom%2Fblob%2Fblog_ressource%2Fsrc%2Findex.js&style=github&showBorder=on&showLineNumbers=on&showFileMeta=on" />
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
const wrapBody = (element): { clone: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "smallP"; isBold?: boolean } | null => {
  const has = (prop) => element.hasOwnProperty(prop);

  if (has("h1")) return { clone: "h1", isBold: true };
  if (has("h2")) return { clone: "h2", isBold: true };
  if (has("h3")) return { clone: "h3", isBold: true };
  if (has("h4")) return { clone: "h4", isBold: true };
  if (has("h5")) return { clone: "h5", isBold: true };
  if (has("p")) return { clone: "p" };

  return null;
};
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
  width: 100%;
  ${breakpoints({
    xs: 300,
    md: 400,
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
