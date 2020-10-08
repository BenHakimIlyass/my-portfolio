import React from "react";
import styled from "@xstyled/styled-components";
import { H3, Center, P, Vstack, Container } from "../../";
import { breakpoints } from "../../../utils";
const Contact = () => {
  return (
    <Center id="contact_section">
      <Wrapper>
        <Container>
          <div style={{ maxWidth: 860 }}>
            <Vstack space={3}>
              <H3
                direction="center"
                style={{ zIndex: 1 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
              >
                Thank you for visiting my portfolio. I will be pleased to have
                the opportunity to work with you.
              </H3>
              <P direction="center">
                I'm always looking for new challenges, so if you want to be in
                touch with me, feel free to use my contact informations
              </P>
              <Vstack space={1}>
                <Center>
                  <Image src="/me.jpeg" alt="Me" />
                </Center>
                <P direction="center">Ilyass Ben Hakim</P>
                <P direction="center">
                  UI UX Web designer and React JS developer
                </P>
              </Vstack>
              <Center>
                <a
                  href="/Ilyass_Ben_Hakim_-_Frontend_developer.pdf"
                  target="_blanc"
                >
                  <Button>My resume</Button>
                </a>
              </Center>
            </Vstack>
          </div>
        </Container>
      </Wrapper>
    </Center>
  );
};
const Image = styled.img`
  object-fit: cover;
  border-radius: 150px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  ${breakpoints({
    0: { width: "200px", height: "200px" },
    920: { width: "240px", height: "240px" },
  })}
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  position: relative;
`;
const Button = styled.button`
  background-color: #fff;
  color: #000;
  height: 40px;
  border: none;
  width: fit-content;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.4s;
  &:hover {
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -4px, 0);
  }
`;
export default Contact;
