import styled from 'styled-components'

export default function Header() { 
return (
    <ContainerHeader >
        <Headline>QUIZ-APP</Headline>
      </ContainerHeader>
);


}

const ContainerHeader = styled.header`
width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #ddd6fe;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Headline = styled.h1`
font-family: 'Courier Prime', monospace;
display: flex;
  justify-content: center;
  align-content: center;
`;