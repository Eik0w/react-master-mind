import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import RedTick from "./RedTick";
import BlueTick from "./BlueTick";
import GreenTick from "./GreenTick";
import YellowTick from "./YellowTick";
import carbon from "../img/carbon.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  theme => ({
    root: {},
    result: {
      height: "70px",
      display: "flex",
      borderRadius: "10px 10px 0 0",
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      position: "relative"
    },
    wrapingColor: {
      flex: "0 1 auto",
      margin: "1%"
    },
    overlay: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: "url(" + carbon + ") repeat 0 0"
    },
    interogation: {
      textAlign: "center",
      textShadow: "0 0 10px"
    }
  }),
  { name: "GameResult" }
);

const objResult = {
  blue: {
    dom: "",
    js: ""
  },
  red: {
    dom: "",
    js: ""
  },
  yellow: {
    dom: "",
    js: ""
  },
  green: {
    dom: "",
    js: ""
  }
};
const tabColor = ["blue", "red", "yellow", "green"];

function GameResult(props) {
  const { className } = props;
  const classes = useStyles(props);
  const [result, setResult] = useState(false);
  useEffect(() => {
    let tmpArray = [];
    tabColor.forEach((e, k) => {
      tmpArray.push(tabColor[setRandomResult()]);
      if (k === 3) {
        setResult(tmpArray);
        console.log(result);
      }
    });
  }, []);

  const setRandomResult = () => {
    return parseInt(Math.random() * (3 - 0) + 0, 10);
  };

  return (
    <div className={classes.result}>
      {result &&
        result.map((elem, key) => {
          return (
            <div key={key} className={classes.wrapingColor}>
              {elem === "red" && <RedTick />}
              {elem === "blue" && <BlueTick />}
              {elem === "green" && <GreenTick />}
              {elem === "yellow" && <YellowTick />}
            </div>
          );
        })}
      <div className={classes.overlay}>
        <Typography
          className={classes.interogation}
          variant={"h2"}
          color={"primary"}
        >
          ?
        </Typography>
      </div>
    </div>
  );
}

export default GameResult;
