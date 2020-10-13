import React from "react";
import styled from "styled-components";

import { H4, P, Vstack, Hstack, Title } from "../../";
import { breakpoints } from "../../../utils";

const Experiences = () => {
  return (
    <Wrapper>
      <Vstack space={2}>
        <H4 style={{ fontWeight: 700 }}>Technologies I use</H4>
        <Vstack space={1}>
          <Title>As a developer</Title>
          <P as="li">React JS/TS and Next JS -- Frontend developement</P>
          <P as="li">React custom hooks -- Code optimization</P>
          <P as="li">Redux, React Context API and React Query -- State management</P>
          <P as="li">Framer motion and react-spring -- Web animations & graphic motions</P>
          <P as="li">Native CSS, styled-components and xstyled/styled-components -- Styling components</P>
        </Vstack>
        <Vstack space={1}>
          <Title>As a designer</Title>
          <P as="li">Figma for UI UX design, prototyping and icons drawing.</P>
          <P as="li">Adobe photoshop CC for image editing.</P>{" "}
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
