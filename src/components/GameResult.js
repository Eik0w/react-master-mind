import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(
  theme => ({
    root: {},
    result: {
      height: "50px",
      border: "1px solid red"
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
      Coucou Ici Résultat{" "}
      {result &&
        result.map((elem, key) => {
          return <div>{elem}</div>;
        })}
    </div>
  );
}

export default GameResult;
