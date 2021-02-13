import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './AddAnime.module.css';
import * as actionCreators from '../../Store/actions/Actions';

class AddAnime extends Component {
	state = {
		currentAnime: '',
	};

	render() {
		const handleInputChange = (e) => {
			this.setState({ currentAnime: e.target.value });
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			this.props.onSubmit(this.state.currentAnime);
			this.setState({ currentAnime: '' });
		};

		return (
			<div>
				<form onSubmit={handleSubmit} className={classes.Form}>
					<input
						className={classes.Title}
						type="text"
						name="title"
						placeholder="Enter Title Here:"
						value={this.state.currentAnime}
						onChange={handleInputChange}
					/>
					<button type="submit" className={classes.Submit}>
						Submit
					</button>
				</form>
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
		onSubmit: (anime) => dispatch(actionCreators.addAnime(anime)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAnime);
