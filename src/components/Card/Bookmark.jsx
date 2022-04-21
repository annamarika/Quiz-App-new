import styled, { css } from "styled-components";
import React, { useState } from "react";

export default function Card() {
  const [bgColor, setBgColor] = useState(false);

  return (
    <CardBookmark
      bool={bgColor}
      onClick={() => {
        setBgColor(!bgColor);
      }}
    >
      <img src="./images/bookmark.svg" alt="bookmark icon" />
    </CardBookmark>
  );
}

const CardBookmark = styled.button`
  background-color: white;
  border: none;
  position: absolute;
  top: -10px;
  right: 20px;

  ${({ bool = false }) => {
    if (bool) {
      return css`
        background: #6850de;
      `;
    }
  }}
`;
