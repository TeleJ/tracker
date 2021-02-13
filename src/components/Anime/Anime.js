import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Anime.module.css';
import Button from '../Button/Button';

const Anime = (props) => {
	const [canDelete, setCanDelete] = useState(false);

	return (
		<div
			className={classes.Container}
			onMouseEnter={() => setCanDelete(true)}
			onMouseLeave={() => setCanDelete(false)}
		>
			<li className={classes.Title}>{props.anime.anime}</li>
			{canDelete ? <Button clicked={props.clicked} /> : null}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		animes: state.animes,
	};
};

export default connect(mapStateToProps)(Anime);
