import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";
import Logo from "./Logo";
import Stars from "./Stars";
import Stars2 from "./Stars2";
import Stars3 from "./Stars3";
import Buttons from "./Buttons";


const useStyles = makeStyles(theme => ({
	root: {},
	background: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		overflow: 'hidden'
	},
	mainContainer : {
		position : 'relative',
		top : 0,
		left : 0,
		height : '100%',
		display : 'flex',
		flexWrap : 'wrap',
		justifyContent : 'center',
		alignItems : 'flex-start'
	},
	contentAction : {
		flex : '1 0 100%',
		justifyContent: 'center',
		textAlign : 'center'
	}
}), {name: 'Header'});


function Header(props) {
	const {className} = props;
	const classes = useStyles(props);
	return (
			<>
				<div className={classes.background}>
					<Stars/>
					<Stars2/>
					<Stars3/>
				</div>
				<div className={classes.mainContainer}>
					<Logo/>
					<div className={classes.contentAction}>
						<Buttons />
					</div>
				</div>
			</>
	);
}


export default Header;