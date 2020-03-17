import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import tryImg from "../img/bg.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(
  theme => ({
    root: {},
    try: {
      height: "60px",
      borderBottom: "1px solid #e3e3e3",
      borderLeft: "1px solid #e3e3e3",
      borderRight: "1px solid #e3e3e3",
      padding: 10,
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center"
    },
    containColor: {
      flex: "0 1 50%",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap"
    },
    emptyColor: {
      flex: "0 1 auto",
      height: "40px",
      width: "40px",
      borderRadius: "100%",
      backgroundColor: "#484848",
      boxShadow: "0 0 10px #000 inset",
      marginRight: 20
    },
    containResult: {
      flex: "0 1 auto",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap"
    },
    emptyResult: {
      flex: "0 1 auto",
      height: 10,
      width: 10,
      borderRadius: 10,
      backgroundColor: "#484848",
      marginRight: 5
    }
  }),
  { name: "GameTry" }
);

const tab4 = ["", "", "", ""];

function GameTry(props) {
  const { className } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.try}>
      <div className={classes.containColor}>
        {tab4.map((elem, key) => {
          return <div className={classes.emptyColor} key={key}></div>;
        })}
      </div>
      <div className={classes.containResult}>
        {tab4.map((elem, key) => {
          return <div key={key} className={classes.emptyResult}></div>;
        })}
      </div>
      <div className={classes.actions}>
        <Button variant={"contained"} color={"primary"}>
          {" "}
          Valider{" "}
        </Button>
      </div>
    </div>
  );
}

export default GameTry;
