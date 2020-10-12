import React from "react";
import styled from "styled-components";

import { H4, P, Vstack, Hstack, Title } from "../../";
import { breakpoints } from "../../../utils";

const Experiences = () => {
  return (
    <Wrapper>
      <Vstack space={4}>
        <Vstack space={2}>
          <H4 style={{ fontWeight: 700 }}>Experiences</H4>
          <Vstack space={1}>
            <Title>As a developer</Title>
            <P>
              Since I was 19 years old, I started practicing Javascript in React JS, there were lots of things that just
              took me quite a while to figure out, such as state/props concept, one-way data flow, managing global
              state, reusable components...
            </P>
            <P>
              But an 8-9 months later, I found myself falling in love with react hooks, redux, Next JS,
              styled-components, typescript, optimization concepts, web animations...
            </P>
            <P>
              After that, I joined my friends, on a real project{" "}
              <a href="gfree.co" target="_blanc" style={{ color: "#0888E4" }}>
                The Gluten-Free Community
              </a>
              , and this was the first experience that allowed me to discover a lot of new concepts, as I said before.
            </P>
          </Vstack>
          <Vstack space={1}>
            <Title>As a designer</Title>
            <P>
              In 2016 I was trying to learn image/video editing, and that was the first step of my design career.{" "}
              <P>
                After a while, a friend of mine told me that Adobe XD and Figma are the best free tools for prototyping,
                and here my real web design journey has started.
              </P>
            </P>
            <P>
              In 2019 I started working as a web designer on{" "}
              <a style={{ color: "#0888E4" }} href="https://gfree.co" target="_blanc">
                the Gluten-Free Community
              </a>{" "}
              project, and it was a big step in my career, in which I learned about a lot of topics such as{" "}
              <span>Typography</span>, <span>Consistency</span>, <span>Hierarchical design</span>,{" "}
              <span>Aesthetic effects</span>, <span>Fits & Similarity laws</span> ...
            </P>
          </Vstack>
        </Vstack>
      </Vstack>
    </Wrapper>
  );
};
const TextBoundary = styled.div`
  ${breakpoints({
    920: { maxWidth: 500 },
  })}
`;
const Cluster = styled(Hstack)`
  ${breakpoints({
    0: { flexWrap: "wrap" },
    920: { flexWrap: "nowrap" },
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: fit-content;
  position: relative;
`;

export default Experiences;
