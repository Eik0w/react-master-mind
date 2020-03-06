import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(
  theme => ({
    root: {},
    container: {
      width: "60%",
      top: "50%",
      transform: "translateY(-50%)",
      position: "relative",
      textAlign: "center"
    },
    title: {
      marginBottom: "50px",
      textAlign: "center"
    },
    actionBtn: {
      marginTop: "50px",
      padding: "10px 50px",
      boxShadow: "0 0 10px #E86C5F",
      fontSize: 30,
      marginLeft: "0.5%",
      marginRight: "0.5%",
      color: "white"
    }
  }),
  { name: "Rules" }
);

function Rules(props) {
  const { className } = props;
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      <Typography variant={"h4"} className={classes.title}>
        {" "}
        Règles du jeux :{" "}
      </Typography>
      <Typography variant={"h5"} color={"secondary"}>
        Le but du Mastermind est de gagner un maximum de manches. Le joueur qui
        doit trouver la combinaison secrète gagne une manche dès lors qu’il y
        parvient en maximum 12 coups. L'ordinateur qui a conçu la combinaison
        secrète remporte la manche quand son adversaire n’est pas parvenu a
        trouvé la combinaison en 12 coups.
      </Typography>
      <Button
        className={classes.actionBtn}
        variant="contained"
        color={"secondary"}
        onClick={() => {
          props.state("home");
        }}
      >
        Retour à l'accueil
      </Button>
    </div>
  );
}

export default Rules;
