import React from "react";
import styled, { Box, breakpoints, css } from "@xstyled/styled-components";
import { Text, Vstack } from "../../";
import { useColorModeWrapper } from "@hooks";
import { shorten } from "@utils";
import Link from "next/link";

const shDark = (blur = 3, opacity = 0.2) =>
  `0px 0px ${blur}px rgba(255, 255,255, 0), 0px 0px ${blur}px rgba(255, 255, 255, ${opacity})`;
const shDef = (blur = 3, opacity = 0.18) =>
  `0px 0px ${blur}px rgba(0, 0, 0, 0), 0px 0px ${blur}px rgba(0, 0, 0, ${opacity})`;

const bgImageDef = `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)`;
const bgImageDark = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`;

const Article = ({ src, id, title, description }) => {
  const handleColor = useColorModeWrapper();

  return (
    <Link href={`/blog/${title.replace(/ /g, "_")}?_id=${id}`}>
      <Wrapper
        style={{ boxShadow: handleColor(shDef(), shDark()) }}
        bgImage={handleColor(bgImageDef, bgImageDark)}
        onHover={handleColor(shDef(10), shDark(10))}
      >
        <Vstack space={2}>
          <Thumbnail src={src} alt={title} draggable={false} />
          <Box forwardedAs={Vstack} space={{ xs: 1, md: 2 }} px={5} pb={5}>
            <Text clone="h4" isBold>
              {title}
            </Text>
            <Text clone="p">
              {description.slice(0, 140)}
              {description.length > 140 ? "..." : ""}
            </Text>
          </Box>
        </Vstack>
      </Wrapper>
    </Link>
  );
};

const Thumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  ${breakpoints({
    xs: css`
      height: 100px;
    `,
    md: css`
      height: 180px;
    `,
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: primary;
  transition: all 0.4s;
  &::after {
    content: "";
    background-image: ${({ bgImage }) => bgImage};
    position: absolute;
    bottom: -1;
    z-index: 100;
    height: 100px;
    overflow: hidden;
    width: 100%;
  }
  &:hover {
    ${css(shorten({ y: -10 }))};
    box-shadow: ${({ onHover }) => onHover} !important;
  }
  ${breakpoints({
    xs: css`
      height: 280px;
    `,
    md: css`
      height: 380px;
    `,
  })}
`;

export default Article;
