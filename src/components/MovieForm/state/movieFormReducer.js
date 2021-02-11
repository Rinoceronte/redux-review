const initialState = {
    title: '', poster: '', rating: null,
}


export default function reducer(state = initialState, action){
    switch(action.type) {
        case 'SET_MOVIE_INFO':
            return { ...state, ...action.payload};
        default:
            return state;
    }
}