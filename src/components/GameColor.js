import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

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
    },
    color: {
      width: 50,
      height: 50,

      borderRadius: 50
    },
    isBlue: {
      background: "radial-gradient(circle at 33px 33px, #4981B3, #484848)",
      margin: "0 auto"
    },
    isRed: {
      background: "radial-gradient(circle at 33px 33px, #FF8882, #484848)",
      margin: "0 auto"
    },
    isGreen: {
      background: "radial-gradient(circle at 33px 33px, #25B35B, #484848)",
      margin: "0 auto"
    },
    isYellow: {
      background: "radial-gradient(circle at 33px 33px, #FFBC4F, #484848)",
      margin: "0 auto"
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
          <div className={clsx(classes.color, classes.isBlue)}></div>
        </div>
        <div className={classes.colorHole}>
          <div className={clsx(classes.color, classes.isRed)}></div>
        </div>
        <div className={classes.colorHole}>
          <div className={clsx(classes.color, classes.isGreen)}></div>
        </div>
        <div className={classes.colorHole}>
          <div className={clsx(classes.color, classes.isYellow)}></div>
        </div>
      </div>
    </div>
  );
}

export default GameColor;
