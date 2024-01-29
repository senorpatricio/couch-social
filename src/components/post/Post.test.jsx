import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Post from "./Post";

describe("<Post>", () => {
  const post = {
    post_id: "post456",
    author: {
      username: "user456",
      profile_picture_url: "https://example.com/user456.jpg",
    },
    message: "Feeling great today!",
    timestamp: "2024-01-25T15:30:00Z",
    reactions: {
      like: 50,
      love: 10,
      lol: 8,
      wow: 4,
      sad: 1,
      angry: 2,
    },
    comments: [
      {
        user: {
          username: "commenter3",
          profile_picture_url: "https://example.com/commenter3.jpg",
        },
        message: "Amazing!",
        timestamp: "2024-01-25T15:35:00Z",
      },
    ],
  };
  beforeEach(() => render(<Post postContent={post}></Post>));

  test("post should render", () => {
    let userText = screen.getByText("user456");
    expect(userText).toBeInTheDocument();
  });

  test("post message should render", async () => {
    let message = screen.getByText("Feeling great today!");
    expect(message).toBeInTheDocument();
  });
});
