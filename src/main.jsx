import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey, deepOrange } from "@mui/material/colors";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: blueGrey,
    secondary: deepOrange,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* implement Auth context here */}
  </React.StrictMode>
);
