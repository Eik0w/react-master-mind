import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {},
	contentStars3 : {
		width : 3000,
		position : "absolute",
		left : 0,
		top : 0,
		bottom : 0,
		transform : 'translateX(0px)',
		animation : '$anim 300s linear infinite'
	},
	star : {
		position : 'absolute',
		background : '#fff',
		width : 1,
		height : 1,

	},
	'@keyframes anim' : {
		from : {
			transform : 'translateX(0px)'
		},
		to : {
			transform: 'translateX(-2000px)'
		}
	}
}), {name: 'Stars2'});



const randomX = () => {
	return Math.floor(Math.random() * (window.innerWidth  + 1))+'px';
};

const randomY = () => {
	return Math.floor(Math.random() * (2000  + 1))+'px';
};

const randomWH = () => {
	return  (Math.floor(Math.random() * (3 - 1 + 1)) + 1)+'px';
}

function Stars3(props) {
	const {className} = props;
	const classes = useStyles(props);
	let stars = []
	for(var i=0;i<150;i++){
		stars.push('');
	}

	return (
			<div className={classes.contentStars3}>
				{stars.map((elem,key) => {
					let wh = randomWH();
					return(
							<div key={key} className={classes.star} style={{left : randomX(), top : randomY()}}	>
							</div>
					);
				})}
			</div>
	);
}


export default Stars3;