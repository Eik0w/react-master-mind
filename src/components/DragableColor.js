import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useDrag } from "react-dnd";

const useStyles = makeStyles(
  theme => ({
    root: {},
    color: {
      width: 50,
      height: 50,
      borderRadius: 50
    },
    blue: {
      background: "radial-gradient(circle at 33px 33px, #4981B3, #484848)",
      margin: "0 auto"
    },
    red: {
      background: "radial-gradient(circle at 33px 33px, #FF8882, #484848)",
      margin: "0 auto"
    },
    green: {
      background: "radial-gradient(circle at 33px 33px, #25B35B, #484848)",
      margin: "0 auto"
    },
    yellow: {
      background: "radial-gradient(circle at 33px 33px, #FFBC4F, #484848)",
      margin: "0 auto"
    }
  }),
  { name: "DragableColor" }
);

function DragableColor(props) {
  const { className } = props;
  const classes = useStyles(props);
  const colorClass = clsx({
    [classes.blue]: props.color === "blue",
    [classes.red]: props.color === "red",
    [classes.yellow]: props.color === "yellow",
    [classes.green]: props.color === "green"
  });
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: "color",
      color: props.color
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging
    })
  });

  return (
    <div className={clsx(classes.color, colorClass)} ref={drag}>
      {""}
    </div>
  );
}

export default DragableColor;
