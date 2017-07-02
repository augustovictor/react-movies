import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';

const ROOT_URL = 'http://localhost:4000/movies';


export function fetchMovies() {
    const result = axios.get(ROOT_URL);
    return {
        type: FETCH_MOVIES,
        payload: result
    }
}

export function fetchMovie(id) {
    const result = axios.get(`${ROOT_URL}/${id}`);

    return {
        type: FETCH_MOVIE,
        payload: result
    }
}

export function createMovie(movie, callback) {
    const result = axios.post(ROOT_URL, movie)
        .then(() => callback());

    return {
        type: CREATE_MOVIE,
        payload: result
    }
}

export function deleteMovie(id, callback) {
    axios.delete(`${ROOT_URL}/${id}`)

    return {
        type: DELETE_MOVIE,
        payload: id
    }
}

export function updateMovie(movie, callback) {
    const result = axios.put(ROOT_URL, movie)
        .then(() => callback());

    return {
        type: DELETE_MOVIE,
        payload: result
    }
}