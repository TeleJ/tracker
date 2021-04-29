export const ADD_ANIME = 'ADD_ANIME';
export const REMOVE_ANIME = 'REMOVE_ANIME';
export const ORDER_LIST = 'ORDER_LIST';

export const addAnime = (anime) => {
	return {
		type: ADD_ANIME,
		anime: anime,
	};
};

export const removeAnime = (id) => {
	return {
		type: REMOVE_ANIME,
		animeId: id,
	};
};

export const orderList = (newList) => {
	return {
		type: ORDER_LIST,
		newList: newList,
	};
};
