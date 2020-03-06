import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
	root: {},
}), {name: 'GameBoard'});


function GameBoard(props) {
	const {className} = props;
	const classes = useStyles(props);
	return (
			<div className={classes.board}>

		</div>);
}


export default GameBoard;