import React from 'react';

import classes from './Anime.module.css';

const Anime = (props) => {
	return (
		<div className={classes.Container}>
			<h3 className={classes.Title}>{props.anime}</h3>
		</div>
	);
};

export default Anime;
