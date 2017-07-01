import { combineReducers } from 'redux';
import ReducerMovies from './reducer_movies';

export default combineReducers({
    movies: ReducerMovies
});