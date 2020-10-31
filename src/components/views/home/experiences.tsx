import React from "react";
import styled from "styled-components";

import { Text, Vstack, Title } from "@components";

const Experiences = () => {
  return (
    <Wrapper>
      <Vstack space={4}>
        <Vstack space={2}>
          <Text clone="h3" isBold>
            Experiences
          </Text>
          <Vstack space={1}>
            <Title>As a developer</Title>
            <Text clone="p">
              Since I was 19 years old, I started out by practicing Javascript in React JS, there were a lot of things
              that just took me quite a while to figure out, such as state/props concept, one-way data flow, managing
              global state, reusable components...
            </Text>
            <Text clone="p">
              After a couple months, I wanted to move out to functional programming, and here I found myself falling in
              love with react, hooks, redux, Next JS, styled-components, typescript, optimization concepts, web
              animations...
            </Text>
            <Text clone="p">
              <span>After that, I joined my friends, on a really interesting project </span>
              <a href="https://gfree.co" target="_blanc" style={{ color: "#0888E4" }}>
                the Gluten-Free Community
              </a>
              <span>
                , and that was the first experience that allowed me to discover a lot new concepts in the software
                engineering field, as I said before.
              </span>
            </Text>
          </Vstack>
          <Vstack space={1}>
            <Title>As a designer</Title>
            <Text clone="p">
              In 2016 I was trying to learn image/video editing, and that was the first step of my design career.{" "}
            </Text>
            <Text clone="p">
              After a while, a friend of mine told me that Adobe XD and Figma are the best free tools for prototyping,
              and here my real web design journey has started.
            </Text>
            <Text clone="p">
              In 2019 I started working as a web designer on{" "}
              <a style={{ color: "#0888E4" }} href="https://gfree.co" target="_blanc">
                the Gluten-Free Community
              </a>{" "}
              project, and it was a big step in my career, in which I learned about a lot of topics such as{" "}
              <b>Typography</b>, <b>Consistency</b>, <b>Hierarchical design</b>, <b>Aesthetic effects</b>,{" "}
              <b>Fits & Similarity</b>, <b>Accessibility</b> ...
            </Text>
          </Vstack>
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
