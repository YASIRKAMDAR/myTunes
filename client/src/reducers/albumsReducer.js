import { GET_RESULTS } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
        case GET_RESULTS:
            return action.payload || false;
        default:
            return state;
    }
}