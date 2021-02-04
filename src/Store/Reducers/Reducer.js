import * as actionTypes from '../actions/Actions';

const initialState = {
	animes: ['Kimetsu No Yaiba'],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ANIME:
			return {
				...state,
				animes: [...state.animes, action.anime],
			};
		case actionTypes.REMOVE_ANIME:
			return state.filter((anime) => anime.id !== action.payload.id);
		default:
			return state;
	}
};

export default reducer;
