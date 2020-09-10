import React from "react";
import styled from "styled-components";
import {
  DisplayText,
  AnimatedH3,
  AnimatedP,
  P,
  H4,
  Vstack,
  Hstack,
  Container,
} from "../../";
import Img from "./imgs";
import { breakpoints } from "../../../utils";

const Minimalist = () => {
  return (
    <Wrapper>
      <Container>
        <Vstack space={4}>
          <Cluster space={2} alignItems="center" justifyContent="space-between">
            {/* hero texts */}
            <TextBoundary>
              <Vstack space={2}>
                <AnimatedH3
                  style={{ zIndex: 1 }}
                  animate={{
                    opacity: 1,
                  }}
                  initial={{
                    opacity: 0,
                  }}
                >
                  I design minimalist digital prototypes, for a clean UI UX
                  products.
                </AnimatedH3>
                <AnimatedP style={{ zIndex: 1 }}>
                  By respecting the UI/UX rules, everyone can make his own
                  perfect product.
                </AnimatedP>
              </Vstack>
            </TextBoundary>
            {/* hero img */}
            <Img delay={1} />
          </Cluster>
          <Vstack space={2}>
            {/* testimonials */}
            <Vstack space={1}>
              <H4 style={{ fontWeight: 700 }}>Career</H4>
              <P style={{ color: "#CFCFCF" }} as="li">
                In 2016 I was trying to learn image/video editing, and that was
                the first step of my design career.{" "}
              </P>
              <P style={{ color: "#CFCFCF" }} as="li">
                After a while, a friend of mine told me that Adobe XD and Figma
                are the best free tools for prototyping, and here my real web
                design journey has started.
              </P>
              <P style={{ color: "#CFCFCF" }} as="li">
                In 2019 I started working as a product designer on{" "}
                <a
                  style={{ color: "#fff" }}
                  href="https://gfree.co"
                  target="_blanc"
                >
                  the Gluten-Free Community
                </a>{" "}
                project, and it was a big step in my career, in which I learned
                about a lot of topics such as{" "}
                <span style={{ color: "#fff" }}>Typography</span>,{" "}
                <span style={{ color: "#fff" }}>Consistency</span>,{" "}
                <span style={{ color: "#fff" }}>Hierarchical design</span>,{" "}
                <span style={{ color: "#fff" }}>Aesthetic effects</span>,{" "}
                <span style={{ color: "#fff" }}>Fits & Similarity laws</span>{" "}
                ...
              </P>
            </Vstack>
          </Vstack>
        </Vstack>
      </Container>
      <DisplayText
        style={{ top: 140, left: "20%", zIndex: 0 }}
        title="UI UX design master"
      />
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

export default Minimalist;
