import styled from "styled-components";
import { useState } from "react";

import Bookmark from "./Bookmark";

export default function Card({
  question,
  correct_answer,
  category,
  difficulty,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <ContainerCard>
      <div>
        <CardHeadline>Question</CardHeadline>
        <div>
          <Bookmark />
        </div>
      </div>
      <ContainerQuestion>
        <p>{question}</p>
        <AnswerButton
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
        >
          {showAnswer ? "hide answer" : "show answer"}
        </AnswerButton>

        <p>{showAnswer ? correct_answer : ""}</p>
      </ContainerQuestion>
      <TagContainer>
        <Tag>{category}</Tag>
        <Tag>{difficulty}</Tag>
      </TagContainer>
    </ContainerCard>
  );
}

const ContainerCard = styled.section`
  width: 350px;
  border: 0.3rem solid black;
  margin: 2rem;
  padding: 2rem;
  position: relative;
`;

const CardHeadline = styled.h2`
  font-family: "Courier Prime", monospace;
`;

const ContainerQuestion = styled.article`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1rem;
`;

const AnswerButton = styled.button`
  font-family: "Courier Prime", monospace;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #6850de;
  color: white;
  align-content: center;
  padding: 0.7rem;
  border: none;
`;

const TagContainer = styled.ul`
  display: flex;
  display: row;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
`;
const Tag = styled.li`
  background-color: #ddd6fe;
  padding: 0.3rem 0.8rem;
`;
