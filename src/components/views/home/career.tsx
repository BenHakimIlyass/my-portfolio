import React from "react";
import styled from "@xstyled/styled-components";

import { Text, Vstack,Hstack, Title } from "@components";

const Career = () => {
  return (
    <Wrapper>
      <Vstack space={4}>
        <Vstack space={2}>
          <Text clone="h3" isBold>
            Career
          </Text>
          <Hstack>
          <Topic mt={20}>TOPICS</Topic>
          <div>
          <Vstack space={0.6}>
            <Title>2019 - 2020</Title>
          
          <Text bindWith="li">Typescript and Javascript</Text>
            <Text clone="h5" isBold>
             Frontend developer <span style={{fontStyle:'italic', fontWeight:400}}>at</span> OBYTES
           </Text>
          <Text bindWith="li">React JS and Next JS</Text>
          <Text bindWith="li">GraphQL Apollo</Text>
          <Text bindWith="li">React Context API</Text>
          </Vstack>
            </div>
          </Hstack>
       
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

const Topic = styled.divBox`
color: primary !important;
background-color: secondary !important;
transform: rotate(-90deg);
display:flex;
justify-content:center;
align-items:center;
padding: 4px 8px;
`
export default Career;
