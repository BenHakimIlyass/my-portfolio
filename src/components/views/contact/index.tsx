import React from "react";
import styled, { Box } from "@xstyled/styled-components";
import { Text, Center, Vstack, Container, Button } from "../../";
import { breakpoints } from "../../../utils";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <Center id="contact_section">
      <Wrapper>
        <Container>
          <Vstack space={3}>
            <Text
              clone="h3"
              isBold
              bindWith={motion.h3}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              style={{ textAlign: "center" }}
              zIndex={1}
            >
              Thank you for visiting my portfolio.
            </Text>
            <Text clone="p" textAlign="center">
              I will be pleased to have the opportunity to work with you, I'll be always looking for new challenges, so
              please feel free to contact me.
            </Text>
            <Vstack space={1}>
              <Center>
                <Img src="/me.jpeg" alt="Me" draggable={false} width={240} height={240} />
              </Center>
              <Text clone="p" textAlign="center">
                Ilyass Ben Hakim
              </Text>
              <Box clone="p" color="gray" textAlign="center">
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
const Img = styled(Image)`
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
