import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
	root: {},
	container : {
		display : 'flex',
		flexWrap : 'wrap',
		alignItems : 'center',
		flex : '0 0 auto',
		position : 'relative',
		top : '10%'

	},
	right : {
		flex : '0 0 0%',
		justifySelf: 'right',
		alignSelf : 'center'
	},
	left : {
		flex : '0 0 0%',
		justifySelf : 'left',
		alignSelf : 'center'
	}
}), {name: 'Logo'});


function Logo(props) {
	const {className} = props;
	const classes = useStyles(props);
	return (<div className={classes.container}>
		<div className={classes.right}>
			<Typography variant={'h1'} color={'primary'} >M</Typography>
		</div>
		<div className={classes.left}>
			<Typography variant={'h4'} > Aster </Typography>
			<Typography variant={'h4'} > Ind </Typography>
		</div>
	</div>);
}


export default Logo;