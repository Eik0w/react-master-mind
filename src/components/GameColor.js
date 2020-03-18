import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import DragableColor from "./DragableColor";

const useStyles = makeStyles(
  theme => ({
    root: {},
    colorContainer: {
      flex: "1 1 100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    title: {
      justifyContent: "flex-start"
    },
    colorInner: {
      justifyContent: "center"
    },
    colorHole: {
      margin: 10
    }
  }),
  { name: "GameColor" }
);

function GameColor(props) {
  const { className } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.colorContainer}>
      <Typography className={classes.title} variant={"h6"} color={"primary"}>
        Couleurs disponibles :
      </Typography>
      <div className={classes.colorInner}>
        <div className={classes.colorHole}>
          <DragableColor color={"blue"} />
        </div>
        <div className={classes.colorHole}>
          <DragableColor color={"red"} />
        </div>
        <div className={classes.colorHole}>
          <DragableColor color={"green"} />
        </div>
        <div className={classes.colorHole}>
          <DragableColor color={"yellow"} />
        </div>
      </div>
    </div>
  );
}

export default GameColor;
