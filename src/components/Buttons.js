import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
	root: {},
	contentBtn : {
		justifyContent : 'center'
	},
	actionBtn : {
		padding : '20px 100px',
		boxShadow : '0 0 10px #E86C5F',
		fontSize : 30,
		marginLeft : '0.5%',
		marginRight : '0.5%',
		color : 'white'
	},
	actionBtn2 : {
		background :'#E88B84',
		padding : '20px 100px',
		boxShadow : '0 0 10px #E88B84',
		fontSize : 30,
		marginLeft : '0.5%',
		marginRight : '0.5%',
		color : 'white'
	}
}), {name: 'Buttons'});


function Buttons(props) {
	const {className} = props;
	const classes = useStyles(props);
	return (
			<>
				<Button className={classes.actionBtn} variant="contained" color={"secondary"} > Règles du jeu </Button>
				<Button className={classes.actionBtn} variant="contained" color="primary"> Jouer </Button>
				<Button className={classes.actionBtn} variant="contained" color={"secondary"} > Classement </Button>
			</>
				);
}


export default Buttons;