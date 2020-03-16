import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import GameResult from "./GameResult";
import GameTry from "./GameTry";
import GameColor from "./GameColor";
import bg from "../img/try.png";

const useStyles = makeStyles(
  theme => ({
    root: {},
    leBoard: {
      flex: "0 1 60%",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "stretch",
      alignSelf: "center"
    },
    boardLeft: {
      flex: "0 1 15%",
      flexWrap: "wrap",
      alignSelf: "center",
      justifySelf: "center",
      borderRadius: "20px 0 0 20px",
      padding: 20,
      background: "url(" + bg + ") repeat 0 0 #fff",
      borderTop: "1px solid #e3e3e3",
      borderLeft: "1px solid #e3e3e3",
      borderBottom: "1px solid #e3e3e3"
    },
    boardCenter: {
      flex: "0 1 65%",
      borderRadius: 20,
      boxShadow: "0 0 200px rgba(255,255,255,0.4)",
      background: "url(" + bg + ") repeat 0 0 #fff",
      overflow: "hidden"
    },
    boardRight: {
      flex: "0 1 20%",
      alignSelf: "center",
      borderRadius: "0 20px 20px 0",
      padding: 20,
      boxShadow: "0 0 200px rgba(255,255,255,0.4)",
      background: "url(" + bg + ") repeat 0 0 #fff",
      borderTop: "1px solid #e3e3e3",
      borderRight: "1px solid #e3e3e3",
      borderBottom: "1px solid #e3e3e3"
    }
  }),
  { name: "GameBoard" }
);

function GameBoard(props) {
  const { className } = props;
  const classes = useStyles(props);
  const [currentTry, setCurrentTry] = useState(0);
  const [gameTry, setGameTry] = useState([
    { isCurrent: true, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null },
    { isCurrent: false, isFinish: false, result: null }
  ]);

  //watchers
  useEffect(() => {
    const tmpGame = [];
    gameTry.forEach((elem, key) => {
      if (elem.key == currentTry) {
        elem.isCurrent = true;
      } else {
        elem.isCurrent = false;
      }
      tmpGame.push(elem);
    });
    setGameTry(tmpGame);
  }, [currentTry]);

  return (
    <div className={classes.leBoard}>
      <div className={classes.boardLeft}>
        <GameColor />
      </div>
      <div className={classes.boardCenter}>
        <GameResult />
        {gameTry &&
          gameTry.map((elem, key) => {
            return (
              <GameTry
                key={key}
                isFinish={elem.isFinish}
                result={elem.result}
                isCurrent={elem.isCurrent}
              />
            );
          })}
      </div>
      <div className={classes.boardRight}>
        Bonsoir je suis la partie de droite
      </div>
    </div>
  );
}

export default GameBoard;
