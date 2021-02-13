export const ADD_ANIME = 'ADD_ANIME';
export const REMOVE_ANIME = 'REMOVE_ANIME';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

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

export const addUser = (user) => {
	return {
		type: REMOVE_ANIME,
		user: user,
	};
};

export const removeUser = (user) => {
	return {
		type: REMOVE_ANIME,
		user: user,
	};
};
