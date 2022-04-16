import React, { useState } from "react";
import styled from 'styled-components'

export default function CardAnswer() {
    const [showAnswer, setShowAnswer] = useState(true);
    const [visible, setVisible] = useState(false);
   
    return (
        <>
        <AnswerButton onClick={() => {
          setShowAnswer(!showAnswer);
          setVisible(!visible);
          
        }}>
          {showAnswer ? "show answer" : "hide answer"}
        </AnswerButton>
        {/* visible && <p>Answer </p>*/}
        <p>{visible ? "answer" : ""}</p>
        
        </>
        
        );
    
    }

     
    
   

const AnswerButton = styled.button`
font-family: 'Courier Prime', monospace;
font-size: 1.5rem;
  font-weight: bold;
  background-color: #6850de;
  color: white;
  align-content: center;
  padding: 0.7rem;
  border: none;
  
`
;




