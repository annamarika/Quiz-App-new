/* eslint-disable react/react-in-jsx-scope */
import styled, { css } from "styled-components";
import React, { useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <ContainerFooter>
      <FooterNav>
        <FooterUL>
          <FooterLi>
            <FooterButton
              bool={color}
              onClick={() => {
                setVisible(!visible);
                setColor(!color);
              }}
            >
              {visible ? "answer" : ""}
              <img src="./images/home.svg" alt="home icon" />
            </FooterButton>
          </FooterLi>
          <FooterLi>
            <FooterButton>
              <img src="./images/bookmark.svg" alt="bookmark icon" />
            </FooterButton>
          </FooterLi>
          <FooterLi>
            <FooterButton>
              <img src="./images/notes.svg" alt="home icon" />
            </FooterButton>
          </FooterLi>
          <FooterLi>
            <FooterButton>
              <img src="./images/profil.svg" alt="home icon" />
            </FooterButton>
          </FooterLi>
        </FooterUL>
      </FooterNav>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.footer`
  width: 100%;
  background-color: #ddd6fe;
  _padding: 1.5rem;
  position: sticky;
  bottom: 0;
  display: flex;
`;

const FooterNav = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const FooterUL = styled.ul`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const FooterLi = styled.li`
  width: 25%;
  display: flex;
  justify-content: center;
`;

const FooterButton = styled.button`
  background-color: #ddd6fe;
  border: none;
  padding: 1.5rem;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  border: none;

  background-color: #ddd6fe;
  ${({ bool = false }) => {
    if (bool) {
      return css`
        background: #6850de;
      `;
    }
  }}
`;

// background-color: $ {(props) => props.version === "active" ? "#6850de" : "#ddd6fe"}
