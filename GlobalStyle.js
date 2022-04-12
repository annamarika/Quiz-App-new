import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  
  body {
    font-family: 'Raleway', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
  }





`;
