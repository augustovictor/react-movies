import { combineReducers } from 'redux';
import ReducerMovies from './reducer_movies';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    movies: ReducerMovies,
    form: formReducer
});