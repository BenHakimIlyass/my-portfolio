import * as React from "react";
import Head from "next/head";
import { Container, Hstack, Text, Vstack } from "@components";
import styled, { Box, breakpoints } from "@xstyled/styled-components";
import { articles } from "../../../data";
import { NextPage } from "next";
import { useContextValue } from "@hooks";
import ErrorPage from "../404";
import { pickFromObject } from "@utils";
import { motion } from "framer-motion";
import config from "@config";

import Gist from "react-gist";

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
                {/* title */}
                <Text clone="h1" isSemiBold>
                  {title}
                </Text>
                <Vstack space={1}>
                  {/* spoiler */}
                  <Text clone="p" fontStyle="italic" color="gray">
                    {spoiler}
                  </Text>
                  {body.map((element, i) => {
                    // render quote
                    if (element.hasOwnProperty("quote")) return <Quote key={i}>{element.quote}</Quote>;

                    // render bulleted list
                    if (element.hasOwnProperty("bulleted"))
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
                    if (element.hasOwnProperty("img"))
                      return <Image key={i} src={element.img.src} alt={element.img.alt} />;

                    // render text (i, smallP, p, h5, h4, h3, h2, h1)
                    if (!!wrapBody(element)) {
                      return (
                        <Text key={i} {...wrapBody(element)}>
                          {element[wrapBody(element).as]}
                        </Text>
                      );
                    }

                    // render github gist
                    if (element.hasOwnProperty("code")) return <Gist id={element.code} key={i} />;
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

const wrapBody = (
  element,
): { clone: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "smallP"; isSemiBold?: boolean; [key: string]: any } | null => {
  const has = (prop) => element.hasOwnProperty(prop);
  const wrapProps = (e, props) => (has(e) ? { clone: e, as: e, ...props } : null);
  return (
    wrapProps("h1", { isSemiBold: true }) ||
    wrapProps("h2", { isSemiBold: true }) ||
    wrapProps("h3", { isSemiBold: true }) ||
    wrapProps("h4", { isSemiBold: true }) ||
    wrapProps("h5", { isSemiBold: true }) ||
    wrapProps("p", {}) ||
    wrapProps("i", { fontSize: "italic", clone: "p", color: "gray" })
  );
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
