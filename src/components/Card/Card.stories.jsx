import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card/Card",
  component: Card,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: "3em", maxWidth: "400px" }}>
          <Story />
        </div>
      );
    },
  ],
};

const props = {
  question: "question",
  correct_answer: "answer",
  category: "bla",
  difficulty: "hard",
};

export const Default = () => <Card {...props} />;

export const IsBookmarked = () => <Card {...props} isBookmarked />;
