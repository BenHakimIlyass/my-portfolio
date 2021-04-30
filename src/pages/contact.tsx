import * as React from "react";
import Head from "next/head";
import { breakpoints } from "../utils";
import { Container, Contact } from "@components";
import { withAnimation } from "../contextProvider";
import styled from "@xstyled/styled-components";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim - Contact</title>
      </Head>

      <MainPlayground>
        <Container>
          <Contact />
        </Container>
      </MainPlayground>
    </>
  );
};
const MainPlayground = styled.div`
  margin-top:40vh;
  margin-bottom: 100px;
`;
export default withAnimation(ContactPage);
