import React, {useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
	root: {},
	star : {
		position : 'absolute',
		background : '#fff',
		boxShadow : '0 0 10px #fff'
	},
	stars1 : {
		position : 'absolute',
		left : 0,
		right : 0,
		bottom : 0,
		top : 0
	}

}), {name: 'Stars'});

const randomX = () => {
	return Math.floor(Math.random() * (window.innerWidth  + 1))+'px';
};

const randomY = () => {
	return Math.floor(Math.random() * (window.innerHeight  + 1))+'px';
};

const randomWH = () => {
	return  (Math.floor(Math.random() * (2 - 1 + 1)) + 1)+'px';
};

function Stars(props) {
	const {className} = props;
	const classes = useStyles(props);
	let stars = [];
	for(var i=0;i<150;i++){
		stars.push('');
	}

	return (
			<div className={classes.stars1}>
				{stars.map((elem,key) => {
					let wh = randomWH();
					return(
						<div key={key} className={classes.star} style={{width: wh, height : wh,left : randomX(), top : randomY()}}>
						</div>
					);
				})}
				</div>
	);
}


export default Stars;