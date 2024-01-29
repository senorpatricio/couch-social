import { useEffect, useState } from "react";
import { Typography, Box, Card, CardMedia } from "@mui/material";
import { getProfileInfo } from "../../utils/api";

export default function Profile() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getProfileInfo()
      .then((userProfile) => {
        // console.log("userProf", userProfile.user);
        setProfile(userProfile.user);
      })
      .catch((err) => {
        console.log("there is an error getting posts");
      });
  }, [profile]);
  return (
    <>
      <Typography>Profile</Typography>
      {profile && profile !== undefined ? (
        <Box>
          <Card
            sx={{
              padding: ".5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                margin: '0 1rem'
              }}
            >
              <img src={profile.profile_picture_url} alt="" />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "1rem",
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  U: {profile.username}
                </Typography>
                <Typography>Name: {profile.full_name}</Typography>
                <Typography>Location: {profile.location}</Typography>
              </Box>
            </Box>
            <hr />
            <Typography>Followers: {profile.followers_count}</Typography>
            <Typography>Following: {profile.following_count}</Typography>
            <hr />
            <Typography variant="h5" component="div">
              Bio:
            </Typography>
            <Typography gutterBottom variant="body" component="div">
              {profile.bio}
            </Typography>
          </Card>
        </Box>
      ) : (
        "There was trouble loading the profile"
      )}
    </>
  );
}
