import React from "react";
import Bookmark from "./Bookmark";

export default {
  title: "Components/Card/Bookmark",
  component: Bookmark,
  decorators: [
    (Story) => {
      return (
        <div
          style={{ padding: "3em", maxWidth: "400px", position: "relative" }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export const Default = () => <Bookmark />;
