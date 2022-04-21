/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

export default function CardTag() {
  return (
    <TagContainer>
      <Tag>lorem</Tag>
      <Tag>lorem</Tag>
      <Tag>lorem</Tag>
      <Tag>lorem</Tag>
    </TagContainer>
  );
}

const TagContainer = styled.ul`
  display: flex;
  display: row;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
`;
const Tag = styled.li`
  background-color: #ddd6fe;
  padding: 0.3rem 0.8rem;
`;
