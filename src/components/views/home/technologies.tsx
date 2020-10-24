import React from "react";
import styled from "styled-components";

import { Text, Vstack, Title } from "@components";

const Experiences = () => {
  return (
    <Wrapper>
      <Vstack space={2}>
        <Text clone="h4" isBold>
          Technologies I use
        </Text>
        <Vstack space={1}>
          <Title>As a developer</Title>
          <ul>
            <Vstack space={1}>
              <Text clone="p" bindWith="li">
                React JS/TS and Next JS -- Frontend developement
              </Text>
              <Text clone="p" bindWith="li">
                React custom hooks -- Code optimization
              </Text>
              <Text clone="p" bindWith="li">
                Redux, React Context API and React Query -- State management
              </Text>
              <Text clone="p" bindWith="li">
                Framer motion and react-spring -- Web animations & graphic motions
              </Text>
              <Text clone="p" bindWith="li">
                Native CSS, styled-components and xstyled/styled-components -- Styling components
              </Text>
            </Vstack>
          </ul>
        </Vstack>
        <Vstack space={1}>
          <Title>As a designer</Title>
          <ul>
            <Vstack space={1}>
              <Text clone="p" bindWith="li">
                Figma for UI UX design, prototyping and icons drawing.
              </Text>
              <Text clone="p" bindWith="li">
                Adobe photoshop CC for image editing.
              </Text>
            </Vstack>
          </ul>
        </Vstack>
      </Vstack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: fit-content;
  position: relative;
`;

export default Experiences;
