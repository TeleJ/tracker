import * as actionTypes from '../actions/Actions';

const initialState = {
	animes: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ANIME:
			return {
				...state,
				animes: [
					...state.animes,
					{
						id: action.anime,
						anime: action.anime,
					},
				],
			};
		case actionTypes.REMOVE_ANIME:
			const updatedArray = state.animes.filter(
				(anime) => anime.id !== action.animeId
			);
			return {
				...state,
				animes: updatedArray,
			};
		case actionTypes.ORDER_LIST:
			return {
				...state,
				animes: action.newList,
			};
		default:
			return state;
	}
};

export default reducer;
