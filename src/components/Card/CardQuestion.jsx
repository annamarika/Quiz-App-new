

/*import { useEffect, useState } from "react";
import questionFetch from "../Url/Fetch"

export default function CardQuestion() {
    const url =
      "https://the-trivia-api.com/questions";
      const [questionList, setQuestionList] = useState([]);
      
      useEffect(() => {
          questionFetch(url, setQuestionList);
      }, []);

    return (
   
        <article>
          {questionList.map(({id, question}) => {

          return (
        <p key={id}>{question}</p>

          );
        })}
          
        </article>

    
    );
}



/*
    const apiURL =
      "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple";
  
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
      questionFetch(apiURL); 
    }, []);

    //questionFetch(apiURL); 

    <button onClick={fetchQuestion}>fetchQuestion</button>
<ul> {characterList.map(({question, status, id})=> {
  return (
    <li key={id}>
    <p>{question}</p>
    <p>{status}</p>
    </li>
  )
})}
}*/