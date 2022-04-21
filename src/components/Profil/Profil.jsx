/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";
import React, { useState } from "react";
import Button from "../Button/ButtonCss";

export default function Profil() {
  const [logout, setLogout] = useState(true);
  const [color, setColor] = useState(false);
  const [fontColor, setFontColor] = useState(false);

  return (
    <div>
      <ContainerProfil>
        <main>
          <div>
            <img
              src="http://source.unsplash.com/random/100x100/?portrait"
              alt="portrait"
            />
            <h2>Max Mustermann</h2>
          </div>
          <article>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
            sequi praesentium suscipit, ut quis necessitatibus expedita nulla
            deleniti, ad enim pariatur accusantium aut ea. Quaerat fugiat minus
            non exercitationem beatae.
          </article>

          <section>
            <h3>skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>react</li>
            </ul>
          </section>
          <Button
            bool={color}
            cool={fontColor}
            onClick={() => {
              setLogout(!logout);
              setColor(!color);
              setFontColor(!fontColor);
            }}
          >
            {logout ? "logout" : "login"}
          </Button>
        </main>
      </ContainerProfil>
    </div>
  );
}

const ContainerProfil = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    max-width: 350px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    gap: 1rem;
    margin: 2rem;
    padding: 2rem;
    position: relative;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  img {
    border-radius: 50%;
  }

  h3 {
    font-family: "Courier Prime", monospace;
    font-size: 1.5rem;
    background-color: #ddd6fe;
    text-align: center;
    padding: 0.3rem 0.8rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    display: row;
    justify-content: space-between;
    list-style-type: none;
  }

  li {
    background-color: #ddd6fe;
    padding: 0.3rem 0.8rem;
  }
`;
