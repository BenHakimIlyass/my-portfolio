import React from "react";
import styled, { Box, breakpoints, css } from "@xstyled/styled-components";
import { Text, Vstack } from "../../";
import { useColorModeWrapper } from "@hooks";
import { shorten, createUrlFromTitle } from "@utils";
import Link from "next/link";
import Image from "next/image";

const shDark = (blur = 3, opacity = 0.2) =>
  `0px 0px ${blur}px rgba(255, 255,255, 0), 0px 0px ${blur}px rgba(255, 255, 255, ${opacity})`;
const shDef = (blur = 3, opacity = 0.18) =>
  `0px 0px ${blur}px rgba(0, 0, 0, 0), 0px 0px ${blur}px rgba(0, 0, 0, ${opacity})`;

const Article = ({ thumbnail, id, title, spoiler }) => {
  const handleColor = useColorModeWrapper();

  return (
    <Link href={createUrlFromTitle({ id, title })}>
      <Wrapper style={{ boxShadow: handleColor(shDef(), shDark()) }} hover={handleColor(shDef(10), shDark(10))}>
        <Vstack space={2}>
          <Thumbnail src={thumbnail} alt={title} draggable={false} width={730} height={180} />
          <Box forwardedAs={Vstack} space={{ xs: 1, md: 2 }} px={5} pb={5}>
            <Title forwardedAs={Text} clone="h4" isBold>
              {title}
            </Title>
            <Body forwardedAs={Text}>{spoiler}</Body>
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
const Body = styled.box`
  ${lineClamp}
`;
const Title = styled.box`
  ${lineClamp}
`;
const Thumbnail = styled(Image)`
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
    box-shadow: ${({ hover }) => hover} !important;
  }
  height: auto;
  ${breakpoints({
    md: css`
      width: 100%;
    `,
  })}
`;

export default Article;
