import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
