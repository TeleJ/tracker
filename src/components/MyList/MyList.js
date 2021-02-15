import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MyList.module.css';
import AddAnime from '../AddAnime/AddAnime';
import Anime from '../Anime/Anime';
import * as actionCreators from '../../Store/actions/Actions';

class MyList extends Component {
	render() {
		return (
			<div>
				<AddAnime />
				<div className={classes.Container}>
					<h1 className={classes.Title}>Animes</h1>
					<ol start="1">
						{this.props.animes.map((anime) => (
							<Anime
								key={anime.id}
								anime={anime}
								clicked={() => this.props.onDelete(anime.id)}
							/>
						))}
					</ol>
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

const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: (id) => dispatch(actionCreators.removeAnime(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
