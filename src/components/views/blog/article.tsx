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

const Article = ({ src, id, title, spoiler }) => {
  const handleColor = useColorModeWrapper();

  return (
    <Link href={`/blog/${title.replace(/ /g, "_")}?_id=${id}`}>
      <Wrapper style={{ boxShadow: handleColor(shDef(), shDark()) }} onHover={handleColor(shDef(10), shDark(10))}>
        <Vstack space={2}>
          <Thumbnail src={src} alt={title} draggable={false} />
          <Box forwardedAs={Vstack} space={{ xs: 1, md: 2 }} px={5} pb={5}>
            <Title clone="h4" isBold>
              {title}
            </Title>
            <Body clone="p">{spoiler}</Body>
          </Box>
        </Vstack>
      </Wrapper>
    </Link>
  );
};
const lineClamp = css`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  width: auto;
`;
const Body = styled(Text)`
  ${lineClamp}
`;
const Title = styled(Text)`
  ${lineClamp}
`;
const Thumbnail = styled.img`
  object-fit: cover;
  width: 100%;
  ${breakpoints({
    xs: css`
      height: 140px;
    `,
    md: css`
      height: 180px;
    `,
  })}
`;
const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background-color: primary;
  transition: all 0.4s;
  padding-bottom: 2rem;
  &:hover {
    ${css(shorten({ y: -10 }))};
    box-shadow: ${({ onHover }) => onHover} !important;
  }
  ${breakpoints({
    xs: css`
      height: 260px;
    `,
    md: css`
      width: 100%;
      height: 320px;
    `,
  })}
`;

export default Article;
