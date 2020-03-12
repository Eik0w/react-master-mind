import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(
  theme => ({
    root: {},
    try: {
      height: "50px",
      border: "1px solid red"
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
