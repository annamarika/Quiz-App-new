import styled from 'styled-components'
import CardAnswer from './CardAnswer';
import CardTag from './CardTag';
import Bookmark from './Bookmark';
import { useEffect, useState } from "react";
import questionFetch from "../Url/Fetch"




export default function Card() {

  const url =
  "https://the-trivia-api.com/questions";
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    questionFetch(url, setQuestionList);
}, []);

    return (
      <div>
        {questionList.map(({id, question}) => {

return (
    <ContainerCard>
<div>
            <CardHeadline >Question</CardHeadline>
            <div>
              <Bookmark/>
            </div>
          </div>
          <ContainerQuestion>
          <p key={id}>{question}</p>
        <CardAnswer />
        
        </ContainerQuestion>
        <CardTag/>
        </ContainerCard>
          );
        })}
    );
  
    
    </div>
);
}

const ContainerCard = styled.section`
display: flex;
  flex-direction: column;
  
  align-items: center;
  max-width: 350px;
  border: 0.3rem solid black;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 2rem;
  position: relative;
`;

const CardHeadline = styled.h2`
font-family: 'Courier Prime', monospace;
`;


const ContainerQuestion = styled.article`
display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1rem;
`; 

