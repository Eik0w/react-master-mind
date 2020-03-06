import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(
  theme => ({
    root: {},
    contentStars2: {
      height: 3000,
      position: "relative",
      transform: "translateY(0px)",
      animation: "$anim 120s linear infinite",
      width: "100%"
    },
    star: {
      position: "absolute",
      background: "#fff",
      width: 1,
      height: 1
    },
    "@keyframes anim": {
      from: {
        transform: "translateY(0px)"
      },
      to: {
        transform: "translateY(-2000px)"
      }
    }
  }),
  { name: "Stars2" }
);

const randomX = () => {
  return Math.floor(Math.random() * (window.innerWidth + 1)) + "px";
};

const randomY = () => {
  return Math.floor(Math.random() * (2000 + 1)) + "px";
};

const randomWH = () => {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1 + "px";
};

function Stars2(props) {
  const { className } = props;
  const classes = useStyles(props);
  let stars = [];
  for (var i = 0; i < 150; i++) {
    stars.push("");
  }

  return (
    <div className={classes.contentStars2}>
      {stars.map((elem, key) => {
        let wh = randomWH();
        return (
          <div
            key={key}
            className={classes.star}
            style={{ left: randomX(), top: randomY() }}
          ></div>
        );
      })}
    </div>
  );
}

export default Stars2;
