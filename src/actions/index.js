import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';

export function fetchMovies() {
    const result = axios.get('http://localhost:4000/movies');
    return {
        type: FETCH_MOVIES,
        payload: result
    }
}

export function fetchMovie(id) {
    const result = axios.get(`http://localhost:4000/movies/${id}`);

    return {
        type: FETCH_MOVIE,
        payload: result
    }
}