import React from "react";
import styled from "@xstyled/styled-components";
import { Only } from "@components";
import { Text, Vstack, Hstack, Title } from "@components";

const Career = () => {
  return (
    <Wrapper>
      <Vstack space={2}>
        <Text clone="h3" isBold>
          Career
        </Text>
        <Vstack space={6}>
          <CareerWithTopic
            period="2019 - 2020"
            position="Frontend developer"
            color="rgb(255, 198, 32)"
            company="OBYTES"
            project={{ name: "(shighel.com)", link: "https://shighel.com" }}
            topics={["Typescript", "React JS", "Next JS", "GraphQL Apollo", "React Context API", "Framer motion"]}
          />
          <CareerWithTopic
            period="2020 - Present"
            position="Frontend developer"
            company="NVISION"
            color="#006083"
            status="Currently not published"
            topics={["Javascript", "React JS", "React Context API"]}
          />
          <CareerWithTopic
            period="2019 - Present"
            position="Frontend engigneer and UI UX designer"
            company="Gluten Free Community"
            color="#65D6AD"
            status="Currently under maintenance"
            topics={["Typescript", "Next JS", "React JS", "Redux", "React spring"]}
            project={{ name: "(gfree.co)", link: "https://gfree.co" }}
          />
        </Vstack>
      </Vstack>
    </Wrapper>
  );
};

const CareerWithTopic = ({
  color = "primary",
  period,
  position,
  company,
  project = { name: "", link: "" },
  topics,
  status = "",
}) => (
  <Vstack space={0.6}>
    <Title>{period}</Title>

    <Text clone="h5" isBold>
      {position} <ItalicSpan>at</ItalicSpan> {company}
    </Text>

    <Text clone="h5" isBold>
      <a style={{ color }} href={project.link} target="_blanc">
        {" "}
        {project.name}
      </a>
    </Text>
    <ItalicSpan color="lightGray" fontSize="14px">
      {status}
    </ItalicSpan>

    {topics.map((item, i) => (
      <Text bindWith="li" key={i}>
        {item}
      </Text>
    ))}
  </Vstack>
);
const ItalicSpan = styled.span`
  font-style: italic;
  font-weight: 400;
`;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  height: 30px;
`;
export default Career;
