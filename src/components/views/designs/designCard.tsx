import React from "react";
import styled, { css } from "@xstyled/styled-components";
import Image from "next/image";
import { Text, Vstack } from "@components";

const DesignCard = ({ link, alt, src, description, title }) => {
  return (
    <div>
      <Vstack space={2} as="a" href={`https://dribbble.com/shots/${link}`} style={{ width: "100%" }} target="_blanc">
        <Text clone="h4" isBold textAlign="left !important">
          {title}
        </Text>
        <Text injectCss={lineClamp} textAlign="left !important">
          {description}
        </Text>
        <Img src={src} alt={alt} unsized />
      </Vstack>
    </div>
  );
};

const Img = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  width: 100%;
  height: auto;
`;
const lineClamp = css`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  width: auto;
`;
export default DesignCard;
