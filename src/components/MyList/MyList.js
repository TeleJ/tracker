import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MyList.module.css';
import AddAnime from '../AddAnime/AddAnime';
import Anime from '../Anime/Anime';

class MyList extends Component {
	render() {
		return (
			<div>
				<AddAnime />
				<div className={classes.Container}>
					<h1 className={classes.Title}>Title</h1>
					{this.props.animes.map((anime) => (
						<Anime anime={anime} key={anime} />
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		animes: state.animes,
	};
};

export default connect(mapStateToProps)(MyList);
