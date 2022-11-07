import React from "react";
import ResponsiveAppBar from "./components/navBar.js";
import "./App.css";
import Home from "./components/home.js";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F1F2F3",
    },
    secondary: {
      main: "#18161B",
    },
  },
  typography: {
    fontFamily: ["Oswald"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
