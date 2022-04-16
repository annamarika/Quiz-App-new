import styled from 'styled-components'
import CardQuestion from './CardQuestion';
import CardAnswer from './CardAnswer';
import CardTag from './CardTag';
import Bookmark from './Bookmark';


export default function Card() {

    return (
    <ContainerCard>
      <div>
        <CardHeadline >Question</CardHeadline>
        <div>
          <Bookmark/>
        </div>
      </div>
      <ContainerQuestion>
      
       <CardQuestion />
      <CardAnswer />
        
      </ContainerQuestion>
      <CardTag/>
        
    </ContainerCard>
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

