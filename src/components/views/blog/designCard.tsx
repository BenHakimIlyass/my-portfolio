import React from "react";
import styled, { css } from "@xstyled/styled-components";
import Image from "next/image";
import { Text, Vstack } from "@components";

const DesignCard = ({ link, alt, src, description, title }) => {
  return (
    <Vstack space={2} as="a" href={`https://dribbble.com/shots/${link}`} target="_blanc">
      <Text clone="h4" isBold textAlign="left !important">
        {title}
      </Text>
      <Img src={src} alt={alt} unsized />
      <Text clone="p" textAlign="left !important">
        {description}
      </Text>
    </Vstack>
  );
};

const Img = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  width: 100%;
`;
export default DesignCard;
