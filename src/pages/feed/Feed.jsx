import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { getPosts } from "../../utils/api";
import Post from "../../components/post/Post";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((postList) => {
        setPosts(postList.posts);
      })
      .catch((err) => {
        console.log("there is an error getting posts");
      });
  }, [posts]);

  return (
    <>
      <Typography>Check out the latest posts from your friends!</Typography>

      {posts &&
        posts.map((post) => {
          return <Post postContent={post} key={post.post_id} />;
        })}
    </>
  );
}
