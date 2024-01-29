import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
// import { formatTime } from '../../utils/helpers'

export default function Post(postContent) {
  const post = postContent.postContent;

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
        <hr />
        <CardActions
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
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
