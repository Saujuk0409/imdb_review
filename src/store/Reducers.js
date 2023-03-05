 import * as actions from '../store/ActionTypes';

const initialState = {
	movies: [],
	watchlist: window.localStorage.getItem('watchlist') ? JSON.parse(window.localStorage.getItem('watchlist')) : [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case actions.ADD_TO_WATCHLIST:
			const newMovie = [...state.watchlist, action.payload];
			window.localStorage.setItem('watchlist', JSON.stringify(newMovie));
			return {
				...state,
				watchlist: newMovie,
			};
		case actions.REMOVE_FROM_WATCHLIST:
			const originalFav = state.watchlist;
			const filtredFav = originalFav.filter((f) => f.id !== action.payload);
			return {
				...state,
				watchlist: filtredFav,
			};
		default:
			return state;
	}
};