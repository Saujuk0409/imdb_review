import * as actions from "./ActionTypes"
export const fetchMovies=(movies)=>{
    return{
        type:actions.FETCH_MOVIES,
        payload:movies,
    };
};

export const addWatchlist = (movie) => {
	return {
		type: actions.ADD_TO_WATCHLIST,
		payload: movie,
	};
};
export const RemoveFromWatchlistAction = (id) => {
	return {
		type: actions.REMOVE_FROM_WATCHLIST,
		payload: id,
	};
};