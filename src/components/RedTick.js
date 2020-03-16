import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(
  theme => ({
    root: {},
    color: {
      width: 50,
      height: 50,
      borderRadius: 50,
      background: "radial-gradient(circle at 33px 33px, #FF8882, #484848)"
    }
  }),
  { name: "RedTick" }
);

function RedTick(props) {
  const { className } = props;
  const classes = useStyles(props);
  return <div className={classes.color}></div>;
}

export default RedTick;
