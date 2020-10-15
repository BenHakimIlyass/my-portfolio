import * as React from "react";
import Head from "next/head";
import { breakpoints } from "../utils";
import { Container, Contact } from "@components";
import { withAnimation } from "../animationProvider";
import styled from "@xstyled/styled-components";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Ilyass Ben Hakim</title>
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
  margin-bottom: 100px;
  ${breakpoints({
    0: { transform: `translate3d(0,20vh,0)` },
    920: `transform: translate3d(0,30vh,0);`,
  })}
`;
export default withAnimation(ContactPage);
