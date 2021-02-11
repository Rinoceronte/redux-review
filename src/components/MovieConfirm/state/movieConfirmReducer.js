const initialState = {movies: []};

export default function reducer(state = initialState, action) {
    switch(action.type){
        case 'UPDATE_MOVIE_LIST':
            return {movies: [...state.movies, action.payload]};
        default: return state;
    }
}
