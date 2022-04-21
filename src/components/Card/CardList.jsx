/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
import styled from "styled-components";

import { useEffect, useState } from "react";
import questionFetch from "../Url/Fetch";
import Card from "./Card";

export default function CardList() {
  const url =
    "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple";
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    questionFetch(url, setQuestionList);
  }, []);

  return (
    <ContainerCardMax>
      {questionList.map((question) => {
        return <Card key={question.question} {...question} />;
      })}
      );
    </ContainerCardMax>
  );
}

const ContainerCardMax = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
