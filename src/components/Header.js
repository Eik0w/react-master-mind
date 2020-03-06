import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Logo from "./Logo";
import Stars from "./Stars";
import Stars2 from "./Stars2";
import Stars3 from "./Stars3";
import Buttons from "./Buttons";
import Rules from "./Rules";

const useStyles = makeStyles(
  theme => ({
    root: {},
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden"
    },
    containerIn: {
      position: "relative",
      top: 0,
      left: 0,
      height: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      animation: "$fadin 2s linear 1"
    },
    contentAction: {
      flex: "1 0 100%",
      justifyContent: "center",
      textAlign: "center"
    },
    "@keyframes fadin": {
      from: {
        opacity: "0"
      },
      to: {
        opacity: "1"
      }
    },
    "@keyframes fadout": {
      from: {
        opacity: "1"
      },
      to: {
        opacity: "0"
      }
    }
  }),
  { name: "Header" }
);

function Header(props) {
  const { className } = props;
  const classes = useStyles(props);
  const [stateApp, setStateApp] = useState("home");
  const container = useRef();

  return (
    <>
      <div className={classes.background}>
        <Stars />
        <Stars2 />
        <Stars3 />
      </div>
      <div className={classes.containerIn} ref={container}>
        {stateApp === "home" && (
          <>
            <Logo />
            <div className={classes.contentAction}>
              <Buttons state={setStateApp} />
            </div>
          </>
        )}
        {stateApp === "rules" && <Rules state={setStateApp} />}
      </div>
    </>
  );
}

export default Header;
