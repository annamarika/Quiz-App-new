import styled, { css } from "styled-components";

const Button = styled.button`
  font-family: "Courier Prime", monospace;
  font-size: 1.5rem;
  font-weight: bold;
  align-content: center;
  padding: 1.5rem;
  border: none;

  color: black;
  ${({ bool = false }) => {
    if (bool) {
      return css`
        color: white;
      `;
    }
  }}

  background-color: #ddd6fe;
  ${({ bool = false }) => {
    if (bool) {
      return css`
        background: #6850de;
      `;
    }
  }}
`;

export default Button;
