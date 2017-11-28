import { GET_FAVOURITE,ADD_FAVOURITE  } from '../actions/types';

export default function(state = null, action) {
    switch(action.type) {
    case ADD_FAVOURITE:
    if(state == null)
    {
        return Object.assign({}, state, {
            data: [action.payload]
         });
    }
    else {
        state.data = state.data || [];
        console.log(state.data);
        return Object.assign({}, state, {
           data: state.data.concat(action.payload)
        }); 
    }
    case GET_FAVOURITE:
        return action.payload || false;
    default:
        return state;
    }
}