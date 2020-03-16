import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import tryImg from "../img/bg.png";

const useStyles = makeStyles(
  theme => ({
    root: {},
    try: {
      height: "50px",
      borderBottom: "1px solid #e3e3e3",
      borderLeft: "1px solid #e3e3e3",
      borderRight: "1px solid #e3e3e3",
      padding: 10
    }
  }),
  { name: "GameTry" }
);

function GameTry(props) {
  const { className } = props;
  const classes = useStyles(props);
  return <div className={classes.try}> TATITATU WEHS </div>;
}

export default GameTry;
