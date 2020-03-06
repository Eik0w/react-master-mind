import React from "react";
import "./App.css";
import Header from "./components/Header";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      background:
        "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
      height: "100%",
      position: "relative",
      padding: 0,
      margin: 0,
      overflow: "hidden",
      "& * ": {
        boxSizing: "border-box"
      }
    }
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "100vh",
    position: "relative",
    padding: 0,
    margin: 0,
    overflow: "hidden"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
