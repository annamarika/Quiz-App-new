import styled from "styled-components";

export default function Form({ currywurst }) {
  // Hier oben übergeben wir die props aus App.js
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { question, answer, tag } = form.elements;
    currywurst(question.value, answer.value, tag.value);
    // Hier geben wir der props, die eigentlich unsere Funktion Doener ist, die Inhalte mit
    form.reset();
  }

  return (
    <>
      <ContainerForm aria-labelledby="user" onSubmit={handleSubmit}>
        {/* Hier wird die Funktion für den Submit ausgeführt */}
        <FieldsetForm>
          <label htmlFor="question">question</label>
          <input
            name="question"
            id="question"
            type="text"
            placeholder="Add your Question"
          />
        </FieldsetForm>
        <FieldsetForm>
          <label htmlFor="answer">answer</label>
          <input id="answer" type="text" placeholder="Add your Answer" />
        </FieldsetForm>
        <FieldsetForm>
          <label htmlFor="tag">tag</label>
          <input id="tag" type="text" placeholder="Add tags divided by comma" />
        </FieldsetForm>
        <button>Submit</button>
      </ContainerForm>
      ;
    </>
  );
}

const ContainerForm = styled.form`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 2rem;
  gap: 1rem;
  min-height: 70vh;
`;

const FieldsetForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;

  label {
    background-color: #ddd6fe;
    margin-bottom: 2rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  input {
    height: 6rem;
  }
`;
