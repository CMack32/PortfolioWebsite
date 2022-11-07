import React from "react";
import ResponsiveAppBar from "./components/navBar.js";
import "./App.css";
import Home from "./components/home.js";
import Projects from "./components/Projects.js";
import Photos from "./components/Photos.js";
import { Routes, Route } from "react-router";
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
  <Home/>
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
