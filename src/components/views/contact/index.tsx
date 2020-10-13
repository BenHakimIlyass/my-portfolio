import React from "react";
import styled, { Box } from "@xstyled/styled-components";
import { H3, H4, Center, P, Vstack, Container, Button } from "../../";
import { breakpoints } from "../../../utils";
const Contact = () => {
  return (
    <Center id="contact_section">
      <Wrapper>
        <Container>
          <Vstack space={3}>
            <H3 direction="center" style={{ zIndex: 1 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              Thank you for visiting my portfolio.
            </H3>
            <H4 direction="center" style={{ zIndex: 1 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
              I will be pleased to have the opportunity to work with you.
            </H4>
            <P direction="center">I'm always looking for new challenges, so please feel free to contact me.</P>
            <Vstack space={1}>
              <Center>
                <Image src="/me.jpeg" alt="Me" />
              </Center>
              <P direction="center">Ilyass Ben Hakim</P>
              <Box forwardedAs={P} color="gray" direction="center">
                UI UX Web designer and React JS developer
              </Box>
            </Vstack>
            <Center>
              <a href="/Ilyass_Ben_Hakim_-_Frontend_developer.pdf" target="_blanc">
                <Button>My resume</Button>
              </a>
            </Center>
          </Vstack>
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

export default Contact;
