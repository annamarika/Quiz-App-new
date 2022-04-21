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


*/
