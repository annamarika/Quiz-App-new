import { useState } from "react";
import FormField from "./FormField";

export default function Form() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [tag, setTag] = useState([""]);

  function doener(question, answer, tag) {
    setQuestion(question);
    setAnswer(answer);
    setTag(tag);
  }

  return (
    <>
      <FormField currywurst={doener} />
      <p>question:{question}</p>
      <p>answer:{answer}</p>
      <p>tag:{tag}</p>
    </>
  );
}
