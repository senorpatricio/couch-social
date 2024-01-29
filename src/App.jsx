import { useEffect, useState } from "react";
import { Container, Typography, AppBar, Toolbar } from "@mui/material";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { getUser } from "./utils/api";
import Feed from "./pages/feed/Feed";
import Profile from "./pages/profile/Profile";

const pages = ["home", "profile"];

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((userObj) => {
      setUser(userObj);
    });
  }, [user]);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: "space-around"}}>
          <Link to="/">
            <Typography variant="h6" noWrap fontFamily="monospace">
              Home
            </Typography>
          </Link>
          <Link to="/profile">
            <Typography variant="h6" noWrap fontFamily="monospace">
              Profile
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography
          color="primary"
          variant="h1"
          sx={{
            width: "100%",
          }}
        >
          COUCH SOCIAL
        </Typography>
        <Routes>
        <Route exact path="/profile">
            <Route exact path="/profile" element={<Profile />}/>
          </Route>
          <Route exact path="/">
            <Route exact path="/" element={<Feed />}/>
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
