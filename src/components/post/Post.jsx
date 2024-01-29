import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import './Post.css'

export default function Post(postContent) {
  const post = postContent.postContent;
  const [commentsCollapsed, setCommentsCollapsed] = useState(true);

  const getReactions = (incomingPost) => {
    let reactions = [];
    for (let item in incomingPost.reactions) {
      reactions.push({ name: item, number: incomingPost.reactions[item] });
    }
    return reactions;
  };
  const reactionsArray = getReactions(post);

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: ".5rem",
        margin: "5px 0",
      }}
    >
      <CardContent>
        <Typography
          component="div"
          sx={{
            fontSize: 14,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          color="text.secondary"
          gutterBottom
        >
          <Link color="secondary">{post.author.username}</Link>{" "}
          {new Date(post.timestamp).toLocaleString()}
        </Typography>
        <Typography variant="h5" component="div">
          {post.message}
        </Typography>
        <Typography
          variant="body"
          component=""
          className="comment-trigger"
          onClick={() => setCommentsCollapsed(!commentsCollapsed)}
        >
          {post.comments.length} Comment{post.comments.length === 1 ? "" : "s"}
        </Typography>

        {!commentsCollapsed && post.comments.length
          ? post.comments.map((comment) => {
              return (
                <div className="comment-box" key={`${comment.timestamp}-${comment.user.username}`}>
                  <Typography variant="body">
                    {comment.user.username}: {comment.message}
                  </Typography>
                </div>
              );
            })
          : ""}
        <hr />
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
          {reactionsArray.map((reaction) => {
            return (
              <Typography key={reaction.name} component="span">
                {reaction.name}: {reaction.number}
              </Typography>
            );
          })}
        </CardActions>
      </CardContent>
    </Card>
  );
}
