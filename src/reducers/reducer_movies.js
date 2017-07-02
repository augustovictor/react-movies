import _ from 'lodash';
import { FETCH_MOVIES, FETCH_MOVIE, DELETE_MOVIE } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_MOVIES: {
            return _.mapKeys(action.payload.data, '_id');
        }

        case FETCH_MOVIE: {
            return { ...state, [action.payload.data[0]._id]: action.payload.data[0] };
        }

        case DELETE_MOVIE: {
            return _.omit(state, action.payload);
        }
        
        default: return state;
    }
}