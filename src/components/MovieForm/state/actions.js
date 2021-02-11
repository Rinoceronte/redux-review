export const setMovieInfo = (title, poster, rating) => {
    console.log(title, poster, rating);
    return {
        type: 'SET_MOVIE_INFO',
        payload: {title, poster, rating}
    }
}